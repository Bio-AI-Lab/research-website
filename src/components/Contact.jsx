import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./Contact.scss";

const professors = [
  { name: "Dr. Letu Qingge", email: "lqingge@ncat.edu" },
  { name: "Dr. Salil Desai", email: "sdesai@ncat.edu" },
  { name: "Dr. Robert Newman", email: "rhnewman@ncat.edu" },
  { name: "Dr. Madhuri Siddula", email: "msiddula@ncat.edu" },
  { name: "Dr. Kristen Rhinehardt", email: "klrhineh@ncat.edu" },
  // { name: "Dr. Kushal Kalyan", email: "ksurendranath@aggies.ncat.edu" },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    professorEmail: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
    professorEmail: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let newErrors = {
  //     name: !form.name,
  //     email: !validateEmail(form.email),
  //     message: !form.message,
  //     professorEmail: !form.professorEmail,
  //   };

  //   setErrors(newErrors);

  //   const hasErrors = Object.values(newErrors).some((error) => error);

  //   if (!hasErrors) {
  //     // Simulate sending an email
  //     alert(
  //       `Email sent to ${form.professorEmail}!\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
  //     );
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${form.professorEmail}?subject=Contact from ${form.name}&body=Message: ${form.message}%0A%0AFrom: ${form.name}%0AEmail: ${form.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page">
      <Box className="contact-page__content">
        <Typography variant="h4" className="contact-page__title">
          Contact a Professor
        </Typography>
        <form onSubmit={handleSubmit} className="contact-form">
          <TextField
            fullWidth
            variant="outlined"
            label="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            helperText={errors.name ? "Name is required" : ""}
            className="contact-form__input"
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Your Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email ? "Enter a valid email" : ""}
            className="contact-form__input"
          />
          <FormControl
            fullWidth
            variant="outlined"
            className="contact-form__input"
            error={errors.professorEmail}
          >
            <InputLabel>Professor</InputLabel>
            <Select
              value={form.professorEmail}
              onChange={(e) =>
                setForm({
                  ...form,
                  professorEmail: e.target.value,
                })
              }
              label="Professor"
              name="professorEmail"
            >
              {professors.map((professor) => (
                <MenuItem key={professor.email} value={professor.email}>
                  {professor.name}
                </MenuItem>
              ))}
            </Select>
            {errors.professorEmail && (
              <p style={{ color: "#e74c3c", margin: "0", padding: "0" }}>
                Please select a professor
              </p>
            )}
          </FormControl>
          <TextField
            fullWidth
            variant="outlined"
            label="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            error={errors.message}
            helperText={errors.message ? "Message cannot be empty" : ""}
            className="contact-form__input"
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
            className="contact-form__submit"
          >
            Send Message
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Contact;
