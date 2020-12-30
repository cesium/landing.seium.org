import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const SocialLinks = () => (
  <div className="social-container">
    <a
      href={`https://www.facebook.com/SEI.UMinho`}
      className="facebook social-link"
    >
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a
      href={`https://www.instagram.com/sei.uminho`}
      className="instagram social-link"
    >
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <a href={"mailto:geral@seium.org"} className="mail social-link">
      <FontAwesomeIcon icon={faEnvelope} size="2x" />
    </a>
  </div>
);

export default SocialLinks;
