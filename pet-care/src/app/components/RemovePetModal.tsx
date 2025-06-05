import React, { SetStateAction, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PetCareButton from "./Buttons/PetCareButton";
import { useAppDispatch } from "@/lib/hooks";
import { deletePet } from "@/lib/features/pets/petsSlice";
import { useRouter } from "next/navigation";

type RemovePetModalProps = {
  petId: string;
  modalState: boolean;
  setModalState: React.Dispatch<SetStateAction<boolean>>;
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

const RemovePetModal: React.FC<RemovePetModalProps> = ({
  modalState,
  petId,
  setModalState,
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDelete = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      dispatch(deletePet({ id: petId }));
      router.push("/users/myPets");
    }, 1500);
  };

  const handleClose = () => {
    setModalState(false);
  };

  return (
    <div>
      <Modal
        open={modalState}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Vill du verkligen radera ditt husdjur?
          </Typography>
          <div className="flex gap-5 mt-5">
            <PetCareButton
              label="Ja"
              loading={isLoading}
              onClick={() => handleDelete()}
            />
            <PetCareButton label="Nej" onClick={() => handleClose()} />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default RemovePetModal;
