import DashboardHome from './DashboardHome';
import DashboardCustomers from './DashboardCustomers';
import DashboardDispatchers from './DashboardDispatchers';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import profile from './assets/Profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dashboard() {
  let match = useRouteMatch();

  return (
    <>
      <section className="flex h-9/10">
        {/* @TODO nav should be made a component */}
        <nav className="border-r-2 border-gray-300 w-1/4 ">
          <div className="flex items-center px-14 py-5">
            <img src={profile} className="rounded-full h-10 w-10 mr-4" />
            <Link to={`${match.url}`}>Miroslav Minev</Link>
          </div>

          <ul className="flex flex-wrap flex-col content-center">
            <li className="mb-9">
              <Link to={`${match.url}`}>Overview</Link>
            </li>
            <li className="mb-9">
              <Link to={`${match.url}/analyzer`}>Traffic analyzer</Link>
            </li>
            <li className="mb-9">
              <Link to={`${match.url}/registered-user`}>Registered users</Link>
            </li>
            <li className="mb-9">
              <Link to={`${match.url}/packages`}>Created packages</Link>
            </li>
            <li className="mb-9">
              <Link to={`${match.url}/payments`}>Payments</Link>
            </li>
            <li className="mb-9">
              <Link to={`${match.url}/feedback`}>Feedback</Link>
            </li>
            <li className="mb-9">
              <Link to={`${match.url}/staffs`}>Staffs</Link>
            </li>
            <li className="mb-9">
              <Link to={`${match.url}/calendar`}>Calendar</Link>
            </li>
            <li className="mb-9">
              <Link to={`${match.url}/`}>LogOut</Link>
            </li>
          </ul>
        </nav>
        <div className=" w-3/4 overflow-y-scroll">
          <div className="px-6 flex space-x-10 items-center bg-white py-2 sticky top-0">
            <input
              class="appearance-none me-10 border rounded-full py-1.5 px-6 rounded w-10/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />

            <FontAwesomeIcon
              className="bg-yellow-200 p-1 rounded-full"
              size="2x"
              icon="bell"
            />
          </div>
          <Switch>
            <div className="bg-gray-100">
              <Route path={`${match.path}/customers`}>
                <DashboardCustomers />
              </Route>
              <Route path={`${match.path}/dispatchers`}>
                <DashboardDispatchers />
              </Route>
              <Route path={match.path}>
                <DashboardHome />
              </Route>
            </div>
          </Switch>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
