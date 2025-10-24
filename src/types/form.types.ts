export interface IFormprops {
  formState: { email: string; password: string };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}
