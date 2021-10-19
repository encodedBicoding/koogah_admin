import logo from './logo.svg';
import authBanner from './auth_banner.svg';
import AuthLogin from './AuthLogin';
import AuthForgot from './AuthForgot';
import AuthReset from './AuthReset';
import {
  Switch,
  Route,
  useRouteMatch,
  Link
} from "react-router-dom";

function Auth() {
  let match = useRouteMatch();

  return (
    <>
      <header className="">
        <div className="container border-4 border-green-200">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
      </header>
      <main className="">
        <div className="container flex justify-between items-center p-28 border-4 border-yellow-200">
            <div className="hidden md:inline-block md:w-5/12 border-2 border-blue-400">
              <img src={authBanner} alt="Banner" />
            </div>
            <div className="md:w-4/12 flex flex-col items-center border-2 border-red-400 px-5 py-10">
              <Switch>
                <Route path="/forgot">
                  <AuthForgot />
                </Route>
                <Route path="/reset">
                  <AuthReset />
                </Route>
                <Route path={match.path}>
                  <AuthLogin />
                </Route>
              </Switch>
            </div>
        </div>
      </main>
    </>
  );
}

export default Auth;
