import CustomCursor from "./components/CustomCursor";
import "./globals.css";
import { JetBrains_Mono, Poppins } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
