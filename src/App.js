import './App.css';

import { TextField, Button } from '@mui/material';
// import { useState } from 'react';

/*{ <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& .MuiButton-root': { width: '15ch' },
            '& .MuiTextField-root': { width: '50ch' }
          }}
        ></Box> }
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LLM QnA App</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            id="outlined-basic"
            label="Topic"
            variant="outlined"
            inputProps={{ style: { color: 'white' } }}
            sx={{
              width: '25ch',
              color: 'white',
              mr: 2,
              '.MuiOutlinedInput-root': {
                fieldset: { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
              },
              '& .MuiFormLabel-root': { color: 'white' },
              '& .MuiFormLabel-root.Mui-focused': { color: 'white' },
            }} />

          <Button width='30' color='warning' variant="contained" type='submit' sx={{ height: '50px' }}>Explore</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
