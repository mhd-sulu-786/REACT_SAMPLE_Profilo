import { Button} from 'react-bootstrap';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import img_intro from './Components/assist/imgs/intro-bg.jpg'
import 'react-bootstrap'
import Futur from './Components/Futur/Futur';
import About from './Components/About/About';
import Service from './Components/Our services/Service';
import Gallery from './Components/Gallery/Gallery';
import Client_say from './Components/Waht_our_client_say/Client_say';
import Team from './Components/Meet_the_team/Team';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center text-center  text-smoke pb-3 Home '
        style={{
          backgroundImage: `url(${img_intro})`,
          height: "120vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: '#b5adad',
          filter: 'contrast(90%)',
        }}

      >


        <h1 className='intro_h1'>
          WE ARE A <br></br>LANDING PAGE
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec<br />
          ornare diam sed commodo nibh ante facilisis bibendum.</p>
        <Button
          className='px-4 py-2 '
          style={{
            backgroundImage: "linear-gradient(to right,rgb(18, 143, 202) 0%, rgb(58, 101, 180)  51%,  rgb(39, 39, 155) 100%)",
            borderRadius: '15px',

          }}
        >LEARN MORE</Button>



      </div>
      <Futur />
      <About />
      <Service />
      <Gallery />
      <Client_say/>
      <Team/>



    </div>
  );
}

export default App;
