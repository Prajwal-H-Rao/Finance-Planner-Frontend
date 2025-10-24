import React from "react";

const Toast: React.FC<{
  toastMessage: string;
  duration?: number;
  success?: boolean;
}> = ({
  toastMessage,
  duration = 2000,
  success,
}: {
  toastMessage: string;
  duration?: number;
  success?: boolean;
}) => {
  const [slideOut, setSlideOut] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setSlideOut(true);
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration]);
  return (
    <div
      className={`toast toast-end  ${
        slideOut ? "animate-slide-out" : "animate-slide-in"
      }`}
    >
      <div className={`alert ${success ? "alert-success" : "alert-error"}`}>
        <span className="text-base-200">{toastMessage}</span>
      </div>
    </div>
  );
};

export default Toast;
