function DashboardStaff() {
  return (
    <main className="py-6 px-5">
      <div class="lg:flex gap-2 grid mb-2 lg:mb-5  md:flex">
        <div className="bg-white flex-1 p-5">
          <p className="font-bold text-black text-2xl mb-3">23,000</p>
          <p>Number of Staffs</p>
        </div>
        <div className="bg-white flex-1  p-5">
          <p className="font-bold text-black text-2xl mb-3">2,000</p>
          <p>Employee Manager</p>
        </div>
        <div className="bg-white flex-1  p-5">
          <p className="font-bold text-black text-2xl mb-3">45,000</p>
          <p>Client Manager</p>
        </div>
      </div>
      <div class="grid gap-3 lg:flex bg-white p-6 md:flex">
        <select
          class="border focus:outline-none focus:shadow-outline py-3 px-2 lg:w-4/12 md:w-4/12 w-full"
          aria-label="Default select example"
        >
          <option selected>Role</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <input
          class="appearance-none me-10 border py-3 px-6 lg:w-4/12 md:w-4/12 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          type="text"
        />
        <input
          class="appearance-none me-10 border py-3 px-6 lg:w-4/12 md:w-4/12 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          type="text"
        />
        <button class="text-black px-2 py-3 lg:w-1/5 md:w-1/4 w-full bg-yellow-400 rounded">
          ADD NEW STAFF
        </button>
      </div>
      <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br />
      More content on Page to demonstrate overflow
    </main>
  );
}

export default DashboardStaff;
