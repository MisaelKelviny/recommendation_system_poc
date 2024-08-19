import { Outlet } from "react-router-dom";
import Header from "./components/header";
import SideNav from "./components/sidenav";

function App() {
  return (
    <div className="antialiased flex flex-col p-5">
      <Header />
      <div className="flex justify-between w-full gap-5">
        <SideNav />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
