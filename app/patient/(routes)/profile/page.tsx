"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { date, z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

function Profile() {
  const [walletId, setWalletId] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const individualDetails = z.object({
    walletId: z.string(),
    name: z.string().min(2, "Name is too short").max(255, "Name is too long"),
    dateOfBirth: date(),
    gender: z.enum(["Male", "Female", "Other"]),
    BloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof individualDetails>>({
    resolver: zodResolver(individualDetails),
    defaultValues: {
      walletId: "",
      name: "",
      dateOfBirth: undefined,
      gender: undefined,
      BloodGroup: undefined,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof individualDetails>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <h1>dkmd</h1>
    </div>
  );
}

export default Profile;
