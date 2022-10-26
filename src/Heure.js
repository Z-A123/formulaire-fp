import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Heure() {
  return (
    <Stack component="form" noValidate spacing={20}>
      
      <TextField
        id="time"
        label="Nombre d'heure"
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 200, }}
      />
      
    </Stack>
  );
}
