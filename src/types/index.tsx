import { StaticImageData } from "next/image";
//App pages
// Resume Page
export interface skillListProps {
  skills: {
    name: string;
    icon: StaticImageData;
  }[];
}

// Contact Page
export interface ContactInputProps {
  id: string;
  inputName: string;
  inputType: string;
}

export interface SubmitButtonProps {
  isShowLoader: boolean;
}

export interface PopupMessageProps {
  text: string;
}

// Portfolio Page
export interface CardData {
  id: number;
  cardPicture: StaticImageData;
  cardMobilePicture: StaticImageData;
  title: string;
  pageUrl: string;
  gitHubUrl: string;
}

export interface PortfolioCardProps {
  cardData: CardData;
}

export interface CardImageProps {
  isHover: boolean;
  cardPicture: StaticImageData;
  cardMobilePicture: StaticImageData;
  title: string;
  id: number;
}
export interface CardDescriptionProps {
  isHover: boolean;
  pageUrl: string;
  gitHubUrl: string;
  title: string;
}
export interface LinkIconProps {
  src: StaticImageData;
  alt: string;
  url: string;
}

//App Components
// SideBar Component
export interface SidebarProps {
  selectedNavItem: string;
}

export interface NavigationItem {
  icon: StaticImageData;
  label: string;
  route: string;
}

export interface NavItemProps extends NavigationItem {
  hoverHandler: (arg: string) => void;
  clickHandler: (arg1: string, arg2: string) => void;
  isVisible: { visible: boolean; label: string };
  selectedItem: string;
}
//This interface using SectionTitle, SectionSubtitle,Paragraph,  AnimatedTitle,AnimatedSubtitle
export interface TextProps {
  text: string;
}

//AppData
//ContactsData
export interface ContactData {
  icon: StaticImageData;
  label: string;
  link: string;
}

export interface ContactItemProps {
  contactData: ContactData;
}
