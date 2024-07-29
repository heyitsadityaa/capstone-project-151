"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash } from "lucide-react";
import addHealthProfessional from "@/context/Healthrecord";
import removeHealthProfessional from "@/context/Healthrecord";
import addHealthFacility from "@/context/Healthrecord";
import removeHealthFacility from "@/context/Healthrecord";

export const AccessControlCard = () => {
  const [isHPCardVisible, setIsHPCardVisible] = useState(false);
  const [isHFCardVisible, setIsHFCardVisible] = useState(false);
  const [HealthProfessionalID, setHealthProfessionalID] = useState("");
  const [HealthFacilityID, setHealthFacilityID] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  const handleHPSubmit = (event: any) => {};
  const handleHFSubmit = (event: any) => {};
  const handleDelete = (event: any) => {};
  const handleHPChange = (event: any) => {
    setHealthProfessionalID(event.target.value);
  };

  const handleHFChange = (event: any) => {
    setHealthFacilityID(event.target.value);
  };

  return (
    <div className="max-w-md p-5 space-y-5">
      <div>
        <Label htmlFor="string">Add Health Professional</Label>
        <div className="flex flex-row space-x-5">
          <Input type="text" placeholder="WalletId" required />
          <Button
            variant="patient"
            onClick={() => setIsHPCardVisible(!isHPCardVisible)}
            onSubmit={handleHPSubmit}
          >
            Add
          </Button>
        </div>
      </div>
      {isHPCardVisible && (
        <div className="">
          <Card>
            <CardContent>
              <p>{HealthProfessionalID}</p>
              <Button
                variant="outline"
                onClick={() => {
                  setIsHPCardVisible(isHPCardVisible ? false : true);
                  {
                    removeHealthProfessional;
                  }
                }}
              >
                <Trash onClick={removeHealthProfessional} className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
      <div className="">
        <Label htmlFor="string">Add Health Facility</Label>
        <div className="flex flex-row space-x-5">
          <Input type="text" placeholder="WalletId" />
          <Button
            variant="patient"
            onClick={() => setIsHFCardVisible(!isHFCardVisible)}
            onSubmit={handleHFSubmit}
          >
            Add
          </Button>
        </div>
      </div>
      {isHFCardVisible && (
        <div className="">
          <Card>
            <CardContent>
              <p></p>
              <Button
                variant="outline"
                onClick={() => {
                  setIsHFCardVisible(isHFCardVisible ? false : true);
                  {
                    removeHealthFacility;
                  }
                }}
              >
                <Trash onClick={removeHealthFacility} className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AccessControlCard;
