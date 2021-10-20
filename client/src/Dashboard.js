import logo from './logo.svg'; // @TODO change this logo to the dashboard one
import DashboardHome from './DashboardHome';
import DashboardCustomers from './DashboardCustomers';
import DashboardDispatchers from './DashboardDispatchers';
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
          <img src={logo} alt="logo" />
        </div>
      </header>
      <section className="border-4 border-green-200 flex h-9/10">
        {/* @TODO nav should be made a component */}
        <nav className="border-4 border-red-200 w-1/4">
          <h2>Navigations</h2>

          <ul>
            <li>
              <Link to={`${match.url}`}>Dashboard</Link>
            </li>
            <li>
              <Link to={`${match.url}/customers`}>
                Customers
              </Link>
            </li>
            <li>
              <Link to={`${match.url}/dispatchers`}>
                Dispatchers
              </Link>
            </li>
          </ul>
        </nav>
        <div className="border-4 border-blue-200 w-3/4 overflow-y-scroll">
          <div>
            Top bar with search and Notification icon
          </div>
          <Switch>
            <Route path={`${match.path}/customers`}>
              <DashboardCustomers />
            </Route>
            <Route path={`${match.path}/dispatchers`}>
              <DashboardDispatchers />
            </Route>
            <Route path={match.path}>
              <DashboardHome />
            </Route>
          </Switch>
        </div>
      </section>
    </>
  );
}

export default Dashboard;