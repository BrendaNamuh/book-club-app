import { useState } from 'react';
import React ,{ useEffect } from 'react';
import {SearchBar} from  '../SearchBar/SearchBar.jsx'; 
import {SearchResults} from  '../SearchBar/SearchResults.jsx'; 
import {VotingPoll} from '../VotingPoll/VotingPoll.jsx'
import { MapPin,Calendar,MoveUpRight } from 'lucide-react';
import bookclubPhoto from '../../media/normalpeople_cover.jpg';



const UpcomingEvents = () => {
    const [selectedBook, setSelectedBook] = useState({})
    const [showSearchResults, setShowSearchResults] = useState(true)

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
    <div className="h-[85vh] mt-10 mx-auto w-[92%] flex items-start justify-center"> 
    {/* <p className='pr-10'>Mark your calendars, <br/> submit your votes! <br/><br/>2 Days left 'till <br/>the voting poll<br/> closes.</p> */}
    {/* LHS */}
    
    <div className=" h-full  w-[40%] flex-col p-5 px-12 ">
    
        <div className='text-[30px] mb-2'>Upcoming Meetup</div>
            {/* Datetime */}
            <div className=" h-[10%] mt-2 flex flex-row items-center">
                <Calendar  color='black'size={30} style={{ strokeWidth: '1' }}/>
                <div className='flex flex-col ml-4'>
                <div className='font-bold text-m'>Friday, November 15</div>
                <div className='text-xs'>6:00 PM - 8:00 PM</div>
                </div>
            </div>
            {/* LOCATION */}
            <div className=" h-[10%] mt-2 flex flex-row items-center text-gray">
                <MapPin  color='black'  size={30} style={{ strokeWidth: '1' }}/>
                <div className='flex flex-col ml-4 hover:text-blue-800'>
                <div className='font-bold text-m'>Juna Library</div>
                <div className='text-xs'>1234 Maple Street, Montreal, QC H2X 1Y2, Canada</div>
                </div>
            </div>
            <div className=" pl-2 h-8 mt-6 text-ls font-bold">{registrations.length} Going</div>
            <div className=" pl-4 px-4 flex items-center h-fit">
                {registrations.map((item,i)=>{

                    return (
                    <div className="w-8 h-8 border-[1px] border-black rounded-full -ml-4 text-xs flex items-center justify-center" key={i}>
                        {item.first_name[0]}{item.last_name[0]}
                    </div>
                )})}
            </div>
            <div className="h-1/2 w-[45%] border-2 mt-8 shadow-md">
                <img className='' src={`https://covers.openlibrary.org/b/olid/${selectedBook.book_id}-M.jpg`} />
            </div>
    </div>
     
    {/* RHS */}
    
    <div className="h-full p-2 border-l-2 border-gray-300 flex-grow flex flex-col justify-center">
        <VotingPoll setSelectedBook={setSelectedBook}/>     
    </div>

    </div>
   
    )
};

export default UpcomingEvents;
