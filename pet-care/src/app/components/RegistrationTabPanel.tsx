import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import CheckIcon from "@mui/icons-material/Check";
import { User } from "../../../types/types";
import { v4 as uuidv4 } from "uuid";
import { RegisterUserSchema } from "@/zodSchemas/RegisterUserSchema";
import { addNewUser } from "@/lib/features/users/usersSlice";
import { setCurrentUser } from "@/lib/features/auth/authSlice";
import SaveButton from "./Buttons/SaveButton";

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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [adressInput, setAdressInput] = useState("");
  const [postalCodeInput, setPostalCodeInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(0);
  const [saveButtonState, setSaveButtonState] = useState<boolean | null>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    const newUser: User = {
      _id: uuidv4(),
      email: emailInput,
      password: passwordInput,
      name: nameInput,
      surname: surnameInput,
      street: adressInput,
      postalCode: postalCodeInput,
      city: cityInput,
      phone: phoneInput,
      messages: [
        {
          title: "Välkommen",
          subTitle: "Hej och varmt välkommen till oss på PetCare!",
          message:
            "Här kommer lite information som kan vara bra att känna till...",
          sender: "PetCare",
          isUnread: true,
        },
      ],
    };

    const validation = RegisterUserSchema.safeParse(newUser);

    if (!validation.success) {
      const newErrors: { [key: string]: string } = {};
      validation.error.errors.forEach((error) => {
        if (error.path[0]) {
          newErrors[error.path[0]] = error.message;
        }
      });
      setErrors(newErrors);
      setIsLoading(false);
      setSaveButtonState(false);
      return;
    }

    dispatch(addNewUser(newUser));
    dispatch(setCurrentUser(newUser));
    setTimeout(() => {
      setIsLoading(false);
      setSaveButtonState(true);
      router.push("/users");
    }, 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row overflow-auto">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="registrate tabs"
          >
            <Tab label="Användare" {...a11yProps(0)} />
            <Tab label="Personuppgifter" {...a11yProps(1)} disabled={false} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div>
            <h2>Inloggningsuppgifter</h2>
            <div>
              <p className=" text-lg font-bold">Epost</p>
              <input
                className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
                type="text"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div>
              <p className=" text-lg font-bold">Lösenord</p>
              <input
                className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%] "
                type="text"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div>
            <h2>Personuppgifter</h2>
            <div>
              <p className=" text-lg font-bold">Namn</p>
              <input
                className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
                type="text"
                value={nameInput}
                onChange={(e) => {
                  setNameInput(e.target.value);
                }}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div>
              <p className=" text-lg font-bold">Efternamn</p>
              <input
                className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
                type="text"
                value={surnameInput}
                onChange={(e) => setSurnameInput(e.target.value)}
              />
              {errors.surname && (
                <p className="text-red-500">{errors.surname}</p>
              )}
            </div>
            <div>
              <p className=" text-lg font-bold">Adress</p>
              <input
                className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
                type="text"
                value={adressInput}
                onChange={(e) => setAdressInput(e.target.value)}
              />
              {errors.street && <p className="text-red-500">{errors.street}</p>}
            </div>
            <div>
              <p className=" text-lg font-bold">Postnummer</p>
              <input
                className=" border-2 border-petCare-sapphireTeal-dark w-20"
                type="text"
                value={postalCodeInput}
                onChange={(e) => setPostalCodeInput(e.target.value)}
              />
              {errors.postalCode && (
                <p className="text-red-500">{errors.postalCode}</p>
              )}
            </div>
            <div>
              <p className=" text-lg font-bold">Stad</p>
              <input
                className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
                type="text"
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
              />
              {errors.city && <p className="text-red-500">{errors.city}</p>}
            </div>
            <div>
              <p className=" text-lg font-bold">Telefonnummer</p>
              <input
                className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
                type="text"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>
          </div>
        </CustomTabPanel>
      </Box>
      <div className="">
        <SaveButton
          state={saveButtonState}
          setState={setSaveButtonState}
          label="Skapa användare"
          size="small"
          endIcon={<CheckIcon />}
          onClick={submit}
          loading={isLoading}
        />
      </div>
    </div>
  );
}
