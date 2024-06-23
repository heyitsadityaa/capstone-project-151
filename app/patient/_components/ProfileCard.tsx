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
import addIndividualDetails from "@/context/Healthrecord";

export const ProfileCard = () => {
  const { user } = useUser();
  const primaryWeb3Wallet = user?.primaryWeb3Wallet;
  const walletId = primaryWeb3Wallet?.web3Wallet;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentAccount, setCurrentAccount] = useState<string>(walletId || "");
  const [individualName, setIndividualName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<number>(0);
  const [gender, setGender] = useState<string>("");
  const [bloodType, setBloodType] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    addIndividualDetails();
    setIsSubmitted(true);
  };
  const handleIndividualNameChange = (event: any) => {
    setIndividualName(event.target.value);
  };
  const handledateOfBirthChange = (event: any) => {
    setDateOfBirth(event.target.value);
  };
  const handlegenderChange = (event: any) => {
    setGender(event.target.value);
  };
  const handlebloodTypeChange = (event: any) => {
    setBloodType(event.target.value);
  };

  return (
    <div className="">
      {/* <form > */}
      <div className="flex flex-col max-w-md px-5 py-5 space-y-5">
        <div className="">
          <Label htmlFor="walletId">Owner's WalletId</Label>
          <Input
            disabled
            type="text"
            value={currentAccount}
            required
            placeholder={walletId}
            className=""
          />
        </div>
        <div className="">
          <Label htmlFor="individualName">Individual's Name</Label>
          <Input
            type="text"
            name="individualName"
            placeholder="Name"
            value={individualName}
            required
            onChange={handleIndividualNameChange}
            className=""
            disabled={isSubmitted}
          />
          {isSubmitted && <p>Submitted detail: {individualName}</p>}
        </div>
        <div className="">
          <Label htmlFor="dateOfBirth">Date Of Birth</Label>
          <Input
            type="date"
            name="dateOfBirth"
            placeholder="Date Of Birth"
            required
            value={dateOfBirth}
            onChange={handledateOfBirthChange}
            className=""
            disabled={isSubmitted}
          />
        </div>
        <div className="">
          <Label htmlFor="gender">Gender</Label>
          <Input
            type="text"
            name="gender"
            placeholder="Gender"
            value={gender}
            required
            onChange={handlegenderChange}
            className=""
            disabled={isSubmitted}
          />
        </div>
        <div className="">
          <Label htmlFor="bloodType">Blood Group</Label>
          <Input
            type="text"
            name="bloodType"
            placeholder="Blood Group"
            value={bloodType}
            required
            onChange={handlebloodTypeChange}
            className=""
            disabled={isSubmitted}
          />
        </div>
        <Button variant="patient" type="submit" onSubmit={handleSubmit}>
          Submit
        </Button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default ProfileCard;
