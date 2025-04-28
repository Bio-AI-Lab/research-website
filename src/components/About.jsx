import React from "react";
import "./About.scss";

const AboutNSFPage = () => {
  return (
    <div className="about-nsf-page">
      <div className="about-nsf-page__content">
        <h1 className="about-nsf-page__title">
          About the NSF Research Projects
        </h1>
        <p className="about-nsf-page__text">
          The U.S. National Science Foundation is an independent federal agency
          that supports science and engineering in all 50 states and U.S.
          territories.
        </p>
        <p className="about-nsf-page__text">
          NSF was established in 1950 by Congress to:
        </p>
        <ul className="about-nsf-page__list">
          <li>Promote the progress of science.</li>
          <li>Advance the national health, prosperity, and welfare.</li>
          <li>Secure the national defense.</li>
        </ul>
        <p className="about-nsf-page__text">
          We fulfill our mission chiefly by making grants. Our investments
          account for about 25% of federal support to America's colleges and
          universities for basic research: research driven by curiosity and
          discovery. We also support solutions-oriented research with the
          potential to produce advancements for the American people.
        </p>
      </div>
    </div>
  );
};

export default AboutNSFPage;
