import {useState } from 'react';

const demoData = [
  {
    id: "10001",
    name: "BTC"
  },
  {
    id: "10002",
    name: "ETH"
  },
  {
    id: "10003",
    name: "BNB"
  }
]


export default function InputCard() {
  const [active, setActive] = useState(false)
  const [query, setQuery] = useState('')

  const searchHandle = (e) => {
    const newquery = e.target.value
    setQuery(newquery)
  }

  const searchTerm = (crypto) => {
    if (query === ""){
      return 
    } else if (crypto.name.toLowerCase().includes(query.toLowerCase())){
      return true 
    }
  }


  return (
    <div className="flex items-center flex-col mb-10">
      <div className="bg-gray-800 rounded-md h-[50rem] w-[90%] p-5">
        <h1 className="text-gray-400 font-bold text-2xl">1</h1>
        <div className="mt-3 flex justify-between p-10">
          <div className="flex w-[24rem] relative">
            <div className={`${active ? 'h-[10rem] w-[18rem]':'h-8 w-[20rem] '} bg-gray-500 rounded-md transition-all duration-300 ease-in overflow-hidden`}>
              <div className="bg-gray-700 h-8 w-full rounded-md flex items-center p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input className="bg-gray-700 w-full focus:outline-none ml-2 text-white"
                  onClick ={() => {setActive(true)}}
                  onChange={searchHandle}
                  type='text'
                  value={query}>
                </input>
              </div>
              <div>
              <ul>
                { active && demoData &&
                  demoData.filter((crypto) => {
                    if (searchTerm(crypto)){
                      return crypto
                    }
                    }).map((item) => (    
                      <li key={item.id} className="list-none w-full p-2">
                        <a href="#">
                          <div className="cursor-pointer text-white hover:text-gray-300 border-b-[0.2px] border-gray-200 ml-6 mr-6">
                            <span>{item.name}</span>
                          </div>
                        </a>
                      </li>
                    ))
                }
              </ul>
              </div>
            </div>
            <button className={`${active?'visible' : 'invisible'} text-blue-500 absolute right-10 top-1 transition-all duration-400 ease-in-out`}
              onClick={() =>{setActive(false)}}>Cancel</button>
          </div>
          <iframe src="https://codesandbox.io/embed/romantic-sea-ntix1?autoresize=1&codemirror=1&fontsize=14&hidenavigation=1&module=%2Fcomponents%2FInput1.js&theme=dark&view=editor"
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
