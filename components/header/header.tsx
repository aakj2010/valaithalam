import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/valaithalam-logo.svg";
import darkLogo from "../../public/images/valaithalam-dark-logo.svg";
import { ThemeContext } from "../context/theme-context";

// Define types for the menu items
interface MenuItem {
  href?: string;
  label: string;
  links?: { href?: string; label: string }[];
}

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [dropdowns, setDropdowns] = useState<{ [key: string]: boolean }>({
    websites: false,
    mobileApps: false,
  });
  const [menuOpen, setMenuOpen] = useState(false); // State to track mobile menu

  // Declare timeouts type using Record
  const timeouts: Record<string, NodeJS.Timeout | null> = {
    websites: null,
    mobileApps: null,
  };

  const handleMouseEnter = (menuName: string): void => {
    if (timeouts[menuName]) {
      clearTimeout(timeouts[menuName]!);
    }
    setDropdowns((prev) => ({ ...prev, [menuName]: true }));
  };

  const handleMouseLeave = (menuName: string): void => {
    timeouts[menuName] = setTimeout(() => {
      setDropdowns((prev) => ({ ...prev, [menuName]: false }));
    }, 50);
  };

  const menuItems: MenuItem[] = [
    {
      label: "Websites",
      links: [
        { label: "Web design" },
        { label: "Web development" },
        { label: "Search Engine Optimization" },
        { label: "Web hosting" },
        { label: "Get your own email domain" },
        { label: "Graphic Design for Product Listing"},
        { label: "Product & Location Photography" },
        { label: "Ad Videos for social media marketing"},
      ],
    },
    {
      label: "Mobile Apps",
      links: [
        { label: "Apps for both Android and iOS" },
        { label: "Mobile Responsive Websites"},
        { label: "SMS Integration" },
        { label: "Push Notification Services" },
        { label: "Redesign of Mobile apps" },
        { label: "Mobile Design - Prototypes" },
      ],
    },
    {
      label: "Industry",
      links: [
        { label: "Export & Import Sector" },
        { label: "Jewellery" },
        { label: "Schools & Colleges" },
        { label: "Hospitals" },
        { label: "Financial Institutions" },
        { label: "Photography" },
        { label: "Youtubers" },
        { label: "Showrooms" },
        { label: "Travel & Tourism" },
        { label: "Interior Decorators" },
        { label: "Manufacturing Sector" },
        { label: "Independent Educators" },
      ],
    },
    {
      label: "Solutions",
      links: [
        { label: "Content Management Systems" },
        { label: "Enterprise Resource Planning" },
        { label: "E-Commerce Web Setup" },
        { label: "Free Tools for Target Customers" },
        { label: "Payment Integrations" },
        { label: "Website Analytics" },
      ],
    },
    { href: "/", label: "Get Estimate" },
  ];

  const renderDropdown = (
    menuName: string,
    links: { href?: string; label: string }[]
  ): JSX.Element => (
    <ul
      className={`lg:!absolute z-10 transition-all duration-500 ease-linear overflow-hidden shadow-[0px_2px_6px_0px_rgba(0,0,0,0.09)] bg-menu_bg_light font-normal dark:bg-menu_bg_dark dark:border-menu_border_dark border-menu_border_light left-0 mt-2 lg:!w-max lg:!min-w-[16rem] w-[90%] mx-auto rounded-[6px] ${
        dropdowns[menuName] ? "block" : "hidden"
      }`}
    >
      {links.map(({ label }) => (
        <li
          key={label}
          className="px-4 py-[6px] hover:bg-menu_hover_light hover:!font-medium dark:hover:bg-menu_hover_dark"
        >
          <p>{label}</p>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="max-w-screen-2xl relative z-10 lg:!fixed lg:!top-8 left-0 w-full !mx-auto text-[13px] leading-[20px]">
      <nav className="container shadow-[0px_2px_6px_0px_rgba(0,0,0,0.09)] bg-menu_bg_light dark:bg-menu_bg_dark font-medium lg:!rounded-[12px] lg:border-[0.5px] lg:!p-[6px] p-3 dark:border-menu_border_dark border-menu_border_light lg:w-max w-full mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="lg:w-max w-full h-auto flex justify-between items-center">
          <Link href="/">
            <Image
              className="h-8 w-32 cursor-pointer"
              src={theme === "light" ? Logo : darkLogo}
              alt="Valaithalam-Logo"
              width={120}
              height={32}
              priority
            />
          </Link>

          {/* Mobile Menu Icon */}
          <div className="flex items-center justify-center lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className=""
            >
              {menuOpen ? (
                <span className="material-icons">close</span>
              ) : (
                <span className="material-icons">menu</span>
              )}
            </button>
          </div>
        </div>

        {/* Desktop Menu Items */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex gap-3 items-center text-[13px] leading-[20px]`}
        >
          {menuItems.map((item) =>
            item.links ? (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.label.toLowerCase())}
                onMouseLeave={() => handleMouseLeave(item.label.toLowerCase())}
              >
                <button className="hover:bg-menu_hover_light z-0 rounded-[6px] dark:hover:bg-menu_hover_dark px-4 py-[6px]">
                  {item.label}
                </button>
                {renderDropdown(item.label.toLowerCase(), item.links)}
              </li>
            ) : (
              <li key={item.label} className="mt-4 lg:!mt-0 ">
                <Link
                  href={item.href!}
                  className={`hover:bg-menu_hover_light z-0 rounded-[6px] leading-[18px] dark:hover:bg-menu_hover_dark px-4 py-2 ${
                    item.label === "Get Estimate"
                      ? "dark:bg-button_bg_dark bg-button_bg_light text-button_text_light dark:text-button_text_dark dark:hover:text-button_text_light hover:text-button_text_dark"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="w-8 h-8 lg:!flex items-center justify-center ml-2 hidden"
        >
          <span className="material-icons" style={{ fontSize: "20px" }}>
            {theme === "light" ? "bedtime" : "light_mode"}
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
