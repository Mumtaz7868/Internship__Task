import React from "react";
import Home from "./components/Home.jsx";
import Taskcreation from "./components/Taskcreation.jsx";
import Taskcreationfull from "./components/Taskcreationfull.jsx";
import Taskview from "./components/Taskview.jsx";
import Calendar from "./components/Calendar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Setting from "./components/Setting.jsx";
import Profile from "./components/Profile.jsx";
import MenuItem from "./components/MenuItem.jsx";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <MenuItem />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Taskview" element={<Taskview />} />
        <Route path="/taskcreation" element={<Taskcreation />} />
        <Route path="/taskcreationfull" element={<Taskcreationfull />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <Home /> */}
      {/* <Taskview /> */}
      {/* <Taskcreation /> */}
      {/* <Taskcreationfull /> */}
      {/* <Calendar /> */}
      {/* <Dashboard /> */}
      {/* <Setting /> */}
      {/* <Profile /> */}
    </div>
  );
}

export default App;
