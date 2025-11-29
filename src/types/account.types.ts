export interface Account {
  id: number;
  name: string;
  type: "savings" | "checking" | "credit" | "wallet";
  balance: number;
  currency: string;
  institution?: string;
}
