import logo from './logo.svg';

function Dashboard() {
  return (
    <>
      <header className="">
        <div className="container border-4 border-green-200">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <main className="">
        <h1>Dashboard</h1>
      </main>
    </>
  );
}

export default Dashboard;