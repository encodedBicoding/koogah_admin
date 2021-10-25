import {
  Switch,
  Route,
  useRouteMatch,
  Link
} from "react-router-dom";
import { useMemo } from 'react';
import logo from './logo.svg';
import authBanner from './auth_banner.svg';
import AuthLogin from './AuthLogin';
import AuthForgot from './AuthForgot';
import AuthReset from './AuthReset';

function Auth({ location }) {
  let match = useRouteMatch();

  const header = useMemo(() => {
    if(location.pathname === '/forgot') return 'Forgot Password'
    else if(location.pathname === '/reset') return 'Reset Password'
    else return 'Welcome Back'
  }, [location.pathname]);

  const leadText = useMemo(() => {
    if(location.pathname === '/forgot') return 'We knew this might happen, and we got you. Please enter your email address to reset your password.'
    else if(location.pathname === '/reset') return 'Enter a new password to gain access to your account'
    else return 'Please sign in to your account and continue with the Koogah experience'
  }, [location.pathname]);

  const buttonText = useMemo(() => {
    if(location.pathname === '/forgot') return 'submit'
    else if(location.pathname === '/reset') return 'update password'
    else return 'Sign In'
  }, [location.pathname]);

  return (
    <>
      <header className="fixed w-full">
        <div className="container py-5">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
      </header>
      <section className="h-full flex">
        <div className="h-4/6 w-4/6 flex justify-between items-center m-auto">
          <div className="hidden md:inline-block md:w-6/12">
            <img src={authBanner} alt="Banner" />
          </div>
          <main className="h-full md:w-4/12 flex border-2 border-primary rounded-md shadow-lg">
            <div className="m-auto w-11/12">
              <h2 className="text-2xl text-center">{header}</h2>
              <p className="text-center text-sm px-8 mt-2">{leadText}</p>
              <form className="mt-10 flex flex-col w-full">
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
                <button className="bg-primary uppercase py-2 rounded-md mt-9 shadow-lg tracking-wider">{buttonText}</button>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default Auth;
