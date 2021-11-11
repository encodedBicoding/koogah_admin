function DashboardHome() {
  return (
    <main className="py-6 px-5">
       <div class="grid gap-4 lg:flex bg-white p-6 md:flex mb-10">
        <select class="border focus:outline-none focus:shadow-outline py-3 px-2 lg:w-4/12 md:w-4/12 w-full" aria-label="Default select example">
          <option selected>All</option>
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
      </div>

      <div>
        <div class="lg:flex gap-2 grid mb-2 lg:mb-5  md:flex">
        <div className="bg-white flex-1 p-5">
          <p className="font-bold text-green-600 text-2xl mb-3">₦ 334,000</p>
          <p>Total Amount Available</p>
        </div>
        <div className="bg-white flex-1  p-5">
          <p className="font-bold text-black text-2xl mb-3">2,000</p>
          <p>Number of Staffs</p>
        </div>
        <div className="bg-white flex-1  p-5">
          <p className="font-bold text-black text-2xl mb-3">45,000</p>
          <p>Number of Customers</p>
        </div>
        </div>
        <div class="lg:flex gap-2 grid mb-10 md:flex">
        <div className="bg-white flex-1  p-5 ">
          <p className="font-bold text-black text-2xl mb-3">31,000</p>
          <p>Package Created</p>
        </div>
        <div className="bg-white flex-1  p-5">
          <p className="font-bold text-black text-2xl mb-3">2,000</p>
          <p>Number of Staffs</p>
        </div>
        <div className="bg-white flex-1  p-5">
          <p className="font-bold text-black text-2xl mb-3">33,000</p>
          <p>Tracking Packages</p>
        </div>
        </div>
       
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

export default DashboardHome;

