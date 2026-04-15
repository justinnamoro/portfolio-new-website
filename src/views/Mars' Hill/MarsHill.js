import React from 'react';
import styled from 'styled-components';

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

const ProjectContent = styled.div`
background-color: rgb(23,25,34);
justify-content: center;
align-items: center;
padding: 50px;

`;

const ProjectInfo = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 50px;

@media (max-width:767px){
    flex-direction: column;
}
`;

const ProjectDesc = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


export default function MarsHill(){
    return(
        <>
        <IndexNavbar/>
        <div className='dev-header'
            style={{
                display: 'flex',
                justifyContent:'center',
                paddingTop:'250px',
                paddingBottom:'70px',
                backgroundColor:'rgb(23,25,45)'
            }}
            >
                <h1 style={{fontWeight:600}}>TWU Mars' Hill</h1>
        </div>

        <ProjectContent>
                

                <ProjectDesc>
                    <p style={{maxWidth:'800px', marginBottom:50}}> 
                    A UX‑driven redesign of Trinity Western University’s student magazine website. The previous site buried current issues and made it difficult for students to find the latest release. I redesigned the navigation, homepage structure, and content hierarchy to make new issues the primary focus and improve overall usability.
                    <br></br>Link to website: <a href='https://www.marshillmagazine.com/'>https://www.marshillmagazine.com/</a>
                    </p>
                    <img src='marshill_landing.png'/>
                     
                     <h2 style={{marginTop:'25px'}}>Problem</h2>
                    <p style={{maxWidth:'800px', marginBottom:50}}> The existing magazine website had two major issues: <br></br>

- Current issues were not prominently displayed — users had to dig through menus to find the latest release.

 <br></br>

- Navigation was unclear — the site emphasized static pages instead of the magazine itself. <br></br>

This created friction for students trying to access new content quickly.</p>

                    <h2 style={{marginTop:'25px'}}>What I Improved</h2>
                    <p style={{maxWidth:'800px', marginBottom:50}}> - Redesigned the navigation bar to prioritize “Current Issues” <br></br>

- Rebuilt the homepage layout so the newest issue is the hero element, immediately visible on load. <br></br>
- Improved content hierarchy to reduce cognitive load and make browsing intuitive. <br></br>
- Refined typography and spacing for better readability and a more modern feel. <br></br>
- Streamlined mobile responsiveness so students could access issues easily on phones.
</p>

<h2 style={{marginTop:'25px'}}>Outcome</h2>
                    <p style={{maxWidth:'800px', marginBottom:50}}> - Students could access the newest issue in one click instead of navigating through multiple pages. <br></br>

- Engagement increased because the homepage now clearly showcased the latest release. <br></br>

- The editorial team gained a cleaner, more flexible layout for future issues. <br></br>

- The site felt more like a magazine and less like a generic CMS.</p>

                </ProjectDesc>




            </ProjectContent>
        <Footer/>
        
        </>
    );
}