import React from "react";
import ImageGallery from "react-image-gallery";
import "./AboutMe.css";

import hm1 from "../../imgs/hm1.png";
import vp1 from "../../imgs/vp1.png";
import sp1 from "../../imgs/sp1.png";
import sp2 from "../../imgs/sp2.png";

export default function AboutMe() {
  const images = [
    {
      original: { sp1 },
    },
    {
      original: { sp2 },
    },
    {
      original: { hm1 },
    },
    {
      original: { vp1 },
    },
  ];

  return (
    <>
      <div className="about_section">
        <div className="about_text">
          <h3 className="about_intro">Hello! My name is</h3>
          <h1 className="about_name">Manan Chopra.</h1>
          <h3 className="about_tagline">
            I use code to paint pictures from NGS data.
          </h3>
          <h3 className="about_tagline"> (Like these) </h3>
        </div>
      </div>
      <ImageGallery items={images} />
    </>
  );

  return (
    <>
      <div className="about_figs">
        <div className="about_sps">
          <a
            href="https://github.com/WahlinLab/Human_RGC-iN/tree/main/Figure%205/Panel%20F/out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="about_sp1" src={sp1} alt="swarmplot" />
          </a>
          <a
            href="https://github.com/WahlinLab/Human_RGC-iN/tree/main/Figure%204/Panel%20D/out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="about_sp2" src={sp2} alt="heatmap" />
          </a>
        </div>
        <div className="about_vphm">
          <a
            href="https://github.com/WahlinLab/Human_RGC-iN/tree/main/Figure%204/Panel%20D/out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="about_vp1" src={vp1} alt="heatmap" />
          </a>
        </div>
      </div>
      <div className="about_citations">
        <p>
          Jones MK, Agarwal D, Mazo KW, Chopra M, Jurlina SL, Dash N, Xu Q,
          Ogata AR, Chow M, Hill AD, Kambli NK, Xu G, Sasik R, Birmingham A,
          Fisch KM, Weinreb RN, Enke RA, Skowronska-Krawczyk D, Wahlin KJ.
          Chromatin Accessibility and Transcriptional Differences in Human Stem
          Cell-Derived Early-Stage Retinal Organoids. Cells. 2022; 11(21):3412.
          https://doi.org/10.3390/cells11213412
        </p>
      </div>
    </>
  );
}
