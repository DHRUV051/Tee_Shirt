import {Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";

const PlusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ['200','300','400','500','600','700','800']
});


export const metadata = {
  title: "TeeSpace",
  description: "An Online Platform for Selling T-Shirt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={PlusJakartaSans.className}>
        <Header/>
        <main>
        {children}
        </main>
        
      </body>
    </html>
  );
}
