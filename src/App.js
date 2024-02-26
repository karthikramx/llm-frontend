import './App.css';
import Sidebar from './components/Sidebar';
import React, { } from 'react';


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
  //const [topic, setTopic] = useState(''); // state for the topic

  const handleClick = async () => {
    try {
      const response = await fetch(`https://llmbackend-red-sound-9192-billowing-frost-5505.fly.dev/`)
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className="App">
      <div style={{ display: 'flex', alignItems: 'left' }}>
        <Sidebar />
      </div>
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
          <Button onClick={handleClick} width='30' color='warning' variant="contained" type='submit' sx={{ height: '50px' }}>Explore</Button>
        </div>
        <TextField
          label="Question"
          inputProps={{ style: { color: 'white' } }}
          sx={{
            width: '50ch',
            color: 'white',
            mb: 2,
            mt: 2,
            '.MuiOutlinedInput-root': {
              fieldset: { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            },
            '& .MuiFormLabel-root': { color: 'white' },
            '& .MuiFormLabel-root.Mui-focused': { color: 'white' },
          }}></TextField>
        <TextField
          id="outlined-multiline-flexible"
          label="Answer"
          inputProps={{ style: { color: 'white' } }}
          multiline
          maxRows={100}
          sx={{
            width: '50ch',
            color: 'white',
            mb: 2,
            mt: 2,
            '.MuiOutlinedInput-root': {
              fieldset: { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            },
            '& .MuiFormLabel-root': { color: 'white' },
            '& .MuiFormLabel-root.Mui-focused': { color: 'white' },
          }}
        />
      </header>
    </div>
  );
}

export default App;
