import './App.css';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './Components/NavBar'




function App() {
  return (
   <div>
    <ResponsiveAppBar/>
    <Outlet/>
   </div>
  );
}

export default App;
