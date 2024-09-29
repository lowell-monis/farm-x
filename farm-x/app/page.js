"use client"
import { useState, useEffect } from "react";
import { Box, Button, BottomNavigation, BottomNavigationAction, Typography, CircularProgress } from "@mui/material";
import Home from "@mui/icons-material/Home";
import Diamond from "@mui/icons-material/Diamond";
import Info from "@mui/icons-material/Info";
import ResourcesIcon from "@mui/icons-material/Interests";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "../../farm-x/app/logo.png"; // Import logo image
import Image from "next/image";
import favicon from "../../farm-x/app/favicon.ico"; // Import favicon image


// Load Metropolis font
const theme = createTheme({
  typography: {
    fontFamily: 'Metropolis, Arial, sans-serif',  // Applying the Metropolis font globally
  },
  palette: {
    primary: {
      main: '#18453b',
      light: '#7bbd00',
      dark: '#040c0a',
      contrastText: '#fff',
    },
  },
});

// Loading Screen Component with Logo Placeholder
const LoadingScreen = () => (
  <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    {/* Placeholder for logo */}
    <Box sx={{ mb: 2 }}>
      <Image src={favicon} alt="Logo" width="150" height="150" /> {/* Replace with the actual logo path */}
    </Box>
    <CircularProgress />
    <Typography variant="h6" color="primary" sx={{ mt: 2 }}>Loading...</Typography>
  </Box>
);

// Components for different pages
const HomePage = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h4" align="center">Home Page</Typography>
    <Typography variant="body1" align="center">This is the content for the Home page.</Typography>
  </Box>
);

const Soil = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h4" align="center">Soil Page</Typography>
    <Typography variant="body1" align="center">This is the content for the Soil Optimization page.</Typography>
  </Box>
);

const AboutUs = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h4" align="center">About Us Page</Typography>
    <Typography variant="body1" align="center">This is the content for the About Us page.</Typography>
  </Box>
);

const Profile = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h4" align="center">Profile Page</Typography>
    <Typography variant="body1" align="center">This is the content for the Profile page.</Typography>
  </Box>
);

const Resources = () => {
  const resources = {
    "Soil Testing - MSU": "https://homesoiltest.msu.edu/get-started",
    "NPK Fertilizer Calculator": "https://aesl.ces.uga.edu/soil/fertcalc/",
    "United States Department of Agriculture": "https://www.usda.gov/",
    "Minority and Women Farmers and Ranchers": "https://www.fsa.usda.gov/programs-and-services/farm-loan-programs/minority-and-women-farmers-and-ranchers/index",
    "Soil Health Institute": "https://soilhealthinstitute.org/",
    "How much fertilizer is too much for the climate?": "https://msutoday.msu.edu/news/2014/how-much-fertilizer-is-too-much-for-the-climate"
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>Resources for Sustainable Small-Scale Farming</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {Object.entries(resources).map(([title, url]) => (
          <Button
            key={title}
            variant="contained"
            color="primary"
            onClick={() => window.open(url, '_blank')}
            sx={{ mb: 1, width: '50%' }} // Adjust width as needed
          >
            {title}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

// Main component with dynamic page rendering and loading screen
export default function Base() {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // Conditionally render content based on the selected value
  const renderPageContent = () => {
    switch (value) {
      case 0:
        return <HomePage />;
      case 1:
        return <Soil />;
      case 2:
        return <AboutUs />;
      case 3:
        return <Resources />;
      case 4:
        return <Profile />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: '100vh', position: 'relative' }}>
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
              <Image
                src={logo} 
                alt="FarmX Logo"
                style={{ maxHeight: '150px', maxWidth: '100%', objectFit: 'contain' }}
              />
            {/* Render the selected page content */}
            <Box sx={{ flex: 1 }}>
              {renderPageContent()}
            </Box>

            {/* Bottom Navigation */}
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue); // Change the selected tab and re-render content
              }}
              sx={(theme) => ({
                width: '100%',
                position: 'absolute',
                bottom: 0,
                bgcolor: theme.palette.primary.contrastText,
                "& .Mui-selected": {
                  color: theme.palette.primary.main,
                },
                "& .MuiBottomNavigationAction-root": {
                  color: theme.palette.primary.light,
                },
              })}
            >
              <BottomNavigationAction label="Home" icon={<Home />} />
              <BottomNavigationAction label="Soil Optimization" icon={<Diamond />} />
              <BottomNavigationAction label="About Us" icon={<Info />} />
              <BottomNavigationAction label="Resources" icon={<ResourcesIcon />} />
              <BottomNavigationAction label="My Account" icon={<AccountCircle />} />
            </BottomNavigation>
          </>
        )}
      </Box>
    </ThemeProvider>
  );
}
