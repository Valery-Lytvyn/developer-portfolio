import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sideBar/SideBar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A collection of work showcasing skills, experience, and achievements.Valery Lytvyn Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="flex min-h-screen w-full items-center justify-center py-4 pb-20 pl-4 pr-4 sm:py-12 md:pr-28 ">
          <div className="min-h-full w-full rounded-2xl border border-stone-500 p-2">
            {children}
            <SideBar
              selectedNavItem={
                (children as React.ReactElement)?.props?.childProp?.segment
              }
            />
          </div>
        </main>
      </body>
    </html>
  );
}
