export default function Component(props){
  return (
    <div className="relative bg-white overflow-hidden  ">
      <div className="max-w-7xl mx-auto ">
        <div className="relative z-10 pb-64 bg-white w-1/2">
          <svg className="hidden lg:block absolute right-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto max-w-7xl pt-24">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-6xl tracking-tight font-extrabold text-blue-300">
                <span className="block">Cool landing page</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Search bar here or in header or actually the landing page shouldn't have a header?
              </p>
              <div className="mt-5 flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-600">
                    Explore
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 ">
                  <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-blue-200 ">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute inset-y-0 right-16 w-1/2 pr-16">
        <img className="object-cover h-full" src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80" alt="" />
      </div>
    </div>
  );
}