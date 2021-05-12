import React, {useState} from 'react'
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
  width: 25%;
  opacity:0.7;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: left;
  
  @media (max-width: 1024px){
    width: 43%;
  }

  @media (max-width: 700px){
    width: 80%;
  }

`
const Button = styled.button`
    background-color: #1f2022;
    border-color: #1f2022;
    font-size: 18pt;
    color: #a6afbf;
    padding: 1rem 4rem 1rem 4rem;
    width: 50%;
    cursor: pointer;

    :actived {
        background-color: #1f2022;
        border-color: #1f2022;
    }

    @media (max-width: 1500px){
      width: 43%;
      padding: 1rem 2rem 1rem 2rem
    }

    @media (max-width: 800px){
        flex-direction: column;
        width: 100%;
        
    } 
`
const ButtonWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  align-content: center;

  @media (max-width: 800px){
      flex-direction: column;
  }
`


const App = () => {
  const [index, setIndex] = useState(0); 

  const next = () => {
    setIndex(index => index + 1)
    console.log('next line')
    console.log(index)
  }

  const prev = ()=> {
    setIndex(index => index - 1)
    console.log('previous line')
    console.log(index)
  } 


  let liniaComponent = drama.map((phrase,dramaIndex) => {
    console.log(dramaIndex)
      return ( dramaIndex === index ? 
        <Linia key={dramaIndex} phrase={phrase} primary/>
      : <Linia key={dramaIndex} phrase={phrase} />   
      )          
  })



  return (
    <Container>
      <TextWrapper>
        <Heading />
        {liniaComponent}
        <ButtonWrapper>
        <Button onClick={prev}>Previous</Button>
        <Button onClick={next}>Next</Button>
        </ButtonWrapper>
      </TextWrapper>      
    </Container>
  );
}

export default App;
