import { useState } from 'react';
import React ,{ useEffect } from 'react';
import {SearchBar} from  '../SearchBar/SearchBar.jsx'; 
import {SearchResults} from  '../SearchBar/SearchResults.jsx'; 
import {VotingPoll} from '../VotingPoll/VotingPoll.jsx'
import { MapPin,Calendar,MoveUpRight } from 'lucide-react';
import bookclubPhoto from '../../media/normalpeople_cover.jpg';



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
    <div className="h-[85vh] mt-10 mx-20 flex items-start justify-center"> 
    {/* <p className='pr-10'>Mark your calendars, <br/> submit your votes! <br/><br/>2 Days left 'till <br/>the voting poll<br/> closes.</p> */}
    {/* LHS */}
    
    <div className=" h-full  w-[60%] flex-col p-5 px-12 border-2 ">
    
        <div className='text-[30px] font-bold mb-2'>Upcoming Meetup</div>
            {/* Datetime */}
            <div className=" h-[10%] mt-2 flex flex-row items-center">
                <Calendar  size={30}/>
                <div className='flex flex-col ml-4'>
                <div className='font-bold text-m'>Friday, November 15</div>
                <div className='text-xs'>6:00 PM - 8:00 PM</div>
                </div>
            </div>
            {/* LOCATION */}
            <div className=" h-[10%] mt-2 flex flex-row items-center">
                <MapPin  size={30} style={{ strokeWidth: '1' }}/>
                <div className='flex flex-col ml-4'>
                <div className='font-bold text-m'>Juna Library</div>
                <div className='text-xs'>1234 Maple Street, Montreal, QC H2X 1Y2, Canada</div>
                </div>
            </div>
            <div className=" pl-2 h-8 mt-6 text-ls font-bold">{registrations.length} Going</div>
            <div className=" pl-4 px-4 flex items-center h-fit">
                {registrations.map((item,i)=>{

                    return (
                    <div className="w-8 h-8 border-2 border-[#ebd8e7] rounded-full -ml-4 text-xs flex items-center justify-center" key={i}>
                        {item.first_name[0]}{item.last_name[0]}
                    </div>
                )})}
            </div>
            <div className=" pl-2 h-8 mt-6 text-ls ">Cast your vote below for our next read: </div>
            <div className="h-[212px] w-[85%]">
                <VotingPoll/>    
            </div>
            
            <div className='border-[1px] border-gray-300 w-[100%] h-0 mt-5'></div>
            <button className="px-2 py-1.5 mt-4 flex flex-row items-center">
                <span>Suggest a book</span>
                <MoveUpRight className='top-14 ml-2' size={12}/>
                </button>
            
   
    </div>
     
    {/* RHS */}
    
    <div className=" h-full border-l-2 border-gray-300 pl-16 flex-grow p-5 flex flex-col">
   
        
            <div className=" h-[600px] w-[88%] rounded-lg shadow-lg">
                <img className='' src={bookclubPhoto}/>
                {/* <div>No book has been selected</div> */}
        </div>
   
       

    </div>

    </div>
   
    )
};

export default UpcomingEvents;
