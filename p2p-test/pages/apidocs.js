import Frame from '../components/Frame/frame'


export default function Example() {
  return (
    <Frame>
    <div className="bg-gray-800 p-24 px-40">
      <div className="max-w-7xl mx-auto py-16 text-left px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold  text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Public API
          </h2>
          <p className="mt-5 text-xl text-gray-400">
            Use our api to query course information for your project
          </p>
          <p className="mt-2 pl-4 text-xl text-gray-400">
              In the future.
          </p>
          <p className="mt-2 pb-4 text-xl text-gray-400">
            In the mean time, check out isBool
          </p>
          <a href="#docs">
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
             >
          VIEW DOCS
          </button>
          </a>
        </div>

        <div className="w-full max-w-md pl-12 ">
        <img className="w-full" src = "https://cdn.pixabay.com/photo/2016/12/08/15/45/panda-1892023_1280.png"></img>
           <div className="pt-12">
            <form className="flex space-x-2" action="/message?msg=thanks!">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full border-white px-4  focus:outline-none rounded-md"
                placeholder="Sign up for nothing"
              />
              <button
                type="submit"
                className="w-auto flex items-center justify-center px-5 py-2 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-400 hover:bg-red-400 focus:outline-none  "
              >
                Okay!
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 p-12 px-40">
      <div className="max-w-7xl mx-auto py-16 text-left px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="pl-4 max-w-xl text-lg" id ="docs">
          <h2 className="text-4xl font-extrabold text-gray-700 ">
            Documentation
          </h2>
          <p className="pl-4 mt-5 text-gray-400">
             URL: http://localhost:3000/api/isBool?q=[YOUR QUERY]
          </p>
          <p className="mt-2 pl-4 text-gray-400">
              Returns a JSON!
          </p>
          <p className="mt-2 pl-4 pb-4 text-gray-400">
            q: The object you want to check
          </p>
          <p className="mt-2 pl-4 pb-4 text-gray-400">
            Example Response:
          </p>
          <div className="bg-black w-auto h-auto rounded">
            <p className="mt-2 pl-4 pb-4 text-md text-gray-400">
            &#123;isBool: False,<br/>
            ad: advertisement: "Build the most efficient intergalactic factory in space simulation strategy game Dyson Sphere Program!"&#125;
          </p>

          </div>
        </div>

        <div className="pl-4 max-w-xl text-lg" id ="docs">
          <h2 className="text-3xl font-extrabold text-gray-700 ">
            FAQ
          </h2>
          <p className="pl-4 mt-5 text-gray-400">
             Q: How do I know if the result is a bool??
          </p>
          <p className="mt-2 pl-4 text-gray-400">
              A: Query the API again.
          </p>
         
          
        </div>
      </div>
    </div>
    
    </Frame>
  )
}