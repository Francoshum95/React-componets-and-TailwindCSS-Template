import { useState } from "react";

export default function ButtonCards() {
  const [toggle1, setToggle1] = useState(false);

  return (
    <div className="flex items-center flex-col mb-10">
      <div className="bg-gray-800 rounded-md h-[50rem] w-[90%] p-5">
        <h1 className="text-gray-400 font-bold text-2xl">1</h1>
        <div className="mt-3 flex justify-between p-10">
          <button className="relative focus:outline-none w-14 h-20 ml-5"
            onClick={()=>setToggle1(!toggle1)}>
            <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 
            -translate-y-1/2">
              <span className={
                toggle1 ? 'rotate-45 block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out' : '-translate-y-1.5 block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out'
              }></span>
              <span className={
                toggle1 ? 'opacity-0 block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out' : ' block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out'
              }></span>
              <span className={
                toggle1 ? '-rotate-45 block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out' : 'translate-y-1.5 block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out'
              }></span>
            </div>
          </button>
  
          <iframe src="https://codesandbox.io/embed/romantic-sea-ntix1?autoresize=1&codemirror=1&fontsize=14&hidenavigation=1&module=%2Fcomponents%2FMenubuttons.js&theme=dark&view=editor"
            className="w-[70%] h-[40rem] overflow-hidden"
            title="romantic-sea-ntix1"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>   
        </div>
      </div>
      <div className="bg-gray-800 rounded-md h-[50rem] w-[90%] p-5 mt-10">
        <h1 className="text-gray-400 font-bold text-2xl">2</h1>
        <div className="mt-3 flex justify-between p-10">
          <button className="relative inline-block px-4 py-2 group w-20 h-20 ml-5">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">Button</span>
          </button>
          <iframe src="https://codesandbox.io/embed/romantic-sea-ntix1?autoresize=1&codemirror=1&fontsize=14&hidenavigation=1&module=%2Fcomponents%2FButton1.js&&theme=dark&view=editor"
            className="w-[70%] h-[40rem] overflow-hidden"
            title="romantic-sea-ntix1"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>   
        </div>
      </div>

      <div className="bg-gray-800 rounded-md h-[50rem] w-[90%] p-5 mt-10">
        <h1 className="text-gray-400 font-bold text-2xl">3</h1>
        <div className="mt-3 flex justify-between p-10">
        <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group w-20 h-10 ml-5">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
          <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
          <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
          <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
          <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
          <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
          <span className="relative">Button </span>
        </button>
          <iframe src="https://codesandbox.io/embed/romantic-sea-ntix1?autoresize=1&codemirror=1&fontsize=14&hidenavigation=1&module=%2Fcomponents%2FButton2.js&&theme=dark&view=editor"
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


