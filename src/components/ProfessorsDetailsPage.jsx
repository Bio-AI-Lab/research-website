// import React from "react";
// import "./ProfessorsDetailsPage.scss";

// const ProfessorDetailsPage = ({ professor, onBack }) => {
//   return (
//     <div className="professor-details-page">
//       <button className="back-button" onClick={onBack}>
//         Back to Professors
//       </button>
//       <div className="professor-details">
//         <img
//           src={professor.image}
//           alt={professor.name}
//           className="professor-image"
//         />
//         <div className="professor-info">
//           <h1>{professor.name}</h1>
//           <p>{professor.title}</p>
//         </div>
//       </div>

//       <h2>Students Under {professor.name}</h2>
//       <ul className="student-list">
//         {professor.students.map((student) => (
//           <li key={student.id} className="student-item">
//             <h3>{student.name}</h3>
//             <p>Thesis: {student.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProfessorDetailsPage;

// import React, { useState } from "react";
// import defaultProfile from "../assets/images/defaultProfile.png";
// import "./ProfessorsDetailsPage.scss";
// import BackIcon from "@mui/icons-material/ArrowBackIosNew";
// import { IconButton } from "@mui/material";
// import PublicationsModal from "./PublicationsModal";

// const ProfessorsDetailsPage = ({ professor, onBack }) => {
//   const [selectedPerson, setSelectedPerson] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = (person) => {
//     setSelectedPerson(person);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedPerson(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="professorsDetailsPage-main">
//       <div className="professorsDetailsPage-main__title">
//         <IconButton onClick={onBack}>
//           <BackIcon />
//         </IconButton>{" "}
//         {/* Our Team */}Collaborator & Team
//       </div>

//       {/* PI Section */}
//       <div className="professorsDetailsPage-main__pi">
//         <div className="professorsDetailsPage-main__pi__content">
//           <div className="professorsDetailsPage-main__pi__imageContainer">
//             <img
//               alt={professor.name}
//               src={professor?.img ? professor?.img : defaultProfile}
//               className="professorsDetailsPage-main__pi__imageContainer__image"
//             />
//           </div>
//           <div className="professorsDetailsPage-main__pi__textContainer">
//             <div className="professorsDetailsPage-main__pi__textContainer__nameAndDesignationContainer">
//               <span className="professorsDetailsPage-main__pi__textContainer__nameAndDesignationContainer__name">
//                 {professor.name}
//               </span>
//               <div style={{ marginTop: "1rem" }}>
//                 <span className="professorsDetailsPage-main__pi__textContainer__nameAndDesignationContainer__designation">
//                   {professor.designation}
//                 </span>
//                 <span
//                   className="professorsDetailsPage-main__pi__textContainer__nameAndDesignationContainer__publications"
//                   onClick={() => handleOpenModal(professor)}
//                 >
//                   Publications
//                 </span>
//               </div>
//             </div>
//             <div className="professorsDetailsPage-main__pi__textContainer__commonText">
//               {professor.college}
//             </div>
//             <div className="professorsDetailsPage-main__pi__textContainer__commonText">
//               {professor.department}
//             </div>
//             <div className="professorsDetailsPage-main__pi__textContainer__description">
//               <span className="professorsDetailsPage-main__pi__textContainer__description__label">
//                 About:{" "}
//               </span>
//               {professor.description}
//             </div>
//           </div>
//         </div>
//         {/* <div
//           style={{
//             position: "absolute",
//             bottom: "1rem",
//             right: "1rem",
//             padding: "0.5rem 1rem",
//             backgroundColor: "antiquewhite",
//             borderRadius: "10px",
//             cursor: "pointer",
//             fontSize: "0.9rem",
//             color: "#fff",
//             fontWeight: 600,
//             background: "#3498db",
//             boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
//           }}
//         >
//           Publications
//         </div> */}
//       </div>

//       {/* professorsDetailsPage Section */}
//       {professor?.students?.map((item, i) => (
//         <div
//           key={i}
//           className={`professorsDetailsPage-main__card ${
//             i % 2 === 0 ? "light" : "dark"
//           }`}
//           style={{ position: "relative" }}
//         >
//           <div className="professorsDetailsPage-main__card__imageContainer">
//             <img
//               alt={item.name}
//               src={item?.img ? item?.img : defaultProfile}
//               className="professorsDetailsPage-main__card__imageContainer__image"
//             />
//           </div>
//           <div className="professorsDetailsPage-main__card__textContainer">
//             <div className="professorsDetailsPage-main__card__textContainer__nameAndQualificationContainer">
//               <span className="professorsDetailsPage-main__card__textContainer__nameAndQualificationContainer__name">
//                 {item.name}
//               </span>
//               <span className="professorsDetailsPage-main__card__textContainer__nameAndQualificationContainer__qualification">
//                 {item.qualification}
//               </span>
//             </div>
//             <div className="professorsDetailsPage-main__card__textContainer__description">
//               {item.description}
//             </div>
//           </div>
//           <PublicationsModal
//             isOpen={isModalOpen}
//             onClose={handleCloseModal}
//             person={item}
//           />
//           {/* <div
//             style={{
//               position: "absolute",
//               bottom: "0rem",
//               right: "0rem",
//               padding: "0.5rem 1rem",
//               backgroundColor: "antiquewhite",
//               borderRadius: "10px",
//               cursor: "pointer",
//               fontSize: "0.9rem",
//               color: "#fff",
//               fontWeight: 600,
//               background: "#3498db",
//               boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
//             }}
//           >
//             Publications
//           </div> */}
//         </div>
//       ))}
//       <PublicationsModal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         person={selectedPerson}
//       />
//     </div>
//   );
// };

// export default ProfessorsDetailsPage;

import React, { useState } from "react";
import {
  IconButton,
  Button,
  Modal,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import BackIcon from "@mui/icons-material/ArrowBackIosNew";
import "./ProfessorsDetailsPage.scss";
import PublicationsModal from "./PublicationsModal";
import defaultProfile from "../assets/images/defaultProfile.png";

const ProfessorsDetailsPage = ({ professor, onBack }) => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPerson(null);
    setIsModalOpen(false);
  };

  return (
    <div className="professorsDetailsPage-main">
      <div className="professorsDetailsPage-main__title">
        <IconButton onClick={onBack}>
          <BackIcon />
        </IconButton>{" "}
        Collaborator & Team
      </div>

      {/* PI Section */}
      <div className="professorsDetailsPage-main__pi">
        <div className="professorsDetailsPage-main__pi__content">
          <div className="professorsDetailsPage-main__pi__imageContainer">
            <img
              alt={professor.name}
              src={professor?.img ? professor?.img : defaultProfile}
              className="professorsDetailsPage-main__pi__imageContainer__image"
            />
          </div>
          <div className="professorsDetailsPage-main__pi__textContainer">
            <div className="professorsDetailsPage-main__pi__textContainer__nameAndDesignationContainer">
              <span className="professorsDetailsPage-main__pi__textContainer__nameAndDesignationContainer__name">
                {professor.name} (
                {professor.name?.includes("Qingge") ? "PI" : "Co-PI"})
              </span>
              {/* <div style={{ marginTop: "1rem" }}>
                <span className="professorsDetailsPage-main__pi__textContainer__nameAndDesignationContainer__designation">
                  {professor.designation}
                </span>
              </div> */}
            </div>
            <div className="professorsDetailsPage-main__pi__textContainer__commonText">
              {professor.college}
            </div>
            <div className="professorsDetailsPage-main__pi__textContainer__commonText">
              {professor.department}
            </div>
            <div className="professorsDetailsPage-main__pi__textContainer__description">
              <span className="professorsDetailsPage-main__pi__textContainer__description__label">
                About:{" "}
              </span>
              {professor.description}
            </div>
            <Button
              variant="contained"
              color="primary"
              className="view-publications-btn"
              onClick={() => handleOpenModal(professor)}
            >
              View Publications
            </Button>
          </div>
        </div>
      </div>

      {/* Members Section */}
      {professor?.students?.map((student, i) => (
        <div
          key={i}
          className={`professorsDetailsPage-main__card ${
            i % 2 === 0 ? "light" : "dark"
          }`}
          style={{ position: "relative" }}
        >
          <div className="professorsDetailsPage-main__card__imageContainer">
            <img
              alt={student.name}
              src={student?.img ? student?.img : defaultProfile}
              className="professorsDetailsPage-main__card__imageContainer__image"
            />
          </div>
          <div className="professorsDetailsPage-main__card__textContainer">
            <div className="professorsDetailsPage-main__card__textContainer__nameAndQualificationContainer">
              <span className="professorsDetailsPage-main__card__textContainer__nameAndQualificationContainer__name">
                {student.name}
              </span>
              <span className="professorsDetailsPage-main__card__textContainer__nameAndQualificationContainer__qualification">
                {student.qualification}
              </span>
            </div>
            <div className="professorsDetailsPage-main__card__textContainer__description">
              {student.description}
            </div>

            {/* View Publications Button */}
            <Button
              variant="contained"
              color="primary"
              className="view-publications-btn"
              onClick={() => handleOpenModal(student)}
            >
              View Publications
            </Button>
          </div>
        </div>
      ))}

      {/* Publications Modal */}
      <PublicationsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        person={selectedPerson}
      />
    </div>
  );
};

export default ProfessorsDetailsPage;
