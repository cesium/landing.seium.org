import React from 'react';
import { Grid, Hidden, withWidth } from '@material-ui/core';
import Background from '../images/Background.png';

import Mascote from './Mascote';

import Info from './Info';

const Main = (props) => { 
  const { width } = props;
  return (
    <Grid container style={props} justify="center" alignItems="center">  
      {width === "sm" || width === "xs" ? (
        <>
          <Grid item xs={12}>
            <Info />
          </Grid>
          <Grid item xs={12}>    
            <Mascote width={width}/>
          </Grid>
        </>
      ) : (
        <>
          <Grid item md={2}>    
            <Mascote width={width}/>
          </Grid>
          <Grid item md={8}>
            <Info />
          </Grid>
          <Grid container item style={{height: '100vh'}} md={2} justify="flex-end" alignItems="flex-end">
            <img className="background" src={Background} alt="Background" />
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default withWidth()(Main);