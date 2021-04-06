export default function MeetingsBar(props){
  //create room pops out a modal
  //join/search input has a autocomplete and input on enter
  //if you create a room that already exists you join it
  return (
    <div className=" flex flex-shrink-0">
        <div className="flex flex-col">
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100 pl-2">
            <div className="flex-1 flex flex-col pt-5 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
              </div>
              <a href="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    
                    <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    Back to Dashboard
                  </a>
              <div class="pt-6 text-gray-600">
                  <input class="text-lg bg-gray-200 bg-opacity-0 h-10 px-5 pr-8 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Join/Create room..." />
                  <button type="submit" className="hidden absolute right-0 top-0 mt-5 mr-4"></button>
                  <hr/>
                </div>  
              <nav className="mt-5 flex-1" aria-label="Sidebar">
                <div className="px-2 space-y-3">
                  <a href="/" className="h-24 w-56 border-2 border-dashed border-gray-200 hover:bg-gray-50 justify-center text-gray-400 group flex items-center py-2 text-xl font-medium rounded-md">
                    +
                    <br/>
                    New Room
                  </a>
    
                  <a href="/" className="h-24 w-56 pt-2 border border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                     
                      <div>
                        <h4 className="w-48 text-lg font-bold truncate">Test room 1</h4>
                        <p className="w-48 truncate mt-1 text-xs">
                          meeting room for morning status stuff going on please wrap if this goes on for too long hello i asked it to
                        </p>
                        <p className = "items-end text-sm">4/4 participants</p>
                      </div>

                  </a>
                  <a href="/" className="h-24 w-56 pt-2 border border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                     
                      <div>
                        <h4 className="w-48 text-lg font-bold truncate ">Test room 2 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h4>
                        <p className="w-48 truncate mt-1 text-xs">
                          meeting room for morning status stuff going on please wrap if this goes on for too long hello i asked it to
                        </p>
                        <p className = "items-end text-sm">4/4 participants</p>
                      </div>

                  </a>
    
                 
    
                  
                </div>
              </nav>
            </div>



          </div>
        </div>
      </div>
  );
}