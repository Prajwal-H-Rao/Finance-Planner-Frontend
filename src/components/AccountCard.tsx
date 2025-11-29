// src/components/AccountCard.tsx

import React from "react";
import CurrencyDisplay from "./CurrencyDisplay";
import type { Account } from "../types/account.types";
import type { SupportedCurrency } from "../types/currency.types";

interface AccountCardProps {
  account: Account;
}

const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
  return (
    <div className="card bg-base-200/80 shadow-md p-5 rounded-2xl hover:shadow-lg transition">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-lg">{account.name}</h3>
        {account.institution && (
          <p className="text-sm text-gray-500">{account.institution}</p>
        )}
      </div>

      <div className="mt-4">
        <CurrencyDisplay
          amount={account.balance}
          currency={account.currency as SupportedCurrency}
          institution={account.institution ?? ""}
          className="text-3xl"
          bold
        />
      </div>

      <div className="text-sm text-gray-400 mt-1 capitalize">
        {account.type} account
      </div>
    </div>
  );
};

export default AccountCard;
