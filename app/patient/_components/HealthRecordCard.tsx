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
  const [CardData, setCardData] = useState({
    condition: "",
    diagnosisDate: "",
    treatment: "",
    doctorName: "",
  });

  const handleInputChange = (e: any) => {};

  return (
    <div className="p-5 space-y-5">
      <Button
        variant="patient"
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
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Condition</Label>
                <Input id="name" value="Hypertension (High Blood Pressure)" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">diagnosisDate</Label>
                <Input type="date" value="29-03-2024" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">treatment</Label>
                <Input id="name" value="Diuretics, ACE Inhibitors" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">doctorName</Label>
                <Input id="name" value="Doctor#1" />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default HealthRecordCard;
