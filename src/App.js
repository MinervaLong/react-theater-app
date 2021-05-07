import './App.css';
import Linia from './Linia'
import drama from './drama.json'

const App = () => {

  const liniaComponent = drama.map((phrase,index) => {
    return(
      <Linia key={index} phrase={phrase} />
    )
  })
  return (
    <div className="">
      <header className="">        
        {liniaComponent}
      </header>
    </div>
  );
}

export default App;
