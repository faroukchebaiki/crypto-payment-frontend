import React from 'react';
import { Box, Typography } from '@mui/material';

const Documentation = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">API Documentation</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Learn how to integrate our payment system.
      </Typography>
    </Box>
  );
};

export default Documentation;
