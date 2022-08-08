import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={() => true}
        onClick={() =>  window.location.href='https://drive.google.com/file/d/12ojgsP2BT2gZXDS6Cp3RgySLkPGsRfvn/view'}
        className="btn"
      >
        Download CV
      </a>
      <a href={"#contact"} className="btn btn-primary">
        Say, Hello...
      </a>
    </div>
  );
};

export default CTA;
