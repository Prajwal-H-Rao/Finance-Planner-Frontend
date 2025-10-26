export interface IFormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}
export interface IFormprops {
  formConfig: IFormField[];
  formState: Record<string, string>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  buttonText?: string;
  loadingText?: string;
  handleGoogleLogin: (token: string) => void;
}
