import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectInputValue, setInputValue, clearInputValue } from './redux/slices/input';
function Navbars(props) {

  let inputValue = useSelector(selectInputValue);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setInputValue(e.target.value));
  };

  const handleClearInput = () => {
    dispatch(clearInputValue());
  };

  



  return (
    <div>


      <nav className="bg-sky-500 text-white border-gray-200 dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="./public/clear-sky.png" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AccurateWeather</span>
          </a>
        </div>
      </nav>

      <section className="bg-center h-auto mt-4 mb-10   bg-no-repeat bg-[url('./public/clouds.jpg')] bg-cyan-600 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Find the weather of your required city.</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-12"></p>
                </div>
            </section>


      {/* <ul className="flex flex-wrap text-sm rounded mt-1 border-cyan-500 border-2 font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="me-2">
          <span className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"><button onClick={() => { console.log('click2') }}>Lahore</button><button onClick={() => { console.log("click") }} className='bg-cyan-500   text-white  px-1  mx-1 '>X</button></span>
        </li>
      </ul> */}


      <form for="search" className='mt-5 mb-5 mx-2 '>
        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" value={inputValue} onChange={handleInputChange} id="default-search" className="block w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
        </div>
      </form>


    </div>
  )
}

export default Navbars

