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

  function onSubmit(values: z.infer<typeof individualDetails>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 py-5 px-5 max-w-md "
      >
        <FormField
          control={form.control}
          name="walletId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>WalletId</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default Profile;
