import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SubmitButton = styled(Button)({
    backgroundColor: 'var(--lt)',
    '&:hover': {
        backgroundColor: '#a9a9a9',
    }
});


export default function EmailForm() {

    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        switch (id) {
            case 'name-input':
                setName(value);
                break;
            case 'email-input':
                setEmail(value);
                break;
            case 'message-input':
                setMessage(value);
                break;
            default:
                break;
        }
    };

    const sendEmail = () => {
    
        emailjs.sendForm('service_ay9fbqg', 'template_cdufmi2', form.current, 'gbS5-pnTumcNs9T_6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Basic Validation for form
        if (name.trim().length < 1) return;
        if (!(/^([a-z\d_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(email))) return;
        if (message.trim().length < 10) return;

        // Send email
        sendEmail();
    }

    return (
        <div>
            <Box
                component="form"
                ref={form}
                sx={{
                    '& .MuiTextField-root': { width: '100%', my: 2 },
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    padding: '100px',
                    width: '50%'

                }}
                noValidate
                autoComplete="off"
                
            >
                <TextField
                    required
                    id="name-input"
                    name="user_name"
                    type="text"
                    label="Name"
                    value={name}
                    variant="outlined"
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    id="email-input"
                    name="user_email"
                    type="email"
                    label="Email"
                    value={email}
                    variant="outlined"
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    multiline
                    fullWidth
                    rows={8}
                    id="message-input"
                    name="message"
                    label="Message"
                    value={message}
                    variant="outlined"
                    onChange={handleInputChange}
                />
                <SubmitButton
                variant='contained'
                type='button'
                onClick={handleFormSubmit}
                >
                    Send
                </SubmitButton>
            </Box>
        </div>

    );

}