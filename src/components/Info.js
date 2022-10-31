import React from "react";
import Animation from "./Animation.js";
import SocialLinks from "./SocialLinks";
import { Box } from "@material-ui/core";

const Info = () => (
  <>
    <Box textAlign="center">
      <Animation />
      <h1 className="title">SEMANA DA ENGENHARIA INFORMÁTICA</h1>
      <h2 className="date">14 A 17 DE FEVEREIRO DE 2023</h2>
      <SocialLinks />
      <a href={"https://2022.seium.org/"} className="edicao">
        EDIÇÃO ANTERIOR
      </a>
      <p>
        <a
          href={"mailto:relacoes.externas@seium.org"}
          className="underline mailSponser"
        >
          SEJA PATROCINADOR
        </a>
      </p>
    </Box>
  </>
);

export default Info;
