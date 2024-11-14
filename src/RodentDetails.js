import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";

const OrderModal = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Заказ</DialogTitle>
    <DialogContent>
      <TextField label="Телефон" fullWidth margin="normal" />
      <TextField label="Почта" fullWidth margin="normal" />
      <Button variant="contained" color="primary" onClick={onClose}>
        Отправить
      </Button>
    </DialogContent>
  </Dialog>
);

export default OrderModal;