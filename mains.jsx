import React from 'react';
import { useSelector } from 'react-redux';
import store from './redux/store';
import { useState } from 'react';
import { fetchWeatherData} from './redux/slices/dataTake';
import { useDispatch } from 'react-redux';
import { justInputValue, changeBool,boolValue,clearInputValues} from './redux/slices/input';


import './App.css'

function Mains() {

    const dispatch  = useDispatch();
    let inputValue= useSelector(justInputValue);
    let boolsValue=useSelector(boolValue);
    console.log('Hi this the   '+inputValue);
    

    const [weatherInfo, setWeatherInfo] = useState({
        location: inputValue,
        temperature: "",
        feel_like: "",
        max_temp: "",
        min_temp: "",
        humidity: "",
        wind_speed: "",
      });

    const myFunction = async (city) => {
        // Dispatch the fetchWeatherData action
        var datas = await store.dispatch(fetchWeatherData(city));
        // dispatch(clearInputValues());
        // Get the temperature from the payload
        
        
        let data2 = JSON.parse(datas.payload);  
        console.log(data2);
        setWeatherInfo({
        location:city,
        temperature:data2.temp,
        feel_like:data2.feels_like,
        max_temp:data2.max_temp,      
        min_temp:data2.min_temp,
        humidity:data2.humidity,
        wind_speed:data2.wind_speed,
        });
    };

    if(boolsValue===true){
        myFunction(inputValue);
        console.log(inputValue);
        dispatch(changeBool());
        
    }


    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    return (
        <>
            {/* this this is big widges */}
            

            <div className="bg-cover mb-2 bg-[url('./public/rainy.jpg')] flex justify-center items-center bg-center h-auto rounded  mx-auto">
                <div className="backdrop-blur-lg bg-opacity-70   rounded-lg shadow-lg overflow-hidden">
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-2xl px-2 rounded-md mb-3 leading-6 border-black border-x-4 text-yellow-400">Location: <span className='text-white'>{weatherInfo.location}</span></h3>
                        <h3 className="text-lg mb-3 leading-6 font-medium text-black">Temperature:<span className='text-white float-right'>{weatherInfo.temperature} °C</span></h3>
                        <h3 className="text-lg mb-3 leading-6 font-medium text-black">Feel Like:<span className='text-white float-right'>{weatherInfo.feel_like} °C</span></h3>
                        <h3 className="text-lg mb-3 leading-6 font-medium text-black">Humidity:<span className='text-white float-right'>{weatherInfo.humidity} %</span></h3>
                        <h3 className="text-lg mb-3 leading-6 font-medium text-black">Max Temp:<span className='text-white float-right'>{weatherInfo.max_temp} °C</span></h3>
                        <h3 className="text-lg mb-3 leading-6 font-medium text-black">Min Temp:<span className='text-white float-right'>{weatherInfo.min_temp} °C</span></h3>
                        <h3 className="text-lg mb-3 leading-6 font-medium text-black">Wind Speed:<span className='text-white float-right'>{weatherInfo.wind_speed} kmph</span></h3>
                        <button id='click' onClick={()=>{myFunction(capitalizeFirstLetter(inputValue))}} className='transparent border-2 border-gray-800 mx-auto text-white float-right mb-1 rounded'>Search</button>
                        {/* <button id='click'  className='transparent border-2 border-gray-800 mx-auto float-left mb-1 rounded'>Add Tab</button> */}
                    </div>
                </div>
            </div>








        </>

    )


}

export default Mains
