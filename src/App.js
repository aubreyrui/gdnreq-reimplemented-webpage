import './App.css';
import Navbar from './NavBar';
import Footer from './Footer';
import Content from './Content';

function App() {
  return (
    <>
    <Navbar/>
    <div className='padded-info'>
      <Content/>
    </div>
    <Footer/>
    </>
  );
  
}

export default App;
