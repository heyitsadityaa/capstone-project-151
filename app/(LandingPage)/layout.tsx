import { Inter } from "next/font/google";
import { Navbar } from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="h-full pt-40">
        <main className={inter.className}>{children}</main>
      </div>
    </div>
  );
};
export default LandingPageLayout;
