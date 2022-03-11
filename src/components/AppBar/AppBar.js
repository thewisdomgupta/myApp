import React from 'react'
import { Button, Box, AppBar, Toolbar, Typography } from '@mui/material';

const AppBars = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Compo Friend
          </Typography>
        
       
          <Button color="inherit">Login</Button>
         
       
          <Button color="inherit">Upcoming</Button>
      
       
          <Button color="inherit">Contact</Button>
     
         
          <Button color="inherit">About</Button>
         
    
          <Button color="inherit">Gallery</Button>
 
          
        </Toolbar>
      </AppBar>
    </Box>
   
    </>
  )
}

export default AppBars
