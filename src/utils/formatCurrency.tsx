import type { SupportedCurrency } from "../types/currency.types";

export const formatCurrency = (
  amount: number,
  currency: SupportedCurrency = "INR",
  institution: string = ""
): string => {
  const indianBanks = [
    "SBI",
    "ICICI",
    "HDFC",
    "AXIS",
    "PNB",
    "BOB",
    "Canara",
    "Kotak",
    "Union Bank",
    "IDBI",
  ];

  const isIndianBank = indianBanks.some((bank) =>
    institution.toLowerCase().includes(bank.toLowerCase())
  );

  const displayCurrency: SupportedCurrency = isIndianBank ? "INR" : currency;
  const locale =
    displayCurrency === "INR" ? "en-IN" : navigator.language || "en-US";

  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: displayCurrency,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch (error) {
    console.warn(`Invalid currency: ${displayCurrency}`, error);
    return `${displayCurrency} ${amount.toLocaleString(locale)}`;
  }
};
