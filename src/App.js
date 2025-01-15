import logo from './logo.svg';
import './App.css';
import TopNavBar from './Components/TopNavBar';
import SideMarquee from './Components/SideMarquee';
import Hero from './Components/Hero';

function App() {
  return (
    <>
      <div className='w-full h-screen bg-black'>
          <TopNavBar/>
          <div className='h-full w-full flex flex-row'>
              <SideMarquee/>
              <Hero/>
          </div>
      </div>
    </>
  );
}

export default App;
