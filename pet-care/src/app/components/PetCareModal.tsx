import React, { SetStateAction } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PetCareButton from "./Buttons/PetCareButton";

type PetCareModalProps = {
  text: string;
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

const PetCareModal: React.FC<PetCareModalProps> = ({
  text,
  modalState,
  setModalState,
}) => {
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
            {text}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Men det fungerar inte riktigt ännu <b className="text-4xl">🫶</b>
          </Typography>
          <div className="flex gap-5 mt-5">
            <PetCareButton label="Det är okej" onClick={() => handleClose()} />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default PetCareModal;
