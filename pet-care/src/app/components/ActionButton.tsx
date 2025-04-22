import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface ActionButtonProps extends ButtonProps {
  icon: React.ReactNode; // Valfri ikon
  label: string;    // Texten på knappen
}

//Du kan skicka in loading/disabled/type/onClick/size osv icon och label är mandatory

const ActionButton: React.FC<ActionButtonProps> = ({
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
      loadingPosition='end'
      className={`w-fit !font-bold !bg-petCare-sapphireTeal-dark !text-white disabled:!bg-gray-400 disabled:!text-gray-200 ${className}`}
      {...props}
    >
      {label}
    </Button>
  );
};

export default ActionButton;
