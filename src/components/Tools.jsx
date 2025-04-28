// import React from "react";

// const Tools = () => {
//   const tools = ["Tool 1", "Tool 2", "Tool 3"];

//   return (
//     <div className="tools">
//       <h1>Developed Tools</h1>
//       <ul>
//         {tools.map((tool, index) => (
//           <li key={index}>{tool}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Tools;

import React from "react";
import "./Tools.scss";

const tools = [
  {
    title: "Tool 1",
    description:
      "This tool is developed for optimizing machine learning models and improving training efficiency.",
  },
  {
    title: "Tool 2",
    description:
      "This tool helps visualize data in real-time and perform complex computations seamlessly.",
  },
  {
    title: "Tool 3",
    description:
      "This tool automates the workflow for handling large datasets, providing easy access to the data.",
  },
];

const Tools = () => {
  return (
    <div className="tools">
      <div className="tools__title">Developed Tools</div>
      <div className="tools__list">
        {tools.map((tool, index) => (
          <div key={index} className="tools__card">
            <div className="tools__card__title">{tool.title}</div>
            <p className="tools__card__description">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
