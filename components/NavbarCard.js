import {useState} from 'react';


export default function NavbarCard() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center flex-col mb-10">
      <div className="bg-gray-800 rounded-md h-[50rem] w-[90%] p-5">
        <h1 className="text-gray-400 font-bold text-2xl">1</h1>
        <div className="mt-3 flex justify-between">
          <div className={`${toggle ? 'h-[10rem]' : 'h-10'} w-[30%] bg-gray-500 rounded-md transition-all duration-300 ease-in overflow-hidden`}>
            <button className="relative focus:outline-none w-10 h-10 ml-2"
              onClick={()=>setToggle(!toggle)}>
              <div className="block w-5 absolute left-5 top-1/2 transform -translate-x-1/2 
              -translate-y-1/2">
                <span className={
                  toggle ? 'rotate-45 block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out' : '-translate-y-1.5 block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out'
                }></span>
                <span className={
                  toggle ? 'opacity-0 block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out' : ' block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out'
                }></span>
                <span className={
                  toggle ? '-rotate-45 block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out' : 'translate-y-1.5 block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out'
                }></span>
              </div>
            </button>
            <ui className='list-none ml-2' >
              <li className="p-2 hover:bg-gray-600 cursor-pointer transition-colors duration-300 ease-in-out">
                <a className="ml-2 text-white"
                  href="#">
                  Home
                </a>
              </li>
              <li className="p-2 hover:bg-gray-600 cursor-pointer transition-colors duration-300 ease-in-out">
                <a className="ml-2 text-white"
                  href="#">
                  Product
                </a>
              </li>
              <li className="p-2 hover:bg-gray-600 cursor-pointer transition-colors duration-300 ease-in-out">
                <a className="ml-2 text-white"
                  href="#">
                  About
                </a>
              </li>
            </ui>
          </div>
          <iframe src="https://codesandbox.io/embed/romantic-sea-ntix1?autoresize=1&codemirror=1&fontsize=14&hidenavigation=1&module=%2Fcomponents%2FNavbar1.js&theme=dark&view=editor"
            className="w-[70%] h-[40rem] overflow-hidden"
            title="romantic-sea-ntix1"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>  
        </div>
      </div>
    </div>
  )
}




