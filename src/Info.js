import React, { useRef } from 'react';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import profile from './img/angello-profile.jpg'

const Info = React.forwardRef((props, ref) => (
    <div className='info' ref={ref}>
            <img id='profile-img' src={profile} />
            <h1 id='name'>Angello Nunez</h1>
            <h2 id='profession'>Front End Developer</h2>
            <p id='web'>angellonunez.github.io/portfolio/</p>
            <div className='block'>
                    <button>Email</button>
                    <button className='blue'>LinkedIn</button>
            </div>
            <div className="section">
              <h2 className="section-title">About</h2>
              <p className="section-text" id='about-paragraph'>My name is Angello Nunez, I am 24 years old and I am a Front End Developer. I work as a Relationship Banker for Bank of America and I am looking for a career change. I speak Spanish and English.</p>
            </div>
            <div className="section">
              <h2 className="section-title">Interests</h2>
              <p className="section-text" id='interests-paragraph'>I like to create websites and web apps. I read about different topics to learn something new every day. I play videogames. Pokémon fan.</p>
            </div>
            <div className='footer'>
              <i class="fa-brands fa-facebook-square icon"></i>
              <i class="fa-brands fa-twitter-square icon"></i>
              <i class="fa-brands fa-instagram-square icon"></i>
              <i class="fa-brands fa-github-square icon"></i>
            </div>
        </div>
));

    const MyComponent = () => {
    const componentRef = useRef();
  
    return (
      <React.Fragment>
        <Info ref={componentRef} />
        <button className='export-button' onClick={() => exportComponentAsPNG(componentRef, {fileName: 'BusinessCard'})}>
        Export As PNG
      </button>
        </React.Fragment>
    )
    }
    

export default MyComponent