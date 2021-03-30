
export default function courseTable (props) {
  const viewBox = `0 0 50 50`;
  return (
    <tr className = "text-left ">
      <td className="px-6 py-4 whitespace-nowrap max-w-xs transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        <div className="flex items-center ">
          <div>
            <a href="#" className="text-sm font-medium text-blue-400 hover:text-yellow-300">CSCI 1040U</a>
            <div className="text-sm text-gray-500">Introduction to Krogg</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap max-w-xs transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        <div className="text-sm text-gray-900">100</div>
        <div className="hidden md:block overflow-ellipsis overflow-hidden text-sm text-gray-500">Krogg took 10 damage testing if this wraps properly Krogg took 10 damage testing if this wraps properlyKrogg took 10 damage testing if this wraps properlyKrogg took 10 damage testing if this wraps properlyKrogg took 10 damage testing if this wraps properly...</div>
        <a href="#" className="text-sm text-blue-400">(expand)</a>
      </td>
      <td className="px-6 py-4 whitespace-nowrap max-w-xs transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> **** </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        74%
      </td>
    </tr>
              
  )
}