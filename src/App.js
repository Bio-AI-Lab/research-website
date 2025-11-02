import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NewsPage from "./components/NewsPage";
import ProjectDetails from "./components/ProjectDetails";
import Members from "./components/Members";
import Meetings from "./components/Meetings";
import Tools from "./components/Tools";
import Datasets from "./components/Datasets";
import Contact from "./components/Contact";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import "./styles/App.scss";
import NewsPublicationsSoftware from "./components/NewsPage";
import ProfessorDetailsPage from "./components/ProfessorsDetailsPage";
import ProfessorsPage from "./components/ProfessorsPage";
import bg from "./assets/images/bg3.jpeg";
import PIImage from "./assets/images/PI_Image.jpg";
import PIImage2 from "./assets/images/PIImage2.jpeg";
import PIImage3 from "./assets/images/PIImage3.png";
import PIImage4 from "./assets/images/PIImage4.jpeg";
import PIImage5 from "./assets/images/PIImage5.jpeg";
import defaultProfile from "./assets/images/defaultProfile.png";
import richard from "./assets/images/richard.jpg";
import kushalB from "./assets/images/kushalB.jpg";
import kushal from "./assets/images/kalyan.jpg";
import sam from "./assets/images/sam.jpeg";
import alexis from "./assets/images/alexis.jpg";
import nicholas from "./assets/images/nicholas.jpg";
import jordan from "./assets/images/jordan.jpg";
import justin from "./assets/images/justin.jpeg";
import UndergradStudents from "./components/UndergradStudents";
import Workshop from "./components/Workshop";
import WorkshopPage from "./components/WorkshopPage";
import WorkshopPage2 from "./components/WorkshopPage2";
import Trainees from "./components/Trainees";
import Login from "./components/Login";
import credList from "./assets/Users/Credentials.json";
import UndergradStudentsProject from "./components/UndergradStudentsProject";

const professorsData = [
  {
    id: 1,
    name: "Dr. Letu Qingge",
    designation: "Assistant Professor",
    department: "Department of Computer Science",
    college: "North Carolina A&T State University",
    education: `Ph.D.
      Computer Science / Montana State University
      M.S.
      Management Science and Engineering / Beijing University of Chemical Technology
      B.S.
      Information and Computer Science / Inner Mongolia University
      `,
    description: `Dr. Letu Qingge, Ph.D, is an assistant professor in the Department of 
                  Computer Science at North Carolina A&T State University, NC. He received his Ph.D 
                  degree in Computer Science from Montana State University, MT, USA. His research 
                  interests include algorithms, machine learning, deep learning, cloud computing, 
                  combinatorial optimization, bioinformatics and computational biology, computer vision, 
                  transportation network, and neural network control. His research has been funded by NSF and NIH.`,
    img: PIImage,
    publications: [
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",
            profileImage: defaultProfile,
          },
        ],
      },
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",
            profileImage: defaultProfile,
          },
        ],
      },
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",
            profileImage: defaultProfile,
          },
        ],
      },
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",
            profileImage: defaultProfile,
          },
        ],
      },
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",
            profileImage: defaultProfile,
          },
        ],
      },
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",
            profileImage: defaultProfile,
          },
        ],
      },
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",
            profileImage: defaultProfile,
          },
        ],
      },
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",
            profileImage: defaultProfile,
          },
        ],
      },
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",
            profileImage: defaultProfile,
          },
        ],
      },
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",

            profileImage: defaultProfile,
          },
        ],
      },
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",
            profileImage: defaultProfile,
          },
        ],
      },
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",
            profileImage: defaultProfile,
          },
        ],
      },
    ],
    students: [
      {
        name: "Mr. Richard Kofi Annan",
        qualification: "PhD student at NCAT",
        description: `His research focuses on using deep learning techniques for genetic predictions. 
        He is also a certified Project Management Professional (PMP) with experience in end-to-end management of
         projects both in academia and industry. He recently pushlished the papers at ISBRA'23, BIBE'23 and BICOB'24.`,
        img: richard,
        publications: [
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",

                profileImage: defaultProfile,
              },
            ],
          },
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
        ],
      },
      {
        name: "Mr. Kushal Kalyan",
        qualification: "Master student at NCAT",
        description: `He is currently a Master student at NCAT, starting from Fall 2023. He has 4.5 years of experience 
        as a skilled front-end web develper. He is passionate about full stack development, machine learng and deep learning`,
        img: kushal,
        publications: [
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
        ],
      },
      {
        name: "Mr. Kushal Badal",
        qualification: "Master student at NCAT",
        description: `He is currently a Master student with a strong academic record and a passion for AI and data science. 
        He gained practical experience in data analysis, machine learning, and research, complemented by leadership roles and a 
        commitment to continuous learning. His goal is to leverage his technical skills and enthusiasm for problem-solving to make 
        meaningful contributions in the field of AI.`,
        img: kushalB,
        publications: [
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
        ],
      },
      {
        name: "Mr. Maxwell Sam",
        qualification: "Master student at NCAT",
        description: `He is a dedicated backend engineer with over three years of experience in the dynamic realm of software development. 
        His focus has been on crafting robust backend solutions, ensuring seamless and secure functionality for a wide range of applications. 
        Now, He is pursuing his master's in Computer Science with a specialized focus on Artificial Intelligence and Deep Learning.`,
        img: sam,
        publications: [
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
        ],
      },
      {
        name: "Ms. Alexis Cathcart",
        qualification: "MS student at NCAT",
        description: `Alexis Cathcart is an incoming Master's student from Charlotte, NC. She will complete her Bachelor's in Computer Science 
        at North Carolina A&T State University in May 2023. Her research interests include artificial intelligence, machine learning, data science, and bioinformatics.`,
        img: alexis,
        publications: [
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
        ],
      },
      {
        name: "Mr. Nicholas Rader",
        qualification: "MS student at NCAT",
        description: `Nick Rader is a full-time graduate student at North Carolina A&T. He is also a part-time search ad evaluator at Appen. 
        He is an aspiring Application/Web Developer in Kernersville, NC. He is passionate about UI/UX design, graphics, and creating responsive 
        and interactive apps for all users to enjoy worldwide! He graduated in 2022 from High Point University with a bachelor of science in computer science.`,
        img: nicholas,
        publications: [
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
        ],
      },
      {
        name: "Mr. Jordan Sturtz",
        qualification: "MS student at NCAT, Graduated in May 2023",
        description: `Thesis: Deep Learning Approaches for the Protein Scaffold Filling Problem.`,
        img: jordan,
        publications: [
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
        ],
      },

      {
        name: "Mr. Justin Noland",
        qualification: "MS student at NCAT, graduated in July 2023",
        description: `Thesis: A Privacy Preserving Convolutional Neural Network for Phenotype Prediction.`,
        img: justin,
        publications: [
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Dr. Salil S Desai",
    designation: "University Distinguished Professor/Director of CEPDAM",
    department:
      "Center of Excellence in Product Design and Advanced Manufacturing (CEPDAM)",
    college: "North Carolina A&T State University",
    education: `Ph.D.
    Industrial Engineering / University of Pittsburgh
    M.S.
    Industrial Engineering / University of Pittsburgh
    B.S.
    Mechanical Engineering / Veermata Jijabai Technological Institute
    Other
    Mechanical Engineering / K. J. Somaiya Polytechnic
      `,
    description: `Desai investigates hybrid nano/micro manufacturing combining direct-write fabrication and nanoimprint 
    lithography with applications in the areas of flexible electronics, energy devices and regenerative tissue engineering. 
    Desai’s portfolio consists of a significant number (over 100) of patents/invention disclosures, publications, book chapters, 
    and conference proceedings. His R&D and infrastructure funding exceeds $7.5 million from NIH, NSF, DoD, DoE, and industry. 
    Desai is recipient of several prestigious awards including the Presidential Award for Excellence in Science, Mathematics and 
    Engineering Mentoring (White House), NSF CAREER Award, UNC Board of Governors Award, Outstanding Engineer Awards from ORNL, DoD, SME, ASME, IIE, and ASEE.`,
    img: PIImage2,
    publications: [
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",
            profileImage: defaultProfile,
          },
        ],
      },
    ],
    students: [
      {
        id: 1,
        name: "Bader Alwomi Aljabali",
        thesis: "AI in Education Systems",
        profileImage: defaultProfile,

        publications: [
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Joseph Shelton",
        thesis: "Natural Language Processing in AI",
        profileImage: defaultProfile,

        publications: [
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
        ],
      },
    ],
    publications: [
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,

            publications: [
              {
                type: "Article",
                title:
                  "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
                authors: [
                  {
                    id: 1,
                    name: "Bader Alwomi Aljabali",
                    thesis: "AI in Education Systems",
                    profileImage: defaultProfile,
                  },
                  {
                    id: 2,
                    name: "Joseph Shelton",
                    thesis: "Natural Language Processing in AI",
                    profileImage: defaultProfile,
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",
            profileImage: defaultProfile,

            publications: [
              {
                type: "Article",
                title:
                  "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
                authors: [
                  {
                    id: 1,
                    name: "Bader Alwomi Aljabali",
                    thesis: "AI in Education Systems",
                    profileImage: defaultProfile,
                  },
                  {
                    id: 2,
                    name: "Joseph Shelton",
                    thesis: "Natural Language Processing in AI",
                    profileImage: defaultProfile,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Dr. Robert H Newman",
    designation: "Nathan F. Simms Distinguished Professor",
    department: "Biology",
    college: "North Carolina A&T State University",
    education: `Ph.D.
      Biochemistry and Molecular Biology / Johns Hopkins University
      B.A.
      Biology and Biochemistry / McDaniel College`,
    description: `We are interested in understanding the regulation of phosphorylation-dependent signaling pathways.
     Research is organized around two central questions: 1) which cellular proteins are phosphorylated by a given kinase and 
     2) how are specific kinases and phosphatases—and ultimately the signaling networks of which they are a part—regulated within 
     the cellular environment? To answer these questions, we take a two-pronged approach based on 1) systems-level analysis of 
     kinase-substrate relationships and the biochemical factors underlying kinase substrate selection and 2) the development 
     and application of genetically-targetable FRET-based biosensors.`,
    img: PIImage4,
    publications: [
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",
            profileImage: defaultProfile,
          },
        ],
      },
    ],
    students: [
      {
        id: 1,
        name: "Charlie Brown",
        thesis: "AI in Education Systems",
        profileImage: defaultProfile,

        publications: [
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "David Turner",
        thesis: "Natural Language Processing in AI",
        profileImage: defaultProfile,

        publications: [
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Dr. Madhuri Siddula",
    designation: "Assistant Professor",
    department: "Computer Science",
    college: "North Carolina A&T State University",
    education: `Ph.D.
      Computer Science / Georgia State University
      M.S.
      Technology / Indraprastha Institute of Information Technology
      B.S.
      Computer Science / Osmania University`,
    description: ``,
    img: PIImage3,
    publications: [
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",
            profileImage: defaultProfile,
          },
        ],
      },
    ],
    students: [
      {
        id: 1,
        name: "Charlie Brown",
        thesis: "AI in Education Systems",
        profileImage: defaultProfile,

        publications: [
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "David Turner",
        thesis: "Natural Language Processing in AI",
        profileImage: defaultProfile,

        publications: [
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Dr. Kristen L Rhinehardt",
    designation: "Assistant Professor",
    department: "Computational Science & Engineering",
    college: "North Carolina A&T State University",
    education: `Ph.D.
      Nanoengineering / North Carolina Agricultural & Technical State University
      M.S.
      Nanoengineering / North Carolina Agricultural & Technical State University
      B.S.
      Biological Engineering / Cornell University`,
    description: `Molecular Dynamics, Molecular Modeling, Bioinformatics, Nanomodeling, Computational Biology, Computational Chemistry`,
    img: PIImage5,
    publications: [
      {
        type: "Article",
        title:
          "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
        authors: [
          {
            id: 1,
            name: "Bader Alwomi Aljabali",
            thesis: "AI in Education Systems",
            profileImage: defaultProfile,
          },
          {
            id: 2,
            name: "Joseph Shelton",
            thesis: "Natural Language Processing in AI",
            profileImage: defaultProfile,
          },
        ],
      },
    ],
    students: [
      {
        id: 1,
        name: "Charlie Brown",
        thesis: "AI in Education Systems",
        profileImage: defaultProfile,

        publications: [
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "David Turner",
        thesis: "Natural Language Processing in AI",
        profileImage: defaultProfile,

        publications: [
          {
            type: "Article",
            title:
              "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0",
            authors: [
              {
                id: 1,
                name: "Bader Alwomi Aljabali",
                thesis: "AI in Education Systems",
                profileImage: defaultProfile,
              },
              {
                id: 2,
                name: "Joseph Shelton",
                thesis: "Natural Language Processing in AI",
                profileImage: defaultProfile,
              },
            ],
          },
        ],
      },
    ],
  },
];

const undergradStudList = {
  teams: [
    // {
    //   team: "Team 1",
    //   project: "Project from COMP 495",
    //   faculty_advisors: [],
    //   students: [
    //     {
    //       first_name: "Reid",
    //       last_name: "Shunwel",
    //       role: null,
    //     },
    //     {
    //       first_name: "Udemadu",
    //       last_name: "Obieze",
    //       role: "Team Leader",
    //     },
    //     {
    //       first_name: "Brockington",
    //       last_name: "Ja'Corey",
    //       role: null,
    //     },
    //   ],
    //   AI_focus: ["NA"],
    // },
    {
      team: "Team 2",
      project: "Private AI",
      faculty_advisors: [{ img: PIImage3, name: "Dr. Madhuri Siddula" }],
      students: [
        {
          first_name: "Smith",
          last_name: "Evan",
          role: null,
        },
        {
          first_name: "Holland",
          last_name: "Laila",
          role: null,
        },
        {
          first_name: "Cross",
          last_name: "Jeremy",
          role: "Team Leader",
        },
      ],
      AI_focus: ["Private AI"],
    },
    {
      team: "Team 3",
      project: "ViT",
      faculty_advisors: [
        { img: PIImage4, name: "Dr. Robert H Newman" },
        { img: PIImage, name: "Dr. Letu Qingge" },
        { img: richard, name: "Richard Annan" },
      ],
      students: [
        {
          first_name: "Green",
          last_name: "Justin",
          role: "Team Leader",
        },
        {
          first_name: "Revies",
          last_name: "Willie",
          role: null,
        },
        {
          first_name: "Jeffries",
          last_name: "Jordan",
          role: null,
        },
      ],
      AI_focus: ["CNN", "VIT", "Private AI"],
    },
    {
      team: "Team 4",
      project: "GAN",
      faculty_advisors: [
        { img: PIImage, name: "Dr. Letu Qingge" },
        { img: alexis, name: "Alexis Cathcart" },
      ],
      students: [
        {
          first_name: "Arellano Romero",
          last_name: "Brenda",
          role: null,
        },
        {
          first_name: "Faulkner",
          last_name: "Everett",
          role: null,
        },
        {
          first_name: "Marshall",
          last_name: "Kyeesha",
          role: "Team Leader",
        },
        {
          first_name: "Jones",
          last_name: "Mackenzie",
          role: null,
        },
      ],
      AI_focus: ["GAN"],
    },
    {
      team: "Team 5",
      project: "PSF Transformer",
      faculty_advisors: [
        { img: PIImage, name: "Dr. Letu Qingge" },
        { img: kushalB, name: "Kushal Badal" },
      ],
      students: [
        {
          first_name: "Okoro",
          last_name: "Chidi",
          role: null,
        },
        {
          first_name: "Khamvanthong",
          last_name: "Hannah",
          role: null,
        },
        {
          first_name: "Velazco",
          last_name: "Daniel",
          role: null,
        },
        {
          first_name: "Pierce",
          last_name: "Symphony",
          role: "Team Leader",
        },
      ],
      AI_focus: ["Protein transformer"],
    },
    {
      team: "Team 6",
      project: "CNN",
      faculty_advisors: [
        { img: PIImage2, name: "Dr. Salil Desai" },
        { img: PIImage, name: "Dr. Letu Qingge" },
        { img: richard, name: "Richard Annan" },
      ],
      students: [
        {
          first_name: "Powell",
          last_name: "Jalen",
          role: null,
        },
        {
          first_name: "Agboglo",
          last_name: "Matthew",
          role: "Team Leader",
        },
        {
          first_name: "Ruff",
          last_name: "Jaden",
          role: null,
        },
      ],
      AI_focus: ["CNN", "CapsN", "ViT", "Private AI"],
    },
    {
      team: "Team 7",
      project: "SHAP",
      faculty_advisors: [
        { img: PIImage5, name: "Dr. Kristen Rhinehardt" },
        { img: PIImage, name: "Dr. Letu Qingge" },
        { img: sam, name: "Maxwell Sam" },
      ],
      students: [
        {
          first_name: "Horton",
          last_name: "Jeremiah",
          role: null,
        },
        {
          first_name: "Mitchell",
          last_name: "Caleb",
          role: "Team Leader",
        },
        {
          first_name: "Johnson",
          last_name: "Sidney",
          role: null,
        },
      ],
      AI_focus: ["SHAP"],
    },
  ],
};

function App() {
  // const location = useLocation();
  // const isActive = (path) => location.pathname === path;
  const loginCredStore = JSON.parse(sessionStorage.getItem("cred"));
  const [isValidUser, setIsValidUser] = useState(null);
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError(null);
    setLoginCred({ ...loginCred, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("cred", JSON.stringify(loginCred));
    const isValidLogin =
      credList.filter((item) => {
        return (
          item?.username?.toLowerCase() === loginCred?.email?.toLowerCase() &&
          item?.password === loginCred?.password
        );
      })?.length > 0
        ? true
        : false;
    !isValidLogin &&
      setError(
        "An error occurred. Please check the entered username and password."
      );
    setIsValidUser(isValidLogin);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("cred");
    setLoginCred({
      email: "",
      password: "",
    });
    setIsValidUser(null);
  };

  useEffect(() => {
    const isValidLogin =
      credList.filter((item) => {
        return (
          item?.username?.toLowerCase() ===
            loginCredStore?.email?.toLowerCase() &&
          item?.password === loginCredStore?.password
        );
      })?.length > 0
        ? true
        : false;
    setIsValidUser(isValidLogin);
  }, [JSON.parse(sessionStorage.getItem("cred"))]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelectProfessor = (id) => {
    const professor = professorsData.find((prof) => prof.id === id);
    setSelectedProfessor(professor);
  };

  const handleBackToProfessors = () => {
    setSelectedProfessor(null);
  };

  return (
    <Router>
      <div className="App">
        {/* {isValidUser === false ? (
          <div
            style={{
              position: "relative",
              display: "flex",
              flex: 1,
              backgroundImage: `url(${bg})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              justifyContent: "flex-end",
            }}
          >
            <Login
              loginCred={loginCred}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              error={error}
            />
          </div>
        ) : (
          isValidUser === true && ( */}
        <>
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            setSelectedProfessor={setSelectedProfessor}
            handleLogout={handleLogout}
          />
          <div
            className={`content ${
              isSidebarOpen ? "sidebar-open" : "sidebar-closed"
            }`}
          >
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/news" element={<NewsPublicationsSoftware />} />
              {/* <Route path="/projects/:id" element={<ProjectDetails />} /> */}
              <Route
                path="/members"
                element={
                  selectedProfessor ? (
                    <ProfessorDetailsPage
                      professor={selectedProfessor}
                      onBack={handleBackToProfessors}
                    />
                  ) : (
                    <ProfessorsPage
                      professors={professorsData}
                      onSelectProfessor={handleSelectProfessor}
                    />
                  )
                }
              />
              <Route
                path="/undergrad-students"
                element={<UndergradStudents teams={undergradStudList.teams} />}
              />
              {/* <Route path="/members" element={<Members />} /> */}
              <Route path="/meetings" element={<Meetings />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/undergradstudentproject" element={<UndergradStudentsProject />} />
              {/* <Route path="/workshop" element={<Workshop />} /> */}
              <Route path="/workshop" element={<WorkshopPage />} />
              <Route path="/workshop2" element={<WorkshopPage2 />} />

              {/* <Route path="/datasets" element={<Datasets />} /> */}
              <Route path="/trainees" element={<Trainees />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/about" element={<About />} /> */}
            </Routes>
          </div>
        </>
        {/* )
        )} */}
      </div>
    </Router>
  );
}

export default App;
