import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 2, bgcolor: 'grey.800', color: 'white' }}>
      <Typography variant="body2">
        © 2025 Crypto Payment System. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
