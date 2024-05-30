import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import { contractAddress, contractABI } from "./constants";
import styles from "../styles/Home.module.css";

interface IndividualEntry {
  owner: string;
  individualName: string;
  dateOfBirth: number;
  gender: string;
  bloodType: string;
}

interface MedicalEntry {
  condition: string;
  diagnosisDate: number;
  treatment: string;
  doctorName: string;
}

interface PrescriptionEntry {
  medication: string;
  prescriptionDate: number;
  dosage: string;
  prescribingDoctorName: string;
}

interface TestResultEntry {
  testType: string;
  testDate: number;
  result: string;
  lab: string;
}

export default function Home() {
  const [currentAccount, setCurrentAccount] = useState<string>("");
  const [individualDetails, setIndividualDetails] = useState<IndividualEntry[]>(
    []
  );
  const [medicalHistory, setMedicalHistory] = useState<MedicalEntry[]>([]);
  const [prescriptions, setPrescriptions] = useState<PrescriptionEntry[]>([]);
  const [testResults, setTestResults] = useState<TestResultEntry[]>([]);
  const [individualName, setIndividualName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<number>(0);
  const [gender, setGender] = useState<string>("");
  const [bloodType, setBloodType] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  const [diagnosisDate, setDiagnosisDate] = useState<number>(0);
  const [treatment, setTreatment] = useState<string>("");
  const [doctorName, setDoctorName] = useState<string>("");
  const [medication, setMedication] = useState<string>("");
  const [prescriptionDate, setPrescriptionDate] = useState<number>(0);
  const [dosage, setDosage] = useState<string>("");
  const [prescribingDoctorName, setPrescribingDoctorName] =
    useState<string>("");
  const [testType, setTestType] = useState<string>("");
  const [testDate, setTestDate] = useState<number>(0);
  const [result, setResult] = useState<string>("");
  const [lab, setLab] = useState<string>("");

  const connectWallet = async () => {
    try {
      const { ethereum } = window as any;
      if (!ethereum) {
        console.log("Please install MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const addIndividualDetails = async () => {
    try {
      const { ethereum } = window as any;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const tx = await contract.addIndividualDetails(
          currentAccount,
          individualName,
          dateOfBirth,
          gender,
          bloodType
        );
        await tx.wait();
        console.log("Individual details added", addIndividualDetails);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addMedicalHistory = async () => {
    try {
      const { ethereum } = window as any;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const tx = await contract.addMedicalHistory(
          condition,
          diagnosisDate,
          treatment,
          doctorName
        );
        await tx.wait();
        console.log("Medical history added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addPrescription = async () => {
    try {
      const { ethereum } = window as any;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const tx = await contract.addPrescription(
          medication,
          prescriptionDate,
          dosage,
          prescribingDoctorName
        );
        await tx.wait();
        console.log("Prescription added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addTestResult = async () => {
    try {
      const { ethereum } = window as any;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const tx = await contract.addTestResult(
          testType,
          testDate,
          result,
          lab
        );
        await tx.wait();
        console.log("Test result added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchIndividualDetails = async () => {
    try {
      const { ethereum } = window as any;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const details: IndividualEntry[] = await contract.getIndividualDetails(
          currentAccount
        );
        setIndividualDetails(details);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMedicalHistory = async () => {
    try {
      const { ethereum } = window as any;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const history: MedicalEntry[] = await contract.getMedicalHistory(
          currentAccount
        );
        setMedicalHistory(history);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPrescriptions = async () => {
    try {
      const { ethereum } = window as any;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const prescriptions: PrescriptionEntry[] =
          await contract.getPrescription(currentAccount);
        setPrescriptions(prescriptions);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTestResults = async () => {
    try {
      const { ethereum } = window as any;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const results: TestResultEntry[] = await contract.getTestResult(
          currentAccount
        );
        setTestResults(results);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return null;
}

// Connecting with the HealthRecord contract.

// Function to addIndividualDetails.
// Function to getIndividualDetails.

// Function to addMedicalHistory.
// Function to getMedicalHistory.

// Function to addPrescription.
// Function to getPrescription.

// Function to addTestResult.
// Function to getTestResult.

// Access Control Functions.
// MetaMask SignIn Individual will be ADMIN_ROLE.

// addHealthProfessional Role.
// removeHealthProfessional Role.

// addHealthFacility Role.
// removeHealthFacility Role.
