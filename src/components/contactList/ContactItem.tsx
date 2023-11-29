import { ContactItemProps } from "@/types";
import Image from "next/image";

function ContactItem({ contactData }: ContactItemProps) {
  const { icon, label, link } = contactData;

  return (
    <li className="hover:filter-to-primary hover:scale-110">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image src={icon} alt={label} width={32} height={32} />
      </a>
    </li>
  );
}

export default ContactItem;
