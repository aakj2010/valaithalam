import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/valaithalam-logo.svg";

// Define types for the menu items
interface MenuItem {
  href?: string;
  label: string;
  links?: { href: string; label: string }[];
}

const Header: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");
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

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = (): void => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
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
        { href: "/services/web-development", label: "Web design" },
        { href: "/services/mobile-development", label: "Web development" },
        { href: "/services/seo", label: "Search Engine Optimization" },
        { href: "/services/web-hosting", label: "Web hosting" },
        {
          href: "/services/get-your-own-email-domain",
          label: "Get your own email domain",
        },
        {
          href: "/services/graphic-design-for-product-listing",
          label: "Graphic Design for Product Listing",
        },
        {
          href: "/services/product-location-photography",
          label: "Product & Location Photography",
        },
        {
          href: "/services/ad-videos-for-social-media-marketing",
          label: "Ad Videos for social media marketing",
        },
      ],
    },
    {
      label: "Mobile Apps",
      links: [
        {
          href: "/services/web-development",
          label: "Apps for both Android and iOS",
        },
        {
          href: "/services/mobile-development",
          label: "Mobile Responsive Websites",
        },
        { href: "/services/seo", label: "SMS Integration" },
        { href: "/services/seo", label: "Push Notification Services" },
        { href: "/services/seo", label: "Redesign of Mobile apps" },
        { href: "/services/seo", label: "Mobile Design - Prototypes" },
      ],
    },
    {
      label: "Industry",
      links: [
        { href: "/services/web-development", label: "Export & Import Sector" },
        { href: "/services/mobile-development", label: "Jewellery" },
        { href: "/services/seo", label: "Schools & Colleges" },
        { href: "/services/seo", label: "Hospitals" },
        { href: "/services/seo", label: "Financial Institutions" },
        { href: "/services/seo", label: "Photography" },
        { href: "/services/seo", label: "Youtubers" },
        { href: "/services/seo", label: "Showrooms" },
        { href: "/services/seo", label: "Travel & Tourism" },
        { href: "/services/seo", label: "Interior Decorators" },
        { href: "/services/seo", label: "Manufacturing Sector" },
        { href: "/services/seo", label: "Independent Educators" },
      ],
    },
    {
      label: "Solutions",
      links: [
        {
          href: "/services/web-development",
          label: "Content Management Systems",
        },
        {
          href: "/services/mobile-development",
          label: "Enterprise Resource Planning",
        },
        { href: "/services/seo", label: "E-Commerce Web Setup" },
        { href: "/services/seo", label: "Free Tools for Target Customers" },
        { href: "/services/seo", label: "Payment Integrations" },
        { href: "/services/seo", label: "Website Analytics" },
      ],
    },
    { href: "/", label: "Get Estimate" },
  ];

  const renderDropdown = (
    menuName: string,
    links: { href: string; label: string }[]
  ): JSX.Element => (
    <ul
      className={`absolute z-10 overflow-hidden shadow-[0px_4px_6px_0px_rgba(0,0,0,0.09)] bg-menu_bg_light font-normal border dark:bg-menu_bg_dark dark:border-menu_border_dark border-menu_border_light left-0 mt-2 w-max rounded-lg transition-all ${
        dropdowns[menuName] ? "block" : "hidden"
      }`}
    >
      {links.map(({ href, label }) => (
        <li
          key={label}
          className="px-4 py-[6px] hover:bg-menu_hover_light hover:!font-medium dark:hover:bg-menu_hover_dark"
        >
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="max-w-screen-xl relative z-10 pt-[32px] mx-auto text-[13px] leading-[20px]">
      <nav className="container bg-menu_bg_light dark:bg-menu_bg_dark font-medium rounded-[12px] lg:border-[0.5px] px-[6px] py-1 dark:border-menu_border_dark border-menu_border_light lg:w-max w-full mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="lg:w-max w-full flex justify-between">
          <Link href="/">
            <Image
              className="dark:invert h-8 w-32 cursor-pointer"
              src={Logo}
              alt="Valaithalam-Logo"
              width={120}
              height={32}
              priority
            />
          </Link>

          {/* Mobile Menu Icon */}
          <div className="block lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl p-2"
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
                <button className="hover:bg-menu_hover_light z-0 rounded-[8px] dark:hover:bg-menu_hover_dark px-4 py-[6px]">
                  {item.label}
                </button>
                {renderDropdown(item.label.toLowerCase(), item.links)}
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href!}
                  className={`hover:bg-menu_hover_light z-0 rounded-[8px] dark:hover:bg-menu_hover_dark px-4 py-2 ${
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
          className="w-8 h-8 flex items-center justify-center mx-2"
        >
          <span className="material-icons" style={{ fontSize: "20px" }}>
            {theme === "light" ? "dark_mode" : "light_mode"}
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
