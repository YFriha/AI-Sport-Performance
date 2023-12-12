import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import Dashboard from './Pages/dashboard/Dashboard';
// import Players from './Pages/players/Players';
import Managers from './Pages/managers/Managers';
import Doctors from './Pages/doctors/Doctors';
import Food from './Pages/food/Food';
// import Chat from './Pages/chat/Chat';
import Calendar from './Pages/calendar/Calendar';
import Modalpopup from './Pages/modalPopup';
import Dashboard from './Pages/dashboard/Dashboard';
import FoodDetails from './Pages/food/FoodDetails';
import PlayerPage from './Pages/players/PlayerPage';
import PlayerDetails from './Pages/players/PlayerDetails';
// import ChatApp from './Pages/chat/ChatApp';
import { PieChart } from './Pages/players/PieChart';
// import Login from './Pages/Login/Login';
import Register from './Pages/register/Register';
// import { PieChart } from '@mui/icons-material';
// import Terrain from './component';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='players' element={<PlayerPage />} />
      <Route path='managers' element={<Managers />} />
      <Route path='doctors' element={<Doctors />} />
      <Route path='food' element={<Food />} />
      <Route path='calendar' element={<Calendar />} />
      <Route path='chat' element={<PieChart />} />
      <Route path='popup' element={<Modalpopup />} />
      <Route path='fooddetails/:imageSrc/:title/:description' element={<FoodDetails />} />
      <Route path='Playerdetails/:imageSrc/:name/:age/:height/:phone/:email/:value/:poste' element={<PlayerDetails />} />
      {/* <Route path='login' element={<Login />} /> */}
      <Route path='register' element={<Register />} />
      {/* <Route path="/login"><Login /> */}
</Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
