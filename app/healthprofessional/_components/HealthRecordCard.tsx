"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const HealthRecordCard = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isCardShortEnd, setIsCardShortEnd] = useState(false);
  const [CardData, setCardData] = useState({
    condition: "",
    diagnosisDate: "",
    treatment: "",
    doctorName: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form data saved:", CardData);
    setIsCardVisible(false);
    setIsCardShortEnd(true);
  };

  const handleInputChange = (e: any) => {};

  return (
    <div className="p-5">
      <Button
        variant="default"
        onClick={() => setIsCardVisible(!isCardVisible)}
      >
        Add Health Record
      </Button>
      {isCardVisible && (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>
              <Input placeholder="Health facility Name" />
            </CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Condition</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">diagnosisDate</Label>
                  <Input type="date" placeholder="" className="" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">treatment</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">doctorName</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="healthProfessional"
              onClick={() => setIsCardVisible(!isCardVisible)}
            >
              Cancel
            </Button>
            <Button
              variant="healthProfessional"
              onClick={() => {
                setIsCardShortEnd(!isCardShortEnd);
                setIsCardVisible(!isCardVisible);
              }}
            >
              Add
            </Button>
          </CardFooter>
        </Card>
      )}

      {isCardShortEnd && (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Health Facility</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Condition</Label>
                  <p></p>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">diagnosisDate</Label>
                  <p></p>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">treatment</Label>
                  <p></p>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">doctorName</Label>
                  <p></p>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default HealthRecordCard;
