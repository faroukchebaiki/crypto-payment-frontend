import React from 'react';
import { Box, Typography } from '@mui/material';
import WalletInputForm from '../components/WalletInputForm';

const API = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">API Page</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Enter wallet addresses to generate your API key.
      </Typography>
      <WalletInputForm />
    </Box>
  );
};

export default API;
