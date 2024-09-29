// pages/about.js
import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" align="center">About Us</Typography>
      <Typography variant="body1" align="center" sx={{ mt: 2 }}>
        Welcome to FarmX, your platform for the latest updates on sustainable agriculture.
        Our mission is to provide valuable information to help farmers, researchers, 
        and enthusiasts improve crop yields and implement eco-friendly farming practices.
      </Typography>
    </Box>
  );
}
