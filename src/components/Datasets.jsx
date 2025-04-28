import React from "react";
import "./Datasets.scss";

const datasets = [
  {
    title: "COVID-19 image data collection",
    description: `To build a public open dataset of chest X-ray and CT images of patients which are positive or suspected of COVID-19 or other viral and bacterial pneumonias (MERS, SARS, and ARDS.). Data will be collected from public sources as well as through indirect collection from hospitals and physicians. All images and data will be released publicly in this GitHub repo.
This project is approved by the University of Montreal's Ethics Committee #CERSES-20-058-D`,
    link: "https://github.com/ieee8023/covid-chestxray-dataset",
  },
  {
    title: "SARS-CoV-2 CT-scan dataset",
    description:
      "A large dataset of real patients CT scans for SARS-CoV-2 identification",
    link: "https://www.kaggle.com/datasets/plameneduardo/sarscov2-ctscan-dataset",
  },
  {
    title: "Tuberculosis (TB) Chest X-ray Database",
    description:
      "A team of researchers from Qatar University, Doha, Qatar, and the University of Dhaka, Bangladesh along with their collaborators from Malaysia in collaboration with medical doctors from Hamad Medical Corporation and Bangladesh have created a database of chest X-ray images for Tuberculosis (TB) positive cases along with Normal images. In our current release, there are 3500 TB images, and 3500 normal images.",
    link: "https://ieee-dataport.org/documents/tuberculosis-tb-chest-x-ray-database",
  },
];

const Datasets = () => {
  return (
    <div className="datasets">
      <div className="datasets__title">Available Datasets</div>
      <div className="datasets__list">
        {datasets.map((dataset, index) => (
          <div key={index} className="datasets__card">
            <div className="datasets__card__title">{dataset.title}</div>
            <p className="datasets__card__description">{dataset.description}</p>
            <a
              target="_blank"
              href={dataset.link}
              className="datasets__card__link"
            >
              Access Dataset
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Datasets;
