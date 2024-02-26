import './App.css';
import Sidebar from './components/Sidebar';
import React, { } from 'react';
import { CircularProgress } from '@mui/material';


import { TextField, Button } from '@mui/material';
import { useState } from 'react';


function App() {
  const [topic, setTopic] = useState(''); // state for the topic
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const handleClick = async () => {
    try {
      setLoading(true);
      if (topic === '') {
        alert('Please enter a topic');
        setLoading(false);
        return;
      }
      const response = await fetch(`https://llmbackend-empty-moon-6774-dawn-surf-6305.fly.dev/topic`,
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({ "topic": topic })
        });
      console.log(topic)
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err.message)
    }
    setLoading(false);
  }

  const handleQuestion = async () => {
    try {
      setLoading(true);
      if (question === '') {
        alert('Please enter a question');
        setLoading(false);
        return;
      }
      console.log(question)
      const response = await fetch(`https://llmbackend-empty-moon-6774-dawn-surf-6305.fly.dev/ask`,
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({ "question": question })
        });
      const data = await response.json();
      setAnswer(data.answer.result);
    } catch (err) {
      console.error(err.message)
    }
    setLoading(false);
  }

  return (
    <div className="App">
      <div style={{ display: 'flex', alignItems: 'left' }}>
        <Sidebar />
      </div>

      <header className="App-header">
        <div style={{}} className="App">
          {/* Rest of your component */}
          {loading && <CircularProgress />}
        </div>
        <h1>LLM QnA App</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            id="outlined-basic"
            label="Topic"
            variant="outlined"
            onChange={(e) => setTopic(e.target.value)}
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
          onChange={e => setQuestion(e.target.value)} // Update the question state when the TextField changes
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleQuestion(); // Call the handleClick function when the enter key is pressed
            }
          }}
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
          value={answer}
          variant='outlined'
          InputProps={{ style: { color: 'white' } }}
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
