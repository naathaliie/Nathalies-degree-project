import React, { SetStateAction, useEffect, useState } from "react";
import { Button, ButtonProps } from "@mui/material";
import ErrorIcon from "@mui/icons-material/ErrorOutline";
import DoneIcon from "@mui/icons-material/Done";

interface SaveButtonProps extends ButtonProps {
  icon: React.ReactNode; // Valfri ikon
  label: string; // Texten på knappen
  state: boolean | null;
  setState: React.Dispatch<SetStateAction<boolean | null>>;
}

//Du kan skicka in loading/disabled/type/onClick/size osv som vanligt, jag har satt vissa attribut som default här icon och label är mandatory
//För att använda success och error behöver du skicka med state från föräldrakomponenten - gärna enligt nedan struktur för att hålla det enhetligt
//Föräldra komponenten behöver bara ha koll på när state ska bli true och false
//const [SaveButtonState, setSaveButtonState] = useState<boolean | null>(null)

const SaveButton: React.FC<SaveButtonProps> = ({
  icon,
  label,
  state,
  setState,
  className,
  ...props
}) => {
  useEffect(() => {
    if (state === true || state === false) {
      const timeout = setTimeout(
        () => {
          setState(null);
        },
        state === true ? 1500 : 1000
      );

      return () => clearTimeout(timeout);
    }
  }, [state, setState]);

  return (
    <Button
      endIcon={
        state === true ? <DoneIcon /> : state === false ? <ErrorIcon /> : icon
      }
      variant="contained"
      size="large"
      loadingPosition="end"
      className={`${
        state === true
          ? "!bg-green-500"
          : state === false
          ? "!bg-red-500 animate-shake"
          : "!bg-petCare-sapphireTeal-dark"
      } ${className} w-fit !font-bold  !text-white disabled:!bg-gray-400 disabled:!text-gray-200 `}
      {...props}
    >
      {label}
    </Button>
  );
};

export default SaveButton;
