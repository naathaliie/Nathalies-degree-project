import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface PetCareButtonProps extends ButtonProps {
  icon?: React.ReactNode;
  label: string;
}

//En vanlig knapp
//Du kan skicka in loading/disabled/type/onClick/size osv som vanligt,
//jag har satt vissa attribut som default här icon och label är mandatory

const PetCareButton: React.FC<PetCareButtonProps> = ({
  icon,
  label,
  className,
  ...props
}) => {
  return (
    <Button
      endIcon={icon}
      variant="contained"
      size="large"
      loadingPosition="end"
      className={`${className} !bg-petCare-sapphireTeal-dark hover:!bg-petCare-sapphireTeal-main w-fit !font-bold  !text-white disabled:!bg-gray-400 disabled:!text-gray-200 `}
      {...props}
    >
      {label}
    </Button>
  );
};

export default PetCareButton;
