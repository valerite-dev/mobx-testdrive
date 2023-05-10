import {
  Modal, ModalDialog, ModalClose, Typography,
} from '@mui/joy';

interface IModalExapmleProps {
  onClose: () => void;
}

function ModalExapmle({ onClose }: IModalExapmleProps) {
  return (
    <Modal open onClose={onClose}>
      <ModalDialog>
        <ModalClose />
        <Typography>this is modal</Typography>
      </ModalDialog>
    </Modal>
  );
}

export default ModalExapmle;
