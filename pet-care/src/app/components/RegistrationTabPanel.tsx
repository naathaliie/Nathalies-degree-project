import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import RegisterUserForm from "./Forms/RegisterUserForm";
import RegisterPetForm from "./Forms/RegisterPetForm";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function RegistrationTabPanel() {
  const [value, setValue] = useState(0);
  const [successAddNewUser, setSuccessAddNewUser] = useState<boolean>(false);
  const [isRegisterTabEnabled, setIsRegisterTabEnabled] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  /*   useEffect(() => {
    if (successAddNewUser) {
      setValue(1);
    }

  }, [successAddNewUser]); */

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="registrate tabs"
        >
          <Tab label="Om dig" {...a11yProps(0)} />
          <Tab
            label="Ditt husdjur"
            {...a11yProps(1)}
            disabled={!successAddNewUser}
          />
          <Tab
            label="Registrera"
            {...a11yProps(2)}
            disabled={!isRegisterTabEnabled}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <RegisterUserForm setSuccessAddNewUser={setSuccessAddNewUser} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RegisterPetForm />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
