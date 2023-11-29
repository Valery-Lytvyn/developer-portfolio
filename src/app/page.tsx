import AnimatedTitle from "@/components/home_page_using/AnimatedTitle";
import ContactList from "@/components/contactList/ContactList";
import AnimatedSubtitle from "@/components/home_page_using/AnimatedSubtitle";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-6 py-10">
      <AnimatedTitle text="Valery Lytvyn" />
      <AnimatedSubtitle text="front-end developer" />
      <ContactList />
    </div>
  );
}
