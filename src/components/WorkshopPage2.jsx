import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Dialog,
  Slide,
} from "@mui/material";
import "./WorkshopPage2.scss";

// const urmProjectsAgenda = [
//   {
//     time: "5:00 - 5:20 PM",
//     topic: "Team 2: Private AI",
//     aiFocus: '',
//     details: {
//       teamMembers: [
//         "Smith Evan",
//         "Holland Laila",
//         "Cross Jeremy (Team Leader)",
//       ],
//       advisors: ["Dr. Madhuri Siddula"],
//     },
//   },
//   //   {
//   //     time: "5:20 - 5:40 PM",
//   //   },
//   {
//     time: "5:40 - 6:00 PM",
//     topic: "Team 3: ViT",
//     details: {
//       teamMembers: [
//         "Green Justin (Team Leader)",
//         "Revies Willie",
//         "Jeffries Jordan",
//       ],
//       advisors: ["Dr. Robert H Newman", "Dr. Letu Qingge", "Richard Annan"],
//     },
//   },
//   {
//     time: "6:00 - 6:20 PM",
//     topic: "Team 4: GAN",
//     details: {
//       teamMembers: [
//         "Arellano Romero Brenda",
//         "Faulkner Everett",
//         "Marshall Kyeesha (Team Leader)",
//         "Jones Mackenzie",
//       ],
//       advisors: ["Dr. Letu Qingge", "Alexis Cathcart"],
//     },
//   },
//   {
//     time: "6:20 - 6:40 PM",
//     topic: "Team 5: PSF Transformer",
//     details: {
//       teamMembers: [
//         "Okoro Chidi",
//         "Khamvanthong Hannah",
//         "Velazco Daniel",
//         "Pierce Symphony (Team Leader)",
//       ],
//       advisors: ["Dr. Letu Qingge", "Kushal Badal"],
//     },
//   },
//   {
//     time: "6:40 - 7:00 PM",
//     topic: "Team 6: CNN",
//     details: {
//       teamMembers: [
//         "Powell Jalen",
//         "Agboglo Matthew (Team Leader)",
//         "Ruff Jaden",
//       ],
//       advisors: ["Dr. Salil Desai", "Dr. Letu Qingge", "Richard Annan"],
//     },
//   },
// ];

// const WorkshopPage2 = () => {
//   return (
//     <div className="workshop-agenda-page2">
//       <div className="agenda-header">
//         <Typography
//           variant="h4"
//           style={{ marginBottom: "0.5rem", fontWeight: 500, fontSize: "36px" }}
//         >
//           URM Projects Final Presentation Workshop 2
//         </Typography>
//         <div
//           style={{
//             fontSize: "20px",
//             fontWeight: "500",
//             marginBottom: "0.5rem",
//           }}
//         >
//           Tuesday, December 10, 2024 | 5:00 PM - 7:00 PM
//         </div>
//         <div
//           className="agenda-location"
//           style={{
//             marginBottom: "1rem",
//             fontWeight: 600,
//             fontSize: "16px",
//           }}
//         >
//           Martin Complex, ROOM 244, 1601 E Market St, Greensboro, North Carolina
//           27411
//         </div>
//       </div>

//       <div className="agenda-list">
//         {urmProjectsAgenda.map((item, index) => (
//           <Box
//             key={index}
//             className="agenda-item"
//             style={{ animationDelay: `${index * 0.2}s` }}
//           >
//             <Typography variant="h6" className="agenda-time">
//               {item.time}
//             </Typography>
//             <Typography variant="h5" className="agenda-topic">
//               {item.topic}
//             </Typography>
//             <Typography variant="body2" style={{ marginTop: "10px" }}>
//               <strong>Team Members:</strong>{" "}
//               {item.details.teamMembers.join(", ")}
//             </Typography>
//             <Typography variant="body2" style={{ marginTop: "10px" }}>
//               <strong>Advisors:</strong> {item.details.advisors.join(", ")}
//             </Typography>
//           </Box>
//         ))}
//       </div>
//       <div style={{ marginBottom: "10rem", visibility: "hidden" }}>
//         hidden space
//       </div>
//     </div>
//   );
// };

// export default WorkshopPage2;

const urmProjectsWithGithub = [
  {
    time: "5:00-5:20 PM",
    team: "Team 2",
    project: "Private AI",
    github: "https://github.com/jacross9/COMP496-Senior-Project-II-Team-2",
    faculty_advisors: ["Dr. Madhuri Siddula"],
    students: [
      { name: "Smith Evan", role: null },
      { name: "Holland Laila", role: null },
      { name: "Cross Jeremy", role: null },
    ],
    ai_focus: ["Private AI"],
  },
  {
    time: "5:20-5:40 PM",
    team: "Team 3",
    project: "ViT",
    github:
      "https://github.com/jmjeffries/Team-3---COVID-19-Imaging-Using-ViT-Model",
    faculty_advisors: ["Dr. Robert H Newman", "Dr. Letu Qingge"],
    students: [
      { name: "Green Justin", role: null },
      { name: "Revies Willie", role: null },
      { name: "Jeffries Jordan", role: null },
    ],
    ai_focus: ["CNN", "ViT", "Private AI"],
  },
  {
    time: "5:40-6:00 PM",
    team: "Team 4",
    project: "GAN",
    github: "https://github.com/brendaar1991/Team-4-MKBE",
    faculty_advisors: ["Dr. Letu Qingge"],
    students: [
      { name: "Arellano Romero Brenda", role: null },
      { name: "Faulkner Everett", role: null },
      { name: "Marshall Kyeesha", role: null },
      { name: "Jones Mackenzie", role: null },
    ],
    ai_focus: ["GAN"],
  },
  {
    time: "6:00-6:20 PM",
    team: "Team 5",
    project: "PSF Transformer",
    github: "https://github.com/SyGitGud/ProteinSequencing",
    faculty_advisors: ["Dr. Letu Qingge"],
    students: [
      { name: "Okoro Chidi", role: null },
      { name: "Khamvanthong Hannah", role: null },
      { name: "Velazco Daniel", role: null },
      { name: "Pierce Symphony", role: null },
    ],
    ai_focus: ["Protein transformer"],
  },
  {
    time: "6:20-6:40 PM",
    team: "Team 6",
    project: "CNN",
    github: "https://github.com/Eyphiriam/COMP-496-TEAM-6/tree/main",
    faculty_advisors: ["Dr. Salil Desai", "Dr. Letu Qingge"],
    students: [
      { name: "Powell Jalen", role: null },
      { name: "Agboglo Matthew", role: null },
      { name: "Ruff Jaden", role: null },
    ],
    ai_focus: ["CNN", "CapsN", "ViT", "Private AI"],
  },
  {
    time: "6:40-7:00 PM",
    team: "Team 7",
    project: "Explainable AI for Phenotype Prediction",
    github: "https://github.com/JD84395/COMP-496-Team-7",
    faculty_advisors: ["Dr. Kristen Rhinehardt", "Dr. Letu Qingge"],
    students: [
      { name: "Horton Jeremiah", role: null },
      { name: "Mitchell Caleb", role: null },
      { name: "Johnson Sidney", role: null },
    ],
    ai_focus: ["SHAP"],
  },
];

const WorkshopPage2 = () => {
  return (
    <div className="workshop-agenda-page2">
      <div className="agenda-header">
        <Typography
          variant="h4"
          style={{ marginBottom: "0.5rem", fontWeight: 500, fontSize: "36px" }}
        >
          Undergraduate Student AI workshop
        </Typography>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "500",
            marginBottom: "0.5rem",
          }}
        >
          Tuesday, December 10, 2024 | 5:00 PM - 7:00 PM
        </div>
        <div
          className="agenda-location"
          style={{
            marginBottom: "1rem",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Martin Complex, ROOM 244, 1601 E Market St, Greensboro, North Carolina
          27411
        </div>
      </div>

      <div className="agenda-list">
        {urmProjectsWithGithub.map((item, index) => (
          <Box
            key={index}
            className="agenda-item"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Typography variant="h6" className="agenda-time">
              {item.time}
            </Typography>
            <Typography variant="h5" className="agenda-topic">
              {item.project}
            </Typography>
            <Typography variant="body2" style={{ marginTop: "10px" }}>
              <strong>Team:</strong> {item.team}
            </Typography>
            <Typography variant="body2" style={{ marginTop: "10px" }}>
              <strong>Team Members:</strong>{" "}
              {item.students
                .map(
                  (student) =>
                    `${student.name}${student.role ? ` (${student.role})` : ""}`
                )
                .join(", ")}
            </Typography>
            <Typography variant="body2" style={{ marginTop: "10px" }}>
              <strong>Advisors:</strong> {item.faculty_advisors.join(", ")}
            </Typography>
            <Typography variant="body2" style={{ marginTop: "10px" }}>
              <strong>AI Focus:</strong> {item.ai_focus.join(", ")}
            </Typography>
            <Typography variant="body2" style={{ marginTop: "10px" }}>
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3498db", textDecoration: "underline" }}
              >
                GitHub Repository
              </a>
            </Typography>
          </Box>
        ))}
      </div>
      <div style={{ marginBottom: "10rem", visibility: "hidden" }}>
        hidden space
      </div>
    </div>
  );
};

export default WorkshopPage2;
