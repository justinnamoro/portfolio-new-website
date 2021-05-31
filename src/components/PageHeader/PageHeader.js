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
import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand" style={{zIndex:100}}>
        <img src='/me.jpeg' 
          style=
          {{width:'150px', 
          height:'150px',
          borderRadius:'30px',
          marginTop:'150px',
          marginBottom:'50px'
        }}
          />

          <h1 className="h1-seo">Hi there 👋</h1>
          <h4>
            My name is Justin Namoro. I'm a Web Developer and UI/UX Designer based in Vancouver, BC!
          </h4>

          <Button color='primary' href='/#basic-elements'>View Projects</Button>


        </div>
      </Container>
    </div>
  );
}
