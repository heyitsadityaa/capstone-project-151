import React, { useState, useEffect, use } from "react";
import { ethers } from "ethers";

import { contractAddress, contractABI } from "./constants";
import styles from "../styles/Home.module.css";
import { useUser } from "@clerk/nextjs";

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

interface addHealthProfessional {
  walletId: string;
}
interface removeHealthProfessional {
  walletId: string;
}
interface addHealthFacility {
  walletId: string;
}
interface removeHealthFacility {
  walletId: string;
}

const HealthRecord = () => {
  const { user } = useUser();
  const primaryWeb3Wallet = user?.primaryWeb3Wallet;
  const walletId = primaryWeb3Wallet?.web3Wallet;

  const [currentAccount, setCurrentAccount] = useState<string>(walletId || "");

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
  const [addProfessional, setAddProfessional] = useState<
    addHealthProfessional[]
  >([]);
  const [removeProfessional, setRemoveProfessional] = useState<
    removeHealthProfessional[]
  >([]);
  const [addFacility, setAddFacility] = useState<addHealthFacility[]>([]);
  const [removeFacility, setRemoveRemove] = useState<removeHealthFacility[]>(
    []
  );

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
  // Function to addIndividualDetails.
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

  // Function to addMedicalHistory.
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

  // Function to addPrescription.
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

  // Function to addTestResult.
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

  // Function to getIndividualDetails.
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

  // Function to getMedicalHistory.
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

  // Function to getPrescription.
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

  // Function to getTestResult.
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

  // addHealthProfessional Role.
  const addHealthProfessional = async () => {
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

        const tx = await contract.addHealthProfessional(walletId);
        await tx.wait();
        console.log("Health professional added", addHealthProfessional);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // removeHealthProfessional Role.
  const removeHealthProfessional = async () => {
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

        const tx = await contract.removeHealthProfessional(walletId);
        await tx.wait();
        console.log("Health professional removed", removeHealthProfessional);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // addHealthFacility Role
  const addHealthFacility = async () => {
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
        const tx = await contract.addHealthFacility(walletId);
        await tx.wait();
        console.log("Health facility added", addHealthFacility);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // removeHealthFacility Role.
  const removeHealthFacility = async () => {
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
        const tx = await contract.removeHealthFacility(walletId);
        await tx.wait();
        console.log("Health facility removed", removeHealthFacility);
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
};

export default HealthRecord;
// Connecting with the HealthRecord contract.
// MetaMask SignIn Individual will be ADMIN_ROLE.
