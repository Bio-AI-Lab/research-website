import React, { useEffect, useState } from "react";
import "./ProfessorsPage.scss";

const ProfessorsPage = ({ professors, onSelectProfessor }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Delay for subtle animations
  }, []);

  return (
    <div className="professors-page">
      {/* <h1 className="page-title">Our Professors</h1> */}
      <h1 className="page-title">Collaborators</h1>
      <div className="professor-list">
        {professors.map((professor, index) => (
          <div
            key={professor.id}
            className={`professor-card ${
              isLoaded ? `animate-${index % 4}` : "hidden"
            }`}
            onClick={() => onSelectProfessor(professor.id)}
          >
            <img
              src={professor.img}
              alt={professor.name}
              className="professor-image"
            />
            <div className="professor-info">
              <h2>{professor.name}</h2>
              <h2>
                <span>(</span>
                {index === 0 ? "PI" : "Co-PI"}
                <span>)</span>
              </h2>
              {/* <p>{professor.designation}</p> */}

              {/* <p style={{ marginTop: "10px" }}>{professor.department}</p> */}
            </div>
            {/* <p>{index === 0 ? "PI" : "Co-PI"}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessorsPage;
