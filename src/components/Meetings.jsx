// import React from "react";

// const Meetings = () => {
//   const meetings = [
//     { date: "2024-08-01", topic: "Project Kickoff" },
//     { date: "2024-08-15", topic: "Mid-Project Review" },
//   ];

//   return (
//     <div className="meetings">
//       <h1>Meetings</h1>
//       <ul>
//         {meetings.map((meeting, index) => (
//           <li key={index}>
//             <strong>{meeting.date}</strong> - {meeting.topic}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Meetings;

import React from "react";
import "./Meetings.scss";

const meetings = [
  {
    title: "Weekly Status Meetings",
    date: "Every Friday's",
    time: "11:00 AM - 12:00 PM",
    description: "Weekly meeting to discuss project objectives and team roles.",
  },
  // {
  //   title: "Biweekly Status Update",
  //   date: "February 1, 2024",
  //   time: "2:00 PM - 3:00 PM",
  //   description:
  //     "Regular biweekly status update to review progress and challenges.",
  // },
  // {
  //   title: "Midterm Review",
  //   date: "March 10, 2024",
  //   time: "1:00 PM - 2:30 PM",
  //   description:
  //     "Midterm project review meeting to assess milestones and next steps.",
  // },
  // {
  //   title: "Final Presentation",
  //   date: "June 20, 2024",
  //   time: "9:00 AM - 11:00 AM",
  //   description: "Final presentation of the project outcomes and deliverables.",
  // },
];

const Meetings = () => {
  return (
    <div className="meetings">
      <div className="meetings__title">Meetings</div>
      <div className="meetings__list">
        {meetings.map((meeting, index) => (
          <div key={index} className="meetings__card">
            <div className="meetings__card__title">{meeting.title}</div>
            <p className="meetings__card__date-time">
              {meeting.date} | {meeting.time}
            </p>
            <p className="meetings__card__description">{meeting.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meetings;
