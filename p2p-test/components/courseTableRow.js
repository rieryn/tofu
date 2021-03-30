
export default function courseTable (props) {
  
  return (
    <tr className = "text-left max-w-xs">
      <td className="px-6 py-4 whitespace-nowrap max-w-xs">
        <div className="flex items-center ">
          <div>
            <a href="#" className="text-sm font-medium text-blue-400 hover:text-yellow-300">CSCI 1040U</a>
            <div className="text-sm text-gray-500">Introduction to Krogg</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap max-w-xs">
        <div className="text-sm text-gray-900">100</div>
        <div className="hidden md:block overflow-ellipsis overflow-hidden text-sm text-gray-500">Krogg took 10 damage testing if this wraps properly Krogg took 10 damage testing if this wraps properlyKrogg took 10 damage testing if this wraps properlyKrogg took 10 damage testing if this wraps properlyKrogg took 10 damage testing if this wraps properly...</div>
        <a href="#" className="text-sm text-blue-400">(expand)</a>
      </td>
      <td className="px-6 py-4 whitespace-nowrap max-w-xs">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> **** </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">74%</td>
    </tr>
              
  )
}