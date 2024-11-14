import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  DialogActions,
} from "@mui/material";

const OrderModal = ({ open, onClose, rodent }) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Заказ оформлен:", {
      animal: rodent.name,
      phone,
      email,
    });
    alert(`Ваш заказ на ${rodent.name} оформлен!`);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Оформить заказ на {rodent?.name}</DialogTitle>
      <DialogContent>
        <TextField
          label="Телефон"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          label="Почта"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Отмена
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Отправить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderModal;