import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PetCareButton from "./Buttons/PetCareButton";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { removeSelectedPet } from "@/lib/features/pets/petsSlice";

type QuestionModalProps = {
  openModal: boolean;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const QuestionModal = ({ openModal }: QuestionModalProps) => {
  console.log("Vad ör OpenModal ifrån Modalen?: ", openModal);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleAddNewPet = () => {
    dispatch(removeSelectedPet());

    router.push("/users/myPets/addPet");
  };

  const handleClose = () => {
    dispatch(removeSelectedPet());
    setOpen(false);
  };

  useEffect(() => {
    if (openModal) {
      setOpen(true);
    } else {
      handleClose();
    }
  }, [openModal]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Vill du fortsätta att lägga till ett nytt husdjur?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <PetCareButton label="Ja" onClick={() => handleAddNewPet()} />
          <PetCareButton label="Nej" onClick={() => handleClose()} />
        </Box>
      </Modal>
    </div>
  );
};

export default QuestionModal;
