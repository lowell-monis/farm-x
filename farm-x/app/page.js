"use client"
import { useState, useEffect } from "react"
import { Box, BottomNavigation, BottomNavigationAction, Typography } from "@mui/material"
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { palette } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#18453b',
      light: '#2c7e6c',
      dark: '#040c0a',
      contrastText: '#fff',
    },
  },
});

export default function Home() {
  const [value, setValue] = useState(0);
  return (

    <ThemeProvider theme={theme}>
      <Box>
      <Typography variant="h1">FarmX</Typography>
      <BottomNavigation
        showLabels
        value={value}
        sx={{ width: '100%', position: 'absolute', bottom: 0, color: 'primary' }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
    </ThemeProvider>
  )
}
