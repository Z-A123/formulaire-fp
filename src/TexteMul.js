import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TexteMul() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={9}
          defaultValue="Bonjour #NOM_ETUDIANT# #PRENOM_ETUDIANT#,

          Vous avez suivi #nbHeur# de formation chez FormationPlus.
          Pouvez-vous nous retourner ce mail avec la pièce jointe signée.
          
          Cordialement,
          FormationPlus"
        />
      </div>
     
          
     
    </Box>
  );
}
