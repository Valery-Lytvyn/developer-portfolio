import HomeIcon from "../assets/icons/icons8-home-32.png";
import UserIcon from "../assets/icons/icons8-user-32.png";
import PortfolioIcon from "../assets/icons/icons8-portfolio-32.png";
import ContactIcon from "../assets/icons/icons8-mail-32.png";
import { NavigationItem } from "@/types";

export const navigationData: NavigationItem[] = [
  { icon: HomeIcon, label: "home", route: "/" },
  { icon: UserIcon, label: "resume", route: "/resume" },
  { icon: PortfolioIcon, label: "portfolio", route: "/portfolio" },
  { icon: ContactIcon, label: "contact", route: "/contact" },
];
