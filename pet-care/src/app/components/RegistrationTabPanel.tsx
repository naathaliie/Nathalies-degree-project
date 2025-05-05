import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import RegisterUserForm from "./Forms/RegisterUserForm";
import RegisterPetForm from "./Forms/RegisterPetForm";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import SaveButton from "./Buttons/SaveButton";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";
import {
  addNewUser,
  deleteDraftUser,
  setDraftUser,
} from "@/lib/features/users/usersSlice";
import { addNewPet, deleteDraftPet } from "@/lib/features/pets/petsSlice";
import { setCurrentUser } from "@/lib/features/auth/authSlice";

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
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(0);
  const [successAddNewUser, setSuccessAddNewUser] = useState<boolean>(false);
  const [successAddNewPet, setSuccessAddNewPet] = useState<boolean>(false);
  const [SaveButtonState, setSaveButtonState] = useState<boolean | null>(null);

  const draftUser = useAppSelector((state) => state.users.draftUser);
  const draftPet = useAppSelector((state) => state.pets.draftPet);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const registrateNewUser = () => {
    if (draftUser && draftPet) {
      //Sparar användaren som currentUser
      dispatch(setCurrentUser(draftUser));
      //sparar användare och husdjur
      dispatch(addNewUser(draftUser));
      dispatch(addNewPet(draftPet));
      //Går till den nyskapade användarens sida
      router.push("/users");
      //Återsället draftpet och draftUser
      dispatch(deleteDraftUser());
      dispatch(deleteDraftPet());
    }
  };

  useEffect(() => {
    if (successAddNewUser) {
      setValue(1);
    }
    if (successAddNewPet) {
      setValue(2);
    }

    return () => {
      setSuccessAddNewPet(false);
      setSuccessAddNewUser(false);
    };
  }, [successAddNewUser, successAddNewPet]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="registrate tabs"
        >
          <Tab label="Om dig" {...a11yProps(0)} />
          <Tab label="Ditt husdjur" {...a11yProps(1)} disabled={!draftUser} />
          <Tab
            label="Registrera"
            {...a11yProps(2)}
            disabled={!draftPet || !draftUser}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <RegisterUserForm setSuccessAddNewUser={setSuccessAddNewUser} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RegisterPetForm setSuccessAddNewPet={setSuccessAddNewPet} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {draftPet && draftUser ? (
          <>
            <h2>
              Toppen, alla uppgifter är ifyllda! <br />
              Klicka på knappen för att slutföra din registrering.
            </h2>
            <SaveButton
              icon={<ArrowForward />}
              label="Slutför registrering "
              state={SaveButtonState}
              setState={setSaveButtonState}
              onClick={registrateNewUser}
            />
          </>
        ) : (
          "Något gick fel "
        )}
      </CustomTabPanel>
    </Box>
  );
}
