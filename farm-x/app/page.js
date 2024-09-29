"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Box, BottomNavigation, BottomNavigationAction, Typography } from "@mui/material"
import { HomeIcon, AccountCircleIcon, AddIcon, RestoreIcon, FavoriteIcon, LocationOnIcon } from "@mui/icons-material"
export default function Home() {
  const [value, setValue] = useState(0);
  return (

    <Box>
      <Typography variant="h1">FarmX</Typography>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  )
}
