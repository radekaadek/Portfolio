import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { navTabs } from '@/data';

const theme = createTheme({
  palette: {
    primary: {
      main: '#142434',
    },
    secondary: {
      main: '#D4D4D8',
    },
  },
});


export default function DenseAppBar() {
  return (
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} href='/'>
                <Image src="/77837063.jpg" alt="logo" width={50} height={50} />
              </IconButton>
              {navTabs.map((tab) => (
                <Button color="secondary" style={{fontSize: "min(1.25rem, 4vw)"}} href={tab.url} key={tab.url}>{tab.title}</Button>
              ))}
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    );
  //   .text-xl {
  //     font-size: 1.25rem/* 20px */;
  //     line-height: 1.75rem/* 28px */;
  // }
}
