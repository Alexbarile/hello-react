import Navbar from './components/navbar';
import Card from './components/card';

function App() {
  return (

    // FRAGMENT JSX
    <>
      <Navbar />
      <div className='container'>
        <h1>Cosa desideri ordinare?</h1>
        <hr></hr>
        <div className='row'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>

  );
}

export default App;
