import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function SocialLinks() {
  return (
    <div className="mt-16">
      <a href="https://www.facebook.com/SEI.UMinho" className="px-4">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.instagram.com/sei.uminho" className="px-4">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="mailto:geral@seium.org" className="px-4">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    </div>
  );
}

export default SocialLinks;
