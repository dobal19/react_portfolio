import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid" style={{backgroundColor:"black"}}>
          <Cell col={12}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1 style={{color:"#e1275f"}} >Full Stack Web Developer</h1>

            <hr/>

          <p style={{color:"green"}}>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/sachin-dobal-2854a0111/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/dobal19" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* { Freecodecamp } */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a> 

          {/* Youtube */} */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a> 

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
