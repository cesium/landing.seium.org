import React from "react";
import { Button } from "@material-ui/core";

const Registration = () => (
  <div className="registration-container">
    <Button
      href={"https://codingcompetitions.withgoogle.com/hashcode/"}
      color="primary"
      className="registration"
    >
      Hash Code
    </Button>
    <Button
      href={"http://seium21.eventbrite.pt/"}
      color="primary"
      className="registration"
    >
      Inscrições
    </Button>
  </div>
);

export default Registration;
