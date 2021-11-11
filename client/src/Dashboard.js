import logo from './assets/logo.svg'; // @TODO change this logo to the dashboard one
import DashboardSidebar from './DashboardSidebar';
import DashboardHome from './DashboardHome';
import DashboardCustomers from './DashboardCustomers';
import DashboardDispatchers from './DashboardDispatchers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'

import { Switch, Route, useRouteMatch } from 'react-router-dom';
import DashboardStaffs from './DashboardStaffs';

function Dashboard() {
  let match = useRouteMatch();

  return (
    <>
      <header className="bg-black h-1/10">
        <div className="container"><img src={logo} alt="logo" width="120" height="50" /></div>
      </header>
      <section className=" flex h-9/10">
        <DashboardSidebar />
        <div className="w-3/4 overflow-y-scroll">
          {/* Header search begin  */}
          <div className="px-6 flex space-x-10 items-center bg-white py-2 sticky top-0">
            <input
              class="appearance-none me-10 border rounded-full py-1.5 px-6 rounded w-10/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="search"
              type="text"
            />

            <FontAwesomeIcon
              className="bg-yellow-200 p-1 rounded-full"
              size="2x"
              icon={faBell}
            />
          </div>
          {/* Header search ends  */}
          <div className="bg-gray-100">
            <Switch>
              <Route path={`${match.path}/customers`}>
                <DashboardCustomers />
              </Route>
              <Route path={`${match.path}/dispatchers`}>
                <DashboardDispatchers />
              </Route>
              <Route path={`${match.path}/staffs`}>
                <DashboardStaffs/>
              </Route>
              <Route path={match.path}>
                <DashboardHome />
              </Route>
            </Switch>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
