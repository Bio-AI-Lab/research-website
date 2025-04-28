import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Dialog,
  Slide,
} from "@mui/material";
import "./WorkshopPage.scss";
import SendIcon from "@mui/icons-material/Send";
import IMG3285 from "../assets/images/IMG_3285.jpg";
import IMG_3286 from "../assets/images/IMG_3286.jpg";
import IMG_3287 from "../assets/images/IMG_3287.jpg";
import IMG_3288 from "../assets/images/IMG_3288.jpg";
import IMG_3289 from "../assets/images/IMG_3289.jpg";
import IMG_3290 from "../assets/images/IMG_3290.jpg";
import IMG_3292 from "../assets/images/IMG_3292.jpg";
import IMG_3293 from "../assets/images/IMG_3293.jpg";
import IMG_4572 from "../assets/images/IMG_4572.jpg";
import IMG_4573 from "../assets/images/IMG_4573.jpg";
import IMG_4574 from "../assets/images/IMG_4574.jpg";
import IMG_4577 from "../assets/images/IMG_4577.jpg";
import IMG_4578 from "../assets/images/IMG_4578.jpg";
import IMG_4579 from "../assets/images/IMG_4579.jpg";
import IMG_4580 from "../assets/images/IMG_4580.jpg";
import IMG_4581 from "../assets/images/IMG_4581.jpg";
import IMG_4582 from "../assets/images/IMG_4582.jpg";
import IMG_4583 from "../assets/images/IMG_4583.jpg";
import IMG_4584 from "../assets/images/IMG_4584.jpg";
import IMG_4585 from "../assets/images/IMG_4585.jpg";
import IMG_4586 from "../assets/images/IMG_4586.jpg";
import IMG_4587 from "../assets/images/IMG_4587.jpg";
import IMG_4589 from "../assets/images/IMG_4589.jpg";
import IMG_4590 from "../assets/images/IMG_4590.jpg";
import IMG_4591 from "../assets/images/IMG_4591.jpg";
import IMG_4592 from "../assets/images/IMG_4592.jpg";
import IMG_4593 from "../assets/images/IMG_4593.jpg";
import IMG_4594 from "../assets/images/IMG_4594.jpg";
import IMG_4595 from "../assets/images/IMG_4595.jpg";
import IMG_4596 from "../assets/images/IMG_4596.jpg";
import IMG_4597 from "../assets/images/IMG_4597.jpg";
import IMG_4598 from "../assets/images/IMG_4598.jpg";
import IMG_4599 from "../assets/images/IMG_4599.jpg";
import IMG_4600 from "../assets/images/IMG_4600.jpg";
import IMG_4601 from "../assets/images/IMG_4601.jpg";
import IMG_4602 from "../assets/images/IMG_4602.jpg";

const agendaDetails = [
  {
    time: "8:30-9:00 AM",
    topic: "Check-in and Continental Breakfast",
  },
  {
    time: "9:00-12:00 PM",
    topic: "Faculty Research Talk Session (30 min talk and 10 min Q&A)",
    sessions: [
      {
        time: "9:00-9:40 AM",
        program: "NSF CISE FET Collaborative Research Program",
        speaker:
          "Dr. Xiaowen Liu, Professor of Biomedical Informatics & Genomics, Tulane University",
        title:
          "Complex proteoform identification by top-down mass spectrometry",
        moderator:
          "Dr. Letu Qingge, Assistant Professor of Computer Science, NCAT",
      },
      {
        time: "9:40-10:20 AM",
        program: "NSF CISE FET Collaborative Research Program",
        speaker:
          "Dr. Binhai Zhu, Professor of Computer Science, Montana State University",
        title: "On Multiple Protein Scaffold Filling",
        moderator:
          "Dr. Letu Qingge, Assistant Professor of Computer Science, NCAT",
      },
      {
        time: "10:20-11:00 AM",
        program: "NSF ExpandAI Program and HBCU-UP ACE DSA Program",
        speaker:
          "Dr. Salil Desai, Professor of Industrial & System Engineering, NCAT",
        title: "AI Trends in Advanced Manufacturing",
        moderator:
          "Dr. Letu Qingge, Assistant Professor of Computer Science, NCAT",
      },
      {
        time: "11:00-11:40 AM",
        program: "NSF ExpandAI Program and HBCU-UP ACE DSA Program",
        speaker:
          "Dr. Letu Qingge, Assistant Professor of Computer Science, NCAT",
        title: "Generalized AI Models with Transfer and Continual Learning",
        moderator:
          "Dr. Letu Qingge, Assistant Professor of Computer Science, NCAT",
      },
      {
        time: "11:40-12:20 PM",
        program: "NSF ExpandAI Program and HBCU-UP ACE DSA Program",
        speaker:
          "Dr. Madhuri Siddula, Assistant Professor of Computer Science, NCAT",
        title: "LLMs in Healthcare - Cybersecurity concerns and solutions",
        moderator:
          "Dr. Letu Qingge, Assistant Professor of Computer Science, NCAT",
      },
    ],
  },
  {
    time: "12:20-1:00 PM",
    topic: "Lunch",
  },
  {
    time: "1:00-4:00 PM",
    topic:
      "Graduate Research Student Talk Session (30 min talk and 10 min Q&A)",
    sessions: [
      {
        time: "1:00-1:40 PM",
        program: "Robust AI",
        speaker:
          "Richard Annan, PhD student at Department of Computer Science, NCAT",
        title:
          "Federated Learning for COVID-19 Detection: Optimized Multi-Teacher Knowledge Distillation and Ensemble Weighting",
        moderator:
          "Alexis Cathcart, Master Student at Department of Computer Science, NCAT",
      },
      {
        time: "1:40-2:20 PM",
        program: "Generative AI",
        speaker:
          "Kushal Badal, PhD student at Department of Computer Science, NCAT",
        title: "Generative AI for Protein Scaffold Filling",
        moderator:
          "Alexis Cathcart, Master Student at Department of Computer Science, NCAT",
      },
      {
        time: "2:20-3:00 PM",
        program: "Deep Learning",
        speaker:
          "Simachew Ashebir, PhD student in Department of Mathematics & Statistics, NCAT",
        title:
          "Hybrid Deep Learning Using Wavelet Inputs for Time Series Forecasting",
        moderator:
          "Alexis Cathcart, Master Student at Department of Computer Science, NCAT",
      },
      {
        time: "3:00-3:40 PM",
        program: "Text Mining",
        speaker:
          "Arielle King, PhD student in Department of Mathematics & Statistics, NCAT",
        title:
          "Factors Impacting Big Data-Driven Research in US Higher Education Institutions",
        moderator:
          "Alexis Cathcart, Master Student at Department of Computer Science, NCAT",
      },
    ],
  },
  {
    time: "3:40-4:20 PM",
    topic: "Hands-on Workshop for URM Projects",
    projects: [
      {
        name: "COVID-19 Detection with Vision Transformer",
        advisors: [
          "Dr. Robert Newman at Department of Biology",
          "Dr. Letu Qingge at Department of Computer Science",
          "NCAT",
        ],
      },
      {
        name: "Image Generation with GAN",
        advisors: [
          `Dr. Salil Desai at Department of Industrial and Systems Engineering,
          Dr. Letu Qingge at Department of Computer Science`,
          "NCAT",
        ],
      },
      {
        name: "Generative AI for Protein Sequencing",
        advisors: ["Dr. Letu Qingge at Department of Computer Science", "NCAT"],
      },
      {
        name: "COVID-19 Detection with CNN",
        advisors: ["Dr. Letu Qingge at Department of Computer Science", "NCAT"],
      },
      {
        name: "Explainable AI for Phenotype Prediction",
        advisors: [
          "Dr. Kristen Rhinehardt at Department of Computational Data Science and Engineering",
          "Dr. Letu Qingge at Department of Computer Science, NCAT",
        ],
      },
      {
        name: "Private AI for Intrusion Detection in Home Wi-Fi",
        advisors: [
          "Dr. Madhuri Siddula at Department of Computer Science, NCAT",
        ],
      },
      // Add more projects as needed
    ],
  },
  {
    time: "4:20-4:30 PM",
    topic: "Closing Remarks",
  },
];

const workshopHighlights = [
  { src: IMG3285, alt: "Workshop Highlight 1" },
  { src: IMG_3286, alt: "Workshop Highlight 2" },
  { src: IMG_3287, alt: "Workshop Highlight 3" },
  { src: IMG_3288, alt: "Workshop Highlight 4" },
  { src: IMG_3289, alt: "Workshop Highlight 5" },
  { src: IMG_3290, alt: "Workshop Highlight 6" },
  { src: IMG_3292, alt: "Workshop Highlight 7" },
  { src: IMG_3293, alt: "Workshop Highlight 8" },
  { src: IMG_4572, alt: "Workshop Highlight 9" },
  { src: IMG_4573, alt: "Workshop Highlight 10" },
  { src: IMG_4574, alt: "Workshop Highlight 11" },
  { src: IMG_4577, alt: "Workshop Highlight 12" },
  { src: IMG_4578, alt: "Workshop Highlight 13" },
  { src: IMG_4579, alt: "Workshop Highlight 14" },
  { src: IMG_4580, alt: "Workshop Highlight 15" },
  { src: IMG_4581, alt: "Workshop Highlight 16" },
  { src: IMG_4582, alt: "Workshop Highlight 17" },
  { src: IMG_4583, alt: "Workshop Highlight 18" },
  { src: IMG_4584, alt: "Workshop Highlight 19" },
  { src: IMG_4585, alt: "Workshop Highlight 20" },
  { src: IMG_4586, alt: "Workshop Highlight 21" },
  { src: IMG_4587, alt: "Workshop Highlight 22" },
  { src: IMG_4589, alt: "Workshop Highlight 23" },
  { src: IMG_4590, alt: "Workshop Highlight 24" },
  { src: IMG_4591, alt: "Workshop Highlight 25" },
  { src: IMG_4592, alt: "Workshop Highlight 26" },
  { src: IMG_4593, alt: "Workshop Highlight 27" },
  { src: IMG_4594, alt: "Workshop Highlight 28" },
  { src: IMG_4595, alt: "Workshop Highlight 29" },
  { src: IMG_4596, alt: "Workshop Highlight 30" },
  { src: IMG_4597, alt: "Workshop Highlight 31" },
  { src: IMG_4598, alt: "Workshop Highlight 32" },
  { src: IMG_4599, alt: "Workshop Highlight 33" },
  { src: IMG_4600, alt: "Workshop Highlight 34" },
  { src: IMG_4601, alt: "Workshop Highlight 35" },
  // { src: IMG_4602, alt: "Workshop Highlight 36" },
];

const WorkshopPage = () => {
  const [open, setOpen] = useState(false);
  const [registrationForm, setRegistrationForm] = useState({
    // bannerId: "",
    name: "",
    email: "",
    department: "",
    // phoneNumber: "",
  });

  // Google Apps Script URL
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxRRZ4l6qKXhVMoiJ5SvspaK5KZuV9wcEgbOZyKeh_TBL27aLHOiJ1w7dFQ3XPXOnVG/exec";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegistrationForm({ ...registrationForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registrationForm),
    })
      .then(() => {
        alert("Registration successful!");
        setRegistrationForm({
          // bannerId: "",
          name: "",
          email: "",
          department: "",
          // phoneNumber: "",
        });
        setOpen(false);
      })
      .catch((error) => alert("Error in submitting the form: " + error));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="workshop-agenda-page">
      <div className="agenda-header">
        <Typography
          variant="h4"
          style={{ marginBottom: "0.5rem", fontWeight: 500, fontSize: "36px" }}
        >
          Symposium Agenda
        </Typography>
        <div
          style={{
            fontSize: "26px",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          2024 Summer Research Symposium on Diverse Perspectives and
          Applications of AI and Algorithms
        </div>
        <div
          className="agenda-location"
          style={{
            marginBottom: "0.3rem",
            fontWeight: 600,
            fontSize: "16px",
            // color: "#3498db",
          }}
        >
          Martin Complex, ROOM 244, 1601 E Market St, Greensboro, North Carolina
          27411
        </div>
        <div
          variant="body1"
          className="agenda-date"
          style={{
            marginBottom: "0.3rem",
            fontWeight: 600,
            fontSize: "16px",
            // color: "#3498db",
          }}
        >
          Monday, November 18, 2024
        </div>
        <Button
          variant="contained"
          className="floating-register-button"
          onClick={handleOpen}
        >
          Register
        </Button>
      </div>

      <div className="agenda-list">
        {agendaDetails.map((item, index) => (
          <Box
            key={index}
            className="agenda-item"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Typography variant="h6" className="agenda-time">
              {item.time}
            </Typography>
            <Typography variant="h5" className="agenda-topic">
              {item.topic}
            </Typography>
            {item.sessions && (
              <div className="session-list">
                {item.sessions.map((session, idx) => (
                  <Box
                    key={idx}
                    className="session-item"
                    style={{ animationDelay: `${idx * 0.3}s` }}
                  >
                    <Typography variant="subtitle2" className="session-time">
                      {session.time}
                    </Typography>
                    <Typography variant="subtitle1" className="session-program">
                      {session.program}
                    </Typography>
                    <Typography variant="body1" className="session-speaker">
                      <strong>Speaker:</strong> {session.speaker}
                    </Typography>
                    <Typography variant="body2" className="session-title">
                      <em>{session.title}</em>
                    </Typography>
                    <Typography variant="body2" className="session-moderator">
                      <strong>Moderator:</strong> {session.moderator}
                    </Typography>
                  </Box>
                ))}
              </div>
            )}
            {item.projects && (
              <div className="project-list">
                {item.projects.map((project, projIdx) => (
                  <Box
                    key={projIdx}
                    className="project-item"
                    style={{ animationDelay: `${projIdx * 0.3}s` }}
                  >
                    <Typography variant="body1">
                      <strong>Project:</strong> {project.name}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Advisors:</strong> {project.advisors.join(", ")}
                    </Typography>
                  </Box>
                ))}
              </div>
            )}
          </Box>
        ))}
      </div>

      <div className="highlights-section">
        <Typography
          variant="h5"
          style={{ marginBottom: "1rem", fontWeight: 600 }}
        >
          Workshop Highlights
        </Typography>
        <div className="highlights-gallery">
          {workshopHighlights.map((photo, index) => (
            <Box key={index} className="highlight-item">
              <img
                src={photo.src}
                alt={photo.alt}
                key={index}
                className="highlight-image"
              />
            </Box>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "10rem", visibility: "hidden" }}>
        hidden space
      </div>
      {/* Floating Register Button */}

      {/* Popup for Registration Form */}
      {open && (
        <div className="custom-modal-overlay" onClick={handleClose}>
          <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
            <Box className="registration-form-container">
              <Typography variant="h6" align="center" gutterBottom>
                Register for the Workshop
              </Typography>
              <form onSubmit={handleSubmit} className="registration-form">
                {/* <TextField
                  fullWidth
                  label="Banner ID"
                  name="bannerId"
                  variant="outlined"
                  value={registrationForm.bannerId}
                  onChange={handleChange}
                  required
                  type="number"
                  className="form-field"
                /> */}
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  value={registrationForm.name}
                  onChange={handleChange}
                  required
                  className="form-field"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  value={registrationForm.email}
                  onChange={handleChange}
                  required
                  className="form-field"
                />
                <TextField
                  fullWidth
                  label="Department"
                  name="department"
                  variant="outlined"
                  value={registrationForm.department}
                  onChange={handleChange}
                  required
                  className="form-field"
                />
                {/* <TextField
                  fullWidth
                  type="number"
                  label="Phone Number"
                  name="phoneNumber"
                  variant="outlined"
                  value={registrationForm.phoneNumber}
                  onChange={handleChange}
                  required
                  className="form-field"
                /> */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  fullWidth
                  className="submit-button"
                >
                  Submit Registration
                </Button>
              </form>
            </Box>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopPage;
