import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import {
  ContactButton,
  ContactForm,
  ContactInput,
  ContactInputMessage,
  ContactTitle,
  Container,
  Desc,
  Title,
  Wrapper,
} from "./contact.styles.js";

export const Contact = () => {
  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kmzigd4",
        "template_r04r9ir",
        form.current,
        "Ku5T6ti6-MJdSRcB5"
      )
      .then(
        (result) => {
          setOpen(true);
          console.log(result);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <Title id='contact'>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder='Your Email' name='from_email' />
          <ContactInput placeholder='Your Name' name='from_name' />
          <ContactInput placeholder='Subject' name='subject' />
          <ContactInputMessage placeholder='Message' rows='4' name='message' />
          <ContactButton type='submit' value='Send' />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message='Email sent successfully!'
          severity='success'
        />
      </Wrapper>
    </Container>
  );
};
