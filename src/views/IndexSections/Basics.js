/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useEffect} from "react";
import styled from 'styled-components';
import classnames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
import {Link} from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import {useInView} from 'react-intersection-observer';

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  CustomInput,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Basics() {


  const {ref, inView} = useInView();
  const animation1 = useAnimation();
  const animation2 = useAnimation();


  useEffect(()=>{
    console.log('use effect hook, inView = ', inView)
    if(inView){
      animation1.start({
        x:0,
        transition: {
          type: 'spring', duration:1, bounce:0.3
        }
      
      })
      animation2.start({
        x:0,
        transition: {
          type: 'spring', duration:1, bounce:0.3
        }
      })
    }
    if(!inView){
      animation1.start({x:'-100vw'})
      animation2.start({x:'100vw'})
    }

  },[inView])

  return (
    <div id="basic-elements" style={{paddingTop:'15px'}}>
      <img
        alt="..."
        className="path"
        src={require("assets/img/path1.png").default}
      />
      <Container style={{textAlign:'center'}}>
      <h1 style={{fontWeight:600}}>My Projects</h1>
      <div className='parent-animate' ref={ref}>

        <Row tag={Link} to='/MarsHill' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
          <Col md='6' xs='12' style={{padding:'0'}}>
            <img src='mars_hill_logo.png' style={{width:'100%', padding:'25px', boxSizing:'border-box', cursor:'pointer', transition:'transform 0.3s ease, border-radius 0.3s ease', borderRadius:'8px'}} onMouseEnter={(e) => {e.target.style.transform = 'scale(1.05)'; e.target.style.borderRadius = '0px';}} onMouseLeave={(e) => {e.target.style.transform = 'scale(1)'; e.target.style.borderRadius = '8px';}} />
            <p style={{fontSize:'18px'}}>Mars' Hill</p>
          </Col>
          <Col tag={Link} to='/Visie' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} md='6' xs='12' style={{padding:'0'}}>
            <img src='visie.png' style={{width:'100%', padding:'25px', boxSizing:'border-box', cursor:'pointer', transition:'transform 0.3s ease, border-radius 0.3s ease', borderRadius:'8px'}} onMouseEnter={(e) => {e.target.style.transform = 'scale(1.05)'; e.target.style.borderRadius = '0px';}} onMouseLeave={(e) => {e.target.style.transform = 'scale(1)'; e.target.style.borderRadius = '8px';}}/>
            <p style={{fontSize:'18px'}}>Visie</p>
          </Col>
          <Col tag={Link} to='/BeatShare' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} md='6' xs='12' style={{padding:'0'}}>
            <img src='beatshare.png' style={{width:'100%', padding:'25px', boxSizing:'border-box', cursor:'pointer', transition:'transform 0.3s ease, border-radius 0.3s ease', borderRadius:'8px'}} onMouseEnter={(e) => {e.target.style.transform = 'scale(1.05)'; e.target.style.borderRadius = '0px';}} onMouseLeave={(e) => {e.target.style.transform = 'scale(1)'; e.target.style.borderRadius = '8px';}}/>
            <p style={{fontSize:'18px'}}>BeatShare</p>
          </Col>
          <Col tag={Link} to='/LeagueWorks' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} md='6' xs='12' style={{padding:'0'}}>
            <img src='leagueworks.png' style={{width:'100%', padding:'25px', boxSizing:'border-box', cursor:'pointer', transition:'transform 0.3s ease, border-radius 0.3s ease', borderRadius:'8px'}} onMouseEnter={(e) => {e.target.style.transform = 'scale(1.05)'; e.target.style.borderRadius = '0px';}} onMouseLeave={(e) => {e.target.style.transform = 'scale(1)'; e.target.style.borderRadius = '8px';}}/>
            <p style={{fontSize:'18px'}}>LeagueWorks</p>
          </Col>
        </Row>
        </div>
      </Container>
    </div>
  );
}
