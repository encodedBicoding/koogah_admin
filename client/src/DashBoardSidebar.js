import { useRouteMatch, Link } from 'react-router-dom';
import profile from './assets/profile.png';

function Dashboard() {
  let match = useRouteMatch();

  return (
    <>
      {/* @TODO nav should be made a component */}
      <nav className="border-r-2 border-gray-300 w-1/4 ">
        <div className="flex items-center px-14 py-5">
          <img src={profile} className="rounded-full h-10 w-10 mr-4" alt="profile pic"/>
          <Link to={`${match.url}`}>Miroslav Minev</Link>
        </div>

        <ul className="flex flex-wrap flex-col content-center">
          <li className="mb-9">
            <Link to={`${match.url}`}>Overview</Link>
          </li>
          <li className="mb-9">
            <Link to={`${match.url}/analyzer`}>Traffic Analyzer</Link>
          </li>
          <li className="mb-9 dropdown">
            <div>
              Registered Users
              <div className="dropdown-content">
                <Link to={`${match.url}/customers`}>Customers</Link>
                <Link to={`${match.url}/dispatchers`}>Dispatchers</Link>
              </div>
            </div>
          </li>
          <li className="mb-9">
            <Link to={`${match.url}/packages`}>Created Packages</Link>
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
    </>
  );
}

export default Dashboard;
