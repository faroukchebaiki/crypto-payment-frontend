import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4">Welcome to Crypto Payment System</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Navigate to the pages below:
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Button component={Link} to="/api" variant="contained" sx={{ mr: 2 }}>
          API
        </Button>
        <Button component={Link} to="/documentation" variant="contained">
          Documentation
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
