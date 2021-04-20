
export default function RoomJoinButton(props){

  //create room pops out a modal
  //join/search input has a autocomplete and input on enter
  //if you create a room that already exists you join it
  return (
<a href={`/rooms?roomid=${props.roomid}&peerlist=${JSON.stringify(props.peerlist)}`} className="w-56 pt-2 border border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                     
                      <button className = "text-xs">
                      BIG ROOM
                        <h4 className="w-48 text-lg font-bold truncate">{props.roomname}</h4>
                        <p className="w-48 truncate mt-1 text-xs">
                          {props.description}
                        </p>
                        <p className = "items-end text-sm">{props.peerlist.length}/4 participants</p>
                      </button>

                  </a>
                  )
              }