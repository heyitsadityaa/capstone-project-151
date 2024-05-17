import React, { useState, useEffect } from "react";
import { ethers, Signer, Provider } from "ethers";

import { HealthRecordABI, HealthRecordAddress } from "./constants";

//Fetch the health record contract.
const fetchContract = (signerOrProvider: Signer | Provider) =>
  new ethers.Contract(HealthRecordAddress, HealthRecordABI, signerOrProvider);
export const HealthRecordContext = React.createContext(null);

// export const HealthRecordProvider = ({ children }) => {
//     const titleData = 'Health Record Contract';
//     const [currentAccount, setCurrentAccount] = useState(null);
// }
