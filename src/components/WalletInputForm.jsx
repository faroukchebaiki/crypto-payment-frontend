import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const WalletInputForm = () => {
  const [wallets, setWallets] = useState(['']);

  const handleAddField = () => {
    if (wallets.length < 10) setWallets([...wallets, '']);
  };

  const handleInputChange = (index, value) => {
    const updatedWallets = [...wallets];
    updatedWallets[index] = value;
    setWallets(updatedWallets);
  };

  const handleSubmit = () => {
    console.log(wallets);
  };

  return (
    <Box sx={{ p: 3 }}>
      {wallets.map((wallet, index) => (
        <TextField
          key={index}
          label={`Wallet Address ${index + 1}`}
          fullWidth
          margin="normal"
          value={wallet}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ))}
      <Button onClick={handleAddField} disabled={wallets.length >= 10}>
        Add Wallet
      </Button>
      <Button onClick={handleSubmit} sx={{ ml: 2 }} variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default WalletInputForm;
