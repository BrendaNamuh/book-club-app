import { useState } from 'react';
import React ,{ useEffect } from 'react';
import {SearchBar} from  '../SearchBar/SearchBar.jsx'; 
import {SearchResults} from  '../SearchBar/SearchResults.jsx'; 
import {VotingPoll} from '../VotingPoll/VotingPoll.jsx'
import { MapPin,Calendar,MoveUpRight } from 'lucide-react';
import bookclubPhoto from '../../media/a6dfe54cc35228de3415170b536ad066.jpg';


const UpcomingEvents = () => {
    
    const [showSearchResults, setShowSearchResults] = useState(true)
    const [inputValue, setInputValue] = useState(''); // Value in search bar


    const selectSearchResult = (selectedResult)=>{
        console.log('User selected: ',selectedResult)
        setInputValue(selectedResult.title);
        setShowSearchResults(false);
    }
    const registrations = [
        {"first_name":"Bren","last_name":"Nam"},
        {"first_name":"Jack","last_name":"Nam"},
        {"first_name":"Ruchi","last_name":"Nam"},
        {"first_name":"Zoey","last_name":"Nam"},
        {"first_name":"Max","last_name":"Nam"},
        {"first_name":"Rose","last_name":"Nam"},
        {"first_name":"Kelly","last_name":"Nam"},
        {"first_name":"Ben","last_name":"Nam"},
        {"first_name":"Farrouk","last_name":"Nam"},
        {"first_name":"Heather","last_name":"Nam"},
        {"first_name":"Val","last_name":"Nam"},
        {"first_name":"Yacoub","last_name":"Nam"},
    ]
    return(
    <div className="flex items-center justify-center flex-row border-red-700 border-2 h-[85vh] mt-12 mx-24"> 
    {/* LHS */}
    <div className=" h-full border-black border-2 flex-grow ml-24 p-5 px-16">
        <div className="border-blue-600 border-2 h-3/5 rounded-lg shadow-lg">
        <img className='' src={bookclubPhoto}/>

        </div>
        <div className="border-pink-600 border-2 h-8 mt-6">{registrations.length} Going</div>
        <div className="border-pink-600 border-2 h-16 p-4 flex items-center">
            {registrations.map((item,i)=>{

                return (
                <div className="w-8 h-8 bg-blue-100 border-2 border-gray-50 rounded-full -ml-4 text-xs flex items-center justify-center" key={i}>
                    {item.first_name[0]}{item.last_name[0]}
                </div>
            )})}

            
           
        </div>
        <div className='border-[1px] border-gray-300 w-[100%] h-0 mt-5'></div>
        <button className="px-2 py-1.5 mt-4 flex flex-row items-center">
            <span>Suggest a book</span>
            <MoveUpRight className='top-14 ml-2' size={12}/>
            </button>

    </div>
    
    {/* RHS */}
    <div className="h-full border-black border-2 w-[50%] p-5 flex flex-col">
         <div className="border-pink-600 border-2 h-[20%] text-3xl font-bold p-5">Upcoming Events</div>
         {/* Datetime */}
         <div className="border-pink-600 border-2 h-[10%] mt-2 flex flex-row items-center p-5">
            <Calendar  size={30}/>
            <div className='flex flex-col ml-4'>
            <div className='font-bold text-m'>Friday, November 15</div>
            <div className='text-xs'>6:00 PM - 9:00 PM</div>
            </div>
        </div>
        {/* LOCATION */}
        <div className="border-pink-600 border-2 h-[10%] mt-2 flex flex-row items-center p-5">
            <MapPin  size={30} style={{ strokeWidth: '1' }}/>
            <div className='flex flex-col ml-4'>
            <div className='font-bold text-m'>Juna Library</div>
            <div className='text-xs'>1234 Maple Street, Montreal, QC H2X 1Y2, Canada</div>
            </div>

        </div>
        <div className="mt-4 h-[390px] ">
            <VotingPoll/>    
        </div>

    </div>

    </div>
   
    )
};

export default UpcomingEvents;
