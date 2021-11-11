import { useRouteMatch, NavLink } from 'react-router-dom';
import profile from './assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThLarge,
  faChartPie,
  faUser,
  faBox,
  faCreditCard,
  faCommentAlt,
  faUserFriends,
  faCalendarAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  let match = useRouteMatch();
  const activeClass = (route) => {
    return window.location.pathname === route ? 'text-primary' : null;
  };

  return (
    <nav className="border-r-2 border-gray-300 w-1/4">
      <ul className="flex flex-wrap flex-col content-center mt-10">
        <li className="text-gray-500 mb-9 flex items-center">
          <img
            src={profile}
            className="rounded-full h-10 w-10 mr-4"
            alt="profile pic"
          />
          <NavLink to={`${match.url}`}>Miroslav Minev</NavLink>
        </li>
        <li className={activeClass('/dashboard') + ' text-gray-500 mb-9'}>
          <FontAwesomeIcon className="mr-4" size="1x" icon={faThLarge} />
          <NavLink to={`${match.url}`}>Overview</NavLink>
        </li>
        <li
          className={activeClass('/dashboard/analyzer') + ' text-gray-500 mb-9'}
        >
          <FontAwesomeIcon className="mr-4" size="1x" icon={faChartPie} />
          <NavLink to={`${match.url}/analyzer`}>Traffic Analyzer</NavLink>
        </li>
        <li
          className={
            activeClass('/dashboard/dispatchers') +
            ' text-gray-500 mb-9 dropdown relative inline-block'
          }
        >
          {/* TODO: Find how to make active class display when on customer or dispatcher route */}
          <FontAwesomeIcon className="mr-4" size="1x" icon={faUser} />
          Registered Users
          <div className="dropdown-content hidden absolute bg-white min-w-3/4 shadow-md z-10">
            <NavLink
              className="text-black px-10 py-4 no-underline block"
              to={`${match.url}/customers`}
            >
              Customers
            </NavLink>
            <NavLink
              className="text-black px-10 py-4 no-underline block"
              to={`${match.url}/dispatchers`}
            >
              Dispatchers
            </NavLink>
          </div>
        </li>
        <li
          className={activeClass('/dashboard/packages') + ' text-gray-500 mb-9'}
        >
          <FontAwesomeIcon className="mr-4" size="1x" icon={faBox} />
          <NavLink to={`${match.url}/packages`}>Created Packages</NavLink>
        </li>
        <li
          className={activeClass('/dashboard/payments') + ' text-gray-500 mb-9'}
        >
          <FontAwesomeIcon className="mr-4" size="1x" icon={faCreditCard} />
          <NavLink to={`${match.url}/payments`}>Payments</NavLink>
        </li>
        <li
          className={activeClass('/dashboard/feedback') + ' text-gray-500 mb-9'}
        >
          <FontAwesomeIcon className="mr-4" size="1x" icon={faCommentAlt} />
          <NavLink to={`${match.url}/feedback`}>Feedback</NavLink>
        </li>
        <li
          className={activeClass('/dashboard/staffs') + ' text-gray-500 mb-9'}
        >
          <FontAwesomeIcon className="mr-4" size="1x" icon={faUserFriends} />
          <NavLink to={`${match.url}/staffs`}>Staffs</NavLink>
        </li>
        <li
          className={activeClass('/dashboard/calendar') + ' text-gray-500 mb-9'}
        >
          <FontAwesomeIcon className="mr-4" size="1x" icon={faCalendarAlt} />
          <NavLink to={`${match.url}/calendar`}>Calendar</NavLink>
        </li>
        <li className=" text-gray-500 mb-9">
          <FontAwesomeIcon className="mr-4" size="1x" icon={faSignOutAlt} />
          <NavLink to={`${match.url}/`}>LogOut</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Dashboard;
