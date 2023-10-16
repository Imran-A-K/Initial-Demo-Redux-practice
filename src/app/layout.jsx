import ProviderComponent from "@/redux/Provider/Provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <ProviderComponent>{children}</ProviderComponent>
        </body>
      </html>
    </>
  );
}
