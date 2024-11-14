import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';

const Header = ({ onSearch }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Магазин Грызунов
      </Typography>
      <InputBase
        placeholder="Поиск..."
        onChange={(e) => onSearch(e.target.value)}
        sx={{ background: '#fff', padding: '0 10px', borderRadius: 4 }}
      />
    </Toolbar>
  </AppBar>
);

export default Header;