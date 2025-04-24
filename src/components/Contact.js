import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gu1noyw",
        "template_qbsk4ik",
        form.current,
        "WLL8nQofIZqlZIq9e"
      )
      .then(
        (result) => {
          alert("Message sent!");
          console.log(result.text);
        },
        (error) => {
          alert("An error occurred, please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
        <Heading>Send me a message!</Heading>
        <Subheading>
          Got a question or proposal, or just want to say hello? Go ahead.
        </Subheading>
        <Form ref={form} onSubmit={sendEmail}>
          <InputGroup>
            <Label>Your Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </InputGroup>
          <InputGroup>
            <Label>Email Address</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </InputGroup>
          <InputGroup fullWidth>
            <Label>Your Message</Label>
            <TextArea
              name="message"
              placeholder="Write your message here..."
              required
            />
          </InputGroup>
          <SlideButton type="submit">SHOOT →</SlideButton>
          <input
            type="hidden"
            name="title"
            value="Contact from your Portfolio"
          />
        </Form>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  min-height: 100vh;
  background: #f9f9fc;
  border-bottom: 15px solid var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: var(--text-font);
`;


const Heading = styled.h1`
  font-size: 3.7rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-family: var(--heading-font);
`;

const Subheading = styled.p`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 800px;
  width: 100%;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: ${(props) => (props.fullWidth ? "1 / 3" : "auto")};
`;

const Label = styled.label`
  font-size: 1.05rem;
  color: #a0a0b0;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem;
  font-size: 1.1rem;
  background: transparent;
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
  }
`;

const TextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem;
  font-size: 1.1rem;
  resize: vertical;
  background: transparent;
  min-height: 80px;
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
  }
`;

const SlideButton = styled.button`
  grid-column: 1 / 3;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: transparent;
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background 0.3s;
  position: relative;
  padding: 12px 24px;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  cursor: pointer;
  overflow: hidden;
  font-size: 16px;
  border-radius: 8px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    transition: left 2s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;
