import React from "react";
import MascoteImg from "../images/Mascote.svg";
import MascoteHead from "../images/MascoteHead.png";
import { Box } from "@material-ui/core";

const Mascote = ({ width }) => (
  <>
    <Box textAlign="center">
      {width === "sm" || width === "xs" ? (
        <img className="mascoteHead" src={MascoteHead} alt="Mascote Logo" />
      ) : (
        <img className="mascote" src={MascoteImg} alt="Mascote Logo" />
      )}
    </Box>
  </>
);

export default Mascote;
