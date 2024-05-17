import { Inter } from "next/font/google";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div lang="en">
    //   <main className={inter.className}>{children}</main>
    // </div>
    <html>
      <body className="h-full">
        <Navbar />
        <div className="h-full pt-40">
          <main className={inter.className}>{children}</main>
        </div>
      </body>
    </html>
  );
}
