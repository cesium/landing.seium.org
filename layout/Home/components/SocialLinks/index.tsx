import Link from "next/link";
import React from "react";
import { BsInstagram, BsFillEnvelopeFill, BsDiscord } from "react-icons/bs";

function SocialLinks() {
  return (
    <div className="mt-8 flex justify-center">
      <Link
        href="https://www.instagram.com/sei.uminho"
        className="px-4 transition-colors  hover:text-quinary"
        target="_blank"
      >
        <BsInstagram size="1.5rem" />
      </Link>
      <Link
        href="https://discord.gg/stUtCjsnHx"
        className="px-4 transition-colors  hover:text-quinary"
        target="_blank"
      >
        <BsDiscord size="1.5rem" />
      </Link>
      <Link
        href="mailto:geral@seium.org"
        className="px-4 transition-colors hover:text-quinary"
      >
        <BsFillEnvelopeFill size="1.5rem" />
      </Link>
    </div>
  );
}

export default SocialLinks;
