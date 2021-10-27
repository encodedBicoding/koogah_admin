import logo from './assets/logo.svg'; // @TODO change this logo to the dashboard one
import DashboardSidebar from './DashBoardSidebar';

import {
  Switch,
  Route,
  useRouteMatch,
  Link
} from "react-router-dom";

function Dashboard() {
  let match = useRouteMatch();

  return (
    <>
      <header className="bg-black h-1/10">
        <div className="container">
          {/* <img src={logo} alt="logo" /> */}
        </div>
      </header>
     <DashboardSidebar />
    </>
  );
}

export default Dashboard;