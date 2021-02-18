import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
      <div className='container'>
          <Header/>
          <div className='wrap'>
              <Sidebar/>
              <Profile/>
          </div>
          <Footer/>
      </div>
  );
}
export default App;
