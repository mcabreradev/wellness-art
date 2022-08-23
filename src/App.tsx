import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './sections/Services';

import './App.css'

const Grid = styled.div`
  display: grid; 
  grid-auto-rows: 1fr; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: auto 1fr 1fr 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "header header header header"
    "services services services services"
    "about-us about-us about-us about-us"
    "location location location location"
    "footer footer footer footer"; 
`;

const Header = styled.div`
  grid-area: header;
  height: 50vh; 
`;
const ServicesWrapper = styled.div`
  grid-area: services;
`;
const AboutUs = styled.div`
  grid-area: about-us;
`;
const Location = styled.div`
  grid-area: location;
`;
const Footer = styled.footer`
  grid-area: footer;
`;

function App() {

  return (
    <div className="App">
      <Grid>
        <Header>
          <Navbar/>
          <Hero />
        </Header>

        <ServicesWrapper>
          <Services/>
        </ServicesWrapper>

        <AboutUs>
          About Us
        </AboutUs>
        <Location>
          Location
        </Location>
        <Footer>
          Footer
        </Footer>
      </Grid>
    </div>
  )
}

export default App
