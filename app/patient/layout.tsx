"use client";
import { Inter } from "next/font/google";
import Navbar from "./_components/Navbar";
import { useAuth, useUser } from "@clerk/nextjs";
import { Spinner } from "@/components/spinner";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { isSignedIn, user } = useUser();
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isSignedIn) {
    return redirect("/");
  }

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
