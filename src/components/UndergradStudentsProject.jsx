import React, { useEffect, useState } from "react";
import "./UndergradStudentsProject.scss";

const UndergradStudentsProject = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("Component mounted");
    setTimeout(() => {
      setIsLoaded(true);
      console.log("Animation loaded");
    }, 100);
  }, []);

  const projects = [
    {
      id: 1,
      projectName: "AGGIEREVIEW",
      facultyAdvisor: ["Dr. Mahmoud Abdelsalam"],
      teamMembers: [
        "Abdoul Zeba",
        "Abdullah Zubair",
        "Jason Momanyi",
        "Robert Reid",
      ],
    },
    {
      id: 2,
      projectName: "VR game that simulates the real-life effects of alcohol",
      facultyAdvisor: [""],
      teamMembers: [
        "Justin Nguyen",
        "Melvin Marin Avelino",
        "Jaylan Hunter",
        "Kristopher Poston",
        "Cameron Allen",
      ],
    },
    {
      id: 3,
      projectName: "THE RIGHT BEAT",
      facultyAdvisor: [""],
      teamMembers: ["Nandi Hawkins", "Jaidan Sullivan", "Jonathan Little"],
    },
    {
      id: 4,
      projectName: "MY CNN",
      facultyAdvisor: [""],
      teamMembers: [
        "Bryce Dinkins",
        "Sequoia Quinn",
        "Sanai McClary",
        "Kelvin Rattley",
      ],
    },
    {
      id: 5,
      projectName: "EXPLAINABLE AI FOR PHENOTYPE PREDICTION",
      facultyAdvisor: [""],
      teamMembers: ["Kori Jackson", "Micah Hill", "Jalen Angus", "Cameron Tatum"],
    },
  ];

  console.log("Projects:", projects);
  console.log("IsLoaded:", isLoaded);

  return (
    <div className="students-page">
      <h1 className="page-title">Undergraduate Student Projects</h1>
      <div className="team-list">
        {projects.map((project, index) => {
          console.log("Rendering project:", project.projectName);
          return (
            <div
              key={project.id}
              className={`team-card ${
                isLoaded ? `animate-${index % 4}` : "hidden"
              }`}
            >
              <div className="team-info">
                <h2>{project.projectName}</h2>

                {project.facultyAdvisor &&
                  project.facultyAdvisor.length > 0 &&
                  project.facultyAdvisor[0].trim() !== "" && (
                    <div className="faculty-section">
                      <h3>Faculty Advisor:</h3>
                      <ul className="faculty-list">
                        {project.facultyAdvisor.map((advisor, i) => (
                          <li key={i} className="faculty-name">
                            {advisor}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                <h3>Team Members:</h3>
                <ul className="student-list">
                  {project.teamMembers.map((member, i) => (
                    <li key={i} className="student-item">
                      <div className="student-profile">
                        <div className="student-details">
                          <span>{member}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UndergradStudentsProject;
