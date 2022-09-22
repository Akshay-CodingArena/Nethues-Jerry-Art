import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({setPage},{page}) {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div style={{marginTop:'50px',marginBottom:'50px',display:'flex',justifyContent:"center"}} >
      <Pagination count={4} page={page} onChange={handleChange} />
    </div>
  );
}