import React from "react";
import AccountCard from "../components/AccountCard";
import type { Account } from "../types/account.types";

//PLEASE REPLACE WITH DYNAMIC DATA LATER LMFAO
const accounts: Account[] = [
  {
    id: 1,
    name: "ICICI Savings",
    type: "savings",
    balance: 696969699.696969,
    currency: "INR",
    institution: "ICICI Bank",
  },
  {
    id: 2,
    name: "Chase Checking",
    type: "checking",
    balance: 108500.5,
    currency: "USD",
    institution: "Chase Bank",
  },
  {
    id: 3,
    name: "Deutsche Euro Wallet",
    type: "wallet",
    balance: 9876.54,
    currency: "EUR",
    institution: "Deutsche Bank",
  },
];

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {accounts.map((acc) => (
          <AccountCard key={acc.id} account={acc} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
