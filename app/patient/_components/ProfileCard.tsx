"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "@/context/Healthrecord";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import IndividualEntry from "@/context/Healthrecord";
import setCurrentAccount from "@/context/Healthrecord";
import individualName from "@/context/Healthrecord";
import dateOfBirth from "@/context/Healthrecord";
import gender from "@/context/Healthrecord";
import bloodType from "@/context/Healthrecord";

export const ProfileCard = () => {
  const { user } = useUser();
  const primaryWeb3Wallet = user?.primaryWeb3Wallet;
  const walletId = primaryWeb3Wallet?.web3Wallet;
  console.log(primaryWeb3Wallet);
  console.log(walletId);

  return (
    <div className="">
      <div className="flex flex-col max-w-md px-5 py-5 space-y-5">
        <div className="">
          <Label htmlFor="walletId">Owner's WalletId</Label>
          <Input disabled type="text" value={walletId} className="" />
        </div>
        <div className="">
          <Label htmlFor="individualName">Individual's Name</Label>
          <Input
            type="text"
            name="individualName"
            placeholder="Name"
            // value={}
            // onChange={}
            className=""
          />
        </div>
        <div className="">
          <Label htmlFor="dateOfBirth">Date Of Birth</Label>
          <Input
            type="date"
            name="dateOfBirth"
            // value=
            // onChange=
            className=""
          />
        </div>
        <div className="">
          <Label htmlFor="gender">Gender</Label>
          <Input
            type="text"
            name="gender"
            placeholder="Gender"
            // value=
            // onChange=
            className=""
          />
        </div>
        <div className="">
          <Label htmlFor="bloodType">Blood Group</Label>
          <Input
            type="text"
            name="bloodType"
            placeholder="Blood Group"
            // value=
            // onChange=
            className=""
          />
        </div>
        <Button variant="default" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
