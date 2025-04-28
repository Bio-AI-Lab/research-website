// import React from "react";
// import { Modal, Box, Typography, IconButton, Avatar } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import "./PublicationsModal.scss";

// const PublicationsModal = ({ isOpen, onClose, person }) => {
//   if (!isOpen) return null;

//   return (
//     <Modal
//       open={isOpen}
//       onClose={onClose}
//       aria-labelledby="modal-title"
//       slotProps={{
//         backdrop: {
//           sx: {
//             backdropFilter: "blur(8px)", // Apply the blur effect
//             backgroundColor: "rgba(0, 0, 0, 0.1)", // Semi-transparent backdrop
//           },
//         },
//       }}
//       className="publications-modal"
//     >
//       <Box className="modal-box" sx={modalStyle}>
//         <IconButton className="close-btn" onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//         <Typography id="modal-title" variant="h4" component="h2">
//           {person.name}'s Publications
//         </Typography>
//         <Box className="publications-list" sx={modalContentStyle}>
//           <ul>
//             {person.publications.map((publication, index) => (
//               <li key={index} className="publication-item">
//                 <Typography variant="h6">{publication.title}</Typography>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     marginTop: "10px",
//                   }}
//                 >
//                   <div className="authors-list">
//                     <Typography variant="subtitle1" fontWeight="bold">
//                       Authors:
//                     </Typography>
//                     <Box sx={{ display: "flex", flexWrap: "wrap" }}>
//                       {publication.authors.map((author, index) => (
//                         <Box
//                           key={index}
//                           sx={{ display: "flex", alignItems: "center", mr: 2 }}
//                         >
//                           <Avatar
//                             src={author.profileImage || "default_avatar.png"}
//                             alt={author.name}
//                             sx={{ width: 40, height: 40, mr: 1 }}
//                           />
//                           <Typography variant="body1">{author.name}</Typography>
//                         </Box>
//                       ))}
//                     </Box>
//                   </div>
//                   <Typography variant="body2">
//                     <strong>Publication Type:</strong> {publication.type}
//                   </Typography>
//                 </Box>
//               </li>
//             ))}
//           </ul>
//         </Box>
//       </Box>
//     </Modal>
//   );
// };

// export default PublicationsModal;

// // Modal Style
// const modalStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "80%",
//   maxHeight: "90vh",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 4,
//   borderRadius: 2,
//   overflowY: "auto",
// };

// // Modal Content Scrollable Style
// const modalContentStyle = {
//   maxHeight: "60vh", // Content height limit within the modal
//   overflowY: "auto", // Enable vertical scrolling
//   padding: "10px",
// };

// import React from "react";
// import {
//   Modal,
//   Box,
//   Typography,
//   IconButton,
//   Avatar,
//   Card,
//   CardContent,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import "./PublicationsModal.scss";

// const PublicationsModal = ({ isOpen, onClose, person }) => {
//   if (!isOpen) return null;

//   return (
//     <Modal
//       open={isOpen}
//       onClose={onClose}
//       aria-labelledby="modal-title"
//       slotProps={{
//         backdrop: {
//           sx: {
//             backdropFilter: "blur(8px)", // Apply the blur effect
//             backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent backdrop
//           },
//         },
//       }}
//       className="publications-modal"
//     >
//       <Box className="modal-box" sx={modalStyle}>
//         <IconButton className="close-btn" onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//         <Typography id="modal-title" variant="h4" component="h2">
//           {person.name}'s Publications
//         </Typography>
//         <Box className="publications-list" sx={modalContentStyle}>
//           {person.publications.map((publication, index) => (
//             <Card
//               key={index}
//               className={`publication-item fade-in fade-in-delay-${index}`}
//             >
//               <CardContent>
//                 <Typography variant="h6">{publication.title}</Typography>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     marginTop: "10px",
//                   }}
//                 >
//                   <div className="authors-list">
//                     <Typography variant="subtitle1" fontWeight="bold">
//                       Authors:
//                     </Typography>
//                     <Box sx={{ display: "flex", flexWrap: "wrap" }}>
//                       {publication.authors.map((author, index) => (
//                         <Box
//                           key={index}
//                           sx={{ display: "flex", alignItems: "center", mr: 2 }}
//                         >
//                           <Avatar
//                             src={author.profileImage || "default_avatar.png"}
//                             alt={author.name}
//                             sx={{ width: 40, height: 40, mr: 1 }}
//                           />
//                           <Typography variant="body1">{author.name}</Typography>
//                         </Box>
//                       ))}
//                     </Box>
//                   </div>
//                   <Typography variant="body2">
//                     <strong>Publication Type:</strong> {publication.type}
//                   </Typography>
//                 </Box>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>
//       </Box>
//     </Modal>
//   );
// };

// export default PublicationsModal;

// // Modal Style
// const modalStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "80%",
//   maxHeight: "90vh",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 4,
//   borderRadius: 3,
//   overflowY: "auto",
// };

// // Modal Content Scrollable Style
// const modalContentStyle = {
//   maxHeight: "60vh",
//   overflowY: "auto",
//   padding: "10px",
// };

import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./PublicationsModal.scss";

const PublicationsModal = ({ isOpen, onClose, person }) => {
  if (!isOpen) return null;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(12px)", // Apply the blur effect
            backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent backdrop with more opacity
          },
        },
      }}
      className="publications-modal"
    >
      <Box className="modal-box" sx={modalStyle}>
        <IconButton className="close-btn" onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Typography id="modal-title" variant="h5" component="h2">
          {person.name}'s Publications
        </Typography>
        <Box className="publications-list" sx={modalContentStyle}>
          {person.publications.map((publication, index) => (
            <Card
              key={index}
              className={`publication-item slide-in slide-in-delay-${index}`}
            >
              <CardContent className="publication-card-content">
                <Typography variant="h6" className="publication-title">
                  {publication.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <div className="authors-list">
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      style={{ marginRight: "0.5rem", fontSize: "0.9rem" }}
                    >
                      Authors:{" "}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                      {publication.authors.map((author, index) => (
                        <Box
                          key={index}
                          sx={{ display: "flex", alignItems: "center", mr: 2 }}
                          className="author-item fade-in"
                        >
                          <Avatar
                            src={author.profileImage || "default_avatar.png"}
                            alt={author.name}
                            sx={{ width: 40, height: 40, mr: 1 }}
                            className="author-avatar"
                          />
                          <Typography variant="body1" className="author-name">
                            {author.name}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </div>
                  <Typography variant="body2" className="publication-type">
                    {/* <strong>Publication type - </strong>  */}
                    {publication.type}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default PublicationsModal;

// Modal Style
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  maxHeight: "85vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
  overflowY: "auto",
};

// Modal Content Scrollable Style
const modalContentStyle = {
  maxHeight: "70vh",
  overflowY: "auto",
  padding: "20px",
};
