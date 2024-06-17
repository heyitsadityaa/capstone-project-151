import { Inter } from "next/font/google";
import Navitem from "./_components/Navitem";


const inter = Inter({ subsets: ["latin"] });

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div >
      <Navitem/>
      <div >
        <main className={inter.className}>{children}</main>
      </div>
    </div>
  );
};
export default LandingPageLayout;
