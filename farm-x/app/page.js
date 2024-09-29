"use client"
import { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction, Typography } from "@mui/material";
import Home from "@mui/icons-material/Home";
import Diamond from "@mui/icons-material/Diamond";
import Info from "@mui/icons-material/Info";
import ResourcesIcon from "@mui/icons-material/Interests";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define the theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#18453b',
      light: '#7bbd00',
      dark: '#040c0a',
      contrastText: '#fff',
    },
  },
});

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
    <Typography variant="body1" align="center">This is the content for the Favorites page.</Typography>
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
    <Typography variant="body1" align="center">This is the content for the About Us page.</Typography>
  </Box>
);

const Resources = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h4" align="center">Resources Page</Typography>
    <Typography variant="body1" align="center">This is the content for the About Us page.</Typography>
  </Box>
);

// Main component with dynamic page rendering
export default function Base() {
  const [value, setValue] = useState(0);

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
        <Typography variant="h1" color='#18453b' align="center">FarmX</Typography>
        
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
      </Box>
    </ThemeProvider>
  );
}
