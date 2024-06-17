"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heros = () => {
  return (
    <>
      <main className="">
        <div className="container min-h-[620px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-2 gap-5 place-items-center">
            {/* image  section */}
            <div className="order-1 sm:order-2 relative">
              <img src="./images/useimage of doctor.jpg" alt="" />
              <div className="bg-white dark:grey-900 px-4 py-2  rounded-xl shadow-md absolute -bottom-5 -right-8"></div>
            </div>
            {/* text content section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
              <h3 className="text-4xl sm:text-5xl font-semibold">
                Keep Your All Health Record In{" "}
                <span className="text-sky-600">KeepSafe</span>
              </h3>
              <p className="text-xl">
                Transform your lifestyle with personalized health insights at
                your fingertips, Take control of your well-being with our
                intuitive health companion.
              </p>

              <Button className="btn-primary">
                <Link href="/auth">Enter</Link>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Heros;
