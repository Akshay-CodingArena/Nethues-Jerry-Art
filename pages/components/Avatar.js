import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

export default function FallbackAvatars() {
  return (

      <Avatar
        style={{backgroundColor:'#334f67',fontWeight:"bold",padding:'35px'}}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        CF
      </Avatar>
     
 
  );
}