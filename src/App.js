import './App.css';
import Linia from './Linia'
import Heading from './Heading'
import drama from './drama.json'
import styled from 'styled-components';
import bgImg from './bg.jpg'

const Container = styled.section`
  background-image: url(${bgImg});
  background-attachment:fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display:flex;
  flex-direction:row;
  justify-content: flex-end;

  @media (max-width: 600px){
    justify-content: center;
  }

`
const TextWrapper = styled.div`
  background-color:#676666;
  padding: 0 1rem 0 1rem;
  max-width: 40%;
  opacity:0.7;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: left;
  
  @media (max-width: 600px){
    max-width: 80%;
  }

`

const App = () => {

  const liniaComponent = drama.map((phrase,index) => {
    return(
      <Linia key={index} phrase={phrase} />
    )
  })
  return (
    <Container>
      <TextWrapper>
        <Heading />
        {liniaComponent}</TextWrapper>
    </Container>
  );
}

export default App;
