

 


export default function courseTable (props) {
  const viewBox = `0 0 50 50`;
  console.log(props)
  return (
    <tr className = "text-left ">
      <td className="px-6 py-4 whitespace-nowrap max-w-xs transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        <div className="flex items-center ">
          <div>
            <a href="#" className="text-sm font-medium text-blue-400 hover:text-yellow-300">{props.data?.coursecode}</a>
            <div className="text-sm text-gray-500">{props.data?.coursename}</div>
          </div>
        </div>
      </td>
      <td className="block px-6 py-4 whitespace-nowrap lg:w-36 xl:w-full lg:max-w-xs transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        <div className="text-sm text-gray-900">{props.numreviews} Reviews</div>
        <div className="hidden md:block overflow-ellipsis w-8 lg:w-full  overflow-hidden text-sm text-gray-500">{props.review || "nothing"}</div>
        <a href="#" className="text-sm text-blue-400">(expand)</a>
      </td>
      <td className="px-6 py-4 whitespace-nowrap max-w-xs transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-blue-100 text-green-800">{props.numratings || 0}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap max-w-xs transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{"*".repeat(props.goodrating || 1)}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        {props.easyrating*100/5 || 0}%
      </td>
    </tr>
              
  )
}