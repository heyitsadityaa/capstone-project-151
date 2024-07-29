"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./_components/Navbar";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bell,
  BellDotIcon,
  CheckCircle,
  HelpingHand,
  Info,
  UserCheck,
  UserCheck2,
} from "lucide-react";

function page() {
  const { user } = useUser();
  const primaryWeb3Wallet = user?.primaryWeb3Wallet;
  const walletId = primaryWeb3Wallet?.web3Wallet;

  return (
    <div className="gap-x-5 p-5">
      <h2 className="text-lg font-medium flex flex-row space-y-5 pb-5">
        Welcome ,<span className="text-[#99CC0E]">{walletId}</span>
      </h2>
      <div>
        <div className="flex justify-between items-center">
          <div className="font-semibold">Your Notifications</div>
          <Button variant="ghostP" className="">
            Mark as Read
          </Button>
        </div>
        <div className="flex flex-col item-center space-y-2 pb-5">
          <Card className="p-3 flex flex-row space-x-2 cursor-pointer border-[#99cc0e] border-2">
            <Info className="w-5 h-5 text-[#99cc0e]" />
            <span>Update your Profile</span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2 cursor-pointer border-[#99cc0e] border-2">
            <UserCheck className="w-5 h-5 text-[#99cc0e]" />
            <span>Your appointment is confirmed</span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2 cursor-pointer border-[#99cc0e] border-2">
            <BellDotIcon className="w-5 h-5 text-[#99cc0e]" />
            <span>Prescription is ready for pickup</span>
          </Card>
        </div>
      </div>
      <div className="pb-5">
        <div className="font-semibold">Your Appointments</div>
        <div className="flex flex-col item-center space-y-2">
          <Card className="p-3 flex flex-row space-x-2">
            <CheckCircle className="text-[#99cc0e]" />
            <span>General Checkup on June 25, 2024</span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2">
            <UserCheck className="text-[#99cc0e]" />
            <span>Physical Therapy on July 10, 2024</span>
          </Card>
        </div>
      </div>
      <div className="pb-5">
        <div className="font-semibold">Current Access</div>
        <div className="flex flex-col item-center space-y-2">
          <Card className="p-3 flex flex-row space-x-2">
            <HelpingHand className="text-[#99cc0e]" />
            <span className="hover:text-[#99cc0e]/80">
              Dr. Smith (Primary Care Physician)
            </span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2">
            <HelpingHand className="text-[#99cc0e]" />
            <span className="hover:text-[#99cc0e]/80">
              Dr. Johnson (Cardiologist)
            </span>
          </Card>
        </div>
      </div>
      <div className="pb-5">
        <div className="font-semibold">Resources</div>
        <div className="flex flex-col item-center space-y-2">
          <Card className="p-3 flex flex-row space-x-2">
            <HelpingHand className="text-[#99cc0e]" />
            <span className="hover:text-[#99cc0e]/80">
              [How to manage diabetes]
            </span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2">
            <HelpingHand className="text-[#99cc0e]" />
            <span className="hover:text-[#99cc0e]/80">
              [Healthy eating tips]
            </span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2">
            <HelpingHand className="text-[#99cc0e]" />
            <span className="hover:text-[#99cc0e]/80">
              [Exercise routines for heart health]
            </span>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default page;
