import { useState } from 'react'
import styled from 'styled-components';
import Navbar from './components/Navbar'
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
const Services = styled.div`
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
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Grid>
        <Header>
          <Navbar/>
          <div className="container bg-yellow-100 flex flex-row items-center justify-between">
            <div className="">
             Sientete bien y llega más lejos
            </div>
            <img src="./hands.png"></img>
          </div>
        </Header>
        <Services className="my-20">
          Services
        </Services>
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
