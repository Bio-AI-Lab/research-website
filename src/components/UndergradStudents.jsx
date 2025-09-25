// import React, { useEffect, useState } from "react";
// import "./UndergradStudents.scss";
// // import defaultProfileImage from "../assets/defaultProfile.png"; // You can use a placeholder image if actual images are unavailable
// import defaultProfileImage from "../assets/images/defaultProfile.png";
// import { Carousel } from "react-responsive-carousel";

// const UndergradStudents = ({ teams }) => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoaded(true);
//     }, 100); // Add a slight delay for animations
//   }, []);

//   return (
//     <div className="students-page">
//       <h1 className="page-title">Teams and Projects</h1>
//       <div className="team-list">
//         {teams.map((team, index) => (
//           <div
//             key={team.team}
//             className={`team-card ${
//               isLoaded ? `animate-${index % 4}` : "hidden"
//             }`}
//           >
//             {/* <div className="team-image-container"> */}
//             {/* <img
//                 src={team.team_image || defaultProfileImage} // Placeholder if no team image is provided
//                 alt={team.team}
//                 className="team-image"
//               /> */}

//             {/* </div> */}

//             <div className="team-info">
//               <h2>{team.team}</h2>
//               <p>
//                 <strong>Project:</strong> {team.project}
//               </p>
//               {/* {team.faculty_advisor && team.faculty_advisors?.length && (
//                 <p>
//                   <strong>Faculty Advisor(s):</strong> {team.faculty_advisor}
//                 </p>
//               )} */}
//               {team.AI_focus && (
//                 <p>
//                   <strong>AI Focus:</strong> {team.AI_focus.join(", ")}
//                 </p>
//               )}

//               {team.faculty_advisors?.length ? (
//                 <div className="faculty-section">
//                   <h2>Faculty Advisors</h2>

//                   {/* <div className="faculty-list"> */}
//                   <Carousel
//                     infiniteLoop
//                     autoPlay
//                     transitionTime={1500}
//                     interval={3000}
//                     showThumbs={false}
//                     showIndicators={false}
//                     showArrows={false}
//                   >
//                     {team.faculty_advisors.map((advisor, i) => (
//                       <div key={i} className="faculty-item">
//                         <img
//                           src={advisor.img || defaultProfileImage}
//                           alt={advisor.name}
//                           className="faculty-image"
//                         />
//                         <span style={{ fontWeight: "bold" }}>
//                           {advisor.name}
//                         </span>
//                       </div>
//                     ))}
//                   </Carousel>
//                   {/* </div> */}
//                 </div>
//               ) : (
//                 <></>
//               )}
//               <h3>Team Members:</h3>
//               <ul className="student-list">
//                 {team.students.map((student, i) => (
//                   <li key={i} className="student-item">
//                     <div className="student-profile">
//                       <img
//                         src={student.profile_image || defaultProfileImage} // Placeholder if no student image is provided
//                         alt={student.first_name}
//                         className="student-image"
//                       />
//                       <div className="student-details">
//                         <span>
//                           {student.first_name} {student.last_name}
//                           {student.role && ` (${student.role})`}
//                         </span>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UndergradStudents;

import React, { useEffect, useState } from "react";
import "./UndergradStudents.scss";
import defaultProfileImage from "../assets/images/defaultProfile.png";
import { Carousel } from "react-responsive-carousel";

const UndergradStudents = ({ teams }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Add a slight delay for animations
  }, []);

  return (
    <div className="students-page">
      <h1 className="page-title">Undergraduate Student AI workshop</h1>
      <div className="team-list">
        {teams.map((team, index) => (
          <div
            key={team.team}
            className={`team-card ${
              isLoaded ? `animate-${index % 4}` : "hidden"
            }`}
          >
            <div className="team-info">
              <h2>{team.team}</h2>
              <p>
                <strong>Project:</strong> {team.project}
              </p>
              {team.AI_focus && (
                <p>
                  <strong>AI Focus:</strong> {team.AI_focus.join(", ")}
                </p>
              )}

              {team.faculty_advisors?.length ? (
                <div className="faculty-section">
                  <h2>Faculty Advisors</h2>

                  <Carousel
                    infiniteLoop
                    autoPlay
                    transitionTime={1500}
                    interval={3000}
                    showThumbs={false}
                    showIndicators={false}
                    showArrows={false}
                  >
                    {team.faculty_advisors.map((advisor, i) => (
                      <div key={i} className="faculty-item">
                        <img
                          src={advisor.img || defaultProfileImage}
                          alt={advisor.name}
                          className="faculty-image"
                        />
                        <span style={{ fontWeight: "bold" }}>
                          {advisor.name}
                        </span>
                      </div>
                    ))}
                  </Carousel>
                </div>
              ) : null}

              <h3>Team Members:</h3>
              <ul className="student-list">
                {team.students.map((student, i) => (
                  <li key={i} className="student-item">
                    <div className="student-profile">
                      <img
                        src={student.profile_image || defaultProfileImage} // Placeholder if no student image is provided
                        alt={student.first_name}
                        className="student-image"
                      />
                      <div className="student-details">
                        <span>
                          {student.first_name} {student.last_name}
                          {student.role && ` (${student.role})`}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UndergradStudents;
