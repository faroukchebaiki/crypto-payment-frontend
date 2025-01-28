import React from 'react';
import { Box, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Contact Us</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Email: support@cryptopaymentsystem.com
      </Typography>
    </Box>
  );
};

export default Contact;
