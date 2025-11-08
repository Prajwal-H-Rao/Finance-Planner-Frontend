import React from "react";
import type { SupportedCurrency } from "../types/currency.types";
import { formatCurrency } from "../utils/formatCurrency";

interface CurrencyDisplayProps {
  amount: number;
  currency?: SupportedCurrency;
  institution?: string;
  className?: string;
  bold?: boolean;
}

const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({
  amount,
  currency = "INR",
  institution = "",
  className = "",
  bold = false,
}) => {
  const formatted = formatCurrency(amount, currency, institution);

  return (
    <span className={`${bold ? "font-semibold" : "font-normal"} ${className}`}>
      {formatted}
    </span>
  );
};

export default CurrencyDisplay;
