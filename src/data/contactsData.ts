import { ContactData } from "@/types";
import GithubIcon from "../assets/icons/icons8-github-32.png";
import LinkedinIcon from "../assets/icons/icons8-linkedin-32.png";
import TelegramIcon from "../assets/icons/icons8-telegram-32.png";
import MailIcon from "../assets/icons/icons8-email-32.png";
import PhoneIcon from "../assets/icons/icons8-phone-32.png";

export const contacts: ContactData[] = [
  {
    icon: GithubIcon,
    label: "github icon",
    link: "https://github.com/Valery-Lytvyn",
  },
  {
    icon: LinkedinIcon,
    label: "linkedin icon",
    link: "https://linkedin.com/in/valery-lytvyn",
  },
  {
    icon: TelegramIcon,
    label: "telegram icon",
    link: "https://t.me/valery_lytvyn",
  },
  {
    icon: PhoneIcon,
    label: "phone icon",
    link: "tel:+38 050 967 89 26",
  },
  {
    icon: MailIcon,
    label: "mail icon",
    link: "mailto:lytvynvalery@gmail.com",
  },
];

export const paragraphText = [
  `Have a new project in mind, a problem to solve, or just want to connect?
Let's do it.`,
  `Use the form on this page or contact me in
another way.`,
];
