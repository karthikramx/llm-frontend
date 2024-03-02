import React from 'react';
//import { Button } from '@mui/material';

function Sidebar(props) {
    console.log(props.topics)
    return (
        <div style={{ width: '150px', height: '100vh', backgroundColor: '#052a35', position: 'fixed' }}>
            <h3 style={{ color: "white" }} > Topics</h3>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {props.topics.map((topic, index) => {
                    return <li key={index} style={{ padding: '10px', color: 'white', cursor: 'pointer' }} onClick={() => props.handleTopicChange(topic)}>{topic}</li>
                })}
            </ul>
        </div>
    );
}

export default Sidebar;