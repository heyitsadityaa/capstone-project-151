import { Inter } from "next/font/google";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="h-full">
        <Navbar />
        <div className="h-full pt-20">
          <main className={inter.className}>{children}</main>
        </div>
      </body>
    </html>
  );
}
