import React from "react";
import { Button } from "@material-ui/core";
import registrations from "../data/registrations.json";

const Registration = () => (
  <div className="registration-container">
    {registrations.map((registration) => (
      <Button href={registration.url} color="primary" className="registration">
        {registration.label}
      </Button>
    ))}
  </div>
);

export default Registration;
