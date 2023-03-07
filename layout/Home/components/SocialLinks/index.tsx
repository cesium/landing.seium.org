import React from "react";
import { BsFacebook, BsInstagram, BsFillEnvelopeFill } from "react-icons/bs";

function SocialLinks() {
  return (
    <div className="mt-16 flex justify-center">
      <a href="https://www.facebook.com/SEI.UMinho" className="px-4">
        <BsFacebook size="2rem" />
      </a>
      <a href="https://www.instagram.com/sei.uminho" className="px-4">
        <BsInstagram size="2rem" />
      </a>
      <a href="mailto:geral@seium.org" className="px-4">
        <BsFillEnvelopeFill size="2rem" />
      </a>
    </div>
  );
}

export default SocialLinks;
