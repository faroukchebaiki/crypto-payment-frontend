import React from 'react';
import { Box, Typography } from '@mui/material';

const Donation = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Donation Page</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Your support helps us grow!
      </Typography>
    </Box>
  );
};

export default Donation;
