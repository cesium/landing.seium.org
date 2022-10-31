import React from "react";
import { Grid, withWidth } from "@material-ui/core";
import Background from "../images/Background.png";

import Mascote from "./Mascote";

import Info from "./Info";
// import Registration from "./Registration";

const Main = (props) => {
  const { width } = props;
  return (
    <Grid container style={props} justify="center" alignItems="center">
      {width === "sm" || width === "xs" ? (
        <>
          <Grid item xs={12}>
            <Info />
          </Grid>
          {/* <Grid container item xs={12} justify="center" alignItems="center">
            <Registration />
          </Grid> */}
          <Grid item xs={12}>
            <Mascote width={width} />
          </Grid>
        </>
      ) : (
        <>
          <Grid
            container
            item
            xs={11}
            justify="flex-end"
            alignItems="flex-start"
          >
            {/* <Registration /> */}
          </Grid>
          <Grid item md={2}>
            <Mascote width={width} />
          </Grid>
          <Grid item md={8}>
            <Info />
          </Grid>
          <Grid
            container
            md={2}
            style={{ height: "100vh" }}
            justify="flex-end"
            alignItems="flex-end"
          >
            <img className="background" src={Background} alt="Background" />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default withWidth()(Main);
