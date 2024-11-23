import React, {useState,useEffect} from 'react';
import './CurrentlyReading.css'
import { MoveUpRight } from 'lucide-react';


const CurrentlyReading = () => {
    const [text, setText] = useState('Read a book');

    useEffect(() => {
      const texts = ['Read a book', 'Share a secret', 'The Secret Library'];
      let index = 0;
  
      const interval = setInterval(() => {
        index += 1;
        setText(texts[index]);
        if (index === texts.length - 1) {
          clearInterval(interval); // Stop changing after 'The Secret Library'
        }
      }, 1000); // Change text every 2 seconds
  
      return () => clearInterval(interval);
    }, []);
    // #DC143C

    return(
        <div className="h-[95vh] mt-4 mx-24 flex flex-col"> 

        <div className="transition-opacity duration-1000 h-[150px] flex items-end ">
            <div className='text-[70px] font-bold bg-transparent w-[60%]'>
                {text}
            </div>
            <div className=' flex-grow flex items-end h-full relative'>
                <div className='border-2 w-[60px] h-full bg-blue-500'></div>
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>
                <div className='border-2 w-[60px] h-full mb-[5px] bg-blue-500 ml-[20px]' style={{ transform: 'rotate(-16deg)' }}></div>
            </div>
        </div>
        <span className='h-[50px] bg-[#eb6e87]'></span>


        <div className='flex mt-9 bg-transparent font-bold h-[150px]'>
            <div className='w-[130%] flex items-end'>
                
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>
            </div>
            <div className='pl-10 flex-grow text-[20px] overflow-y-scroll'>
                We read. We discuss. And then we share our thoughts left unsaid. Whether it’s insights we forgot to mention, personal reflections too sensitive to voice, or thoughts that just didn’t come together in the moment, this is our space to express those feelings. Join us as we continue the conversation beyond the meeting, deepening our understanding and connection through shared experiences.
            </div>
        </div>
        <span className='h-[50px] bg-[#eb6e87]'></span>

        <div className='text-[23px] border-red-600 mt-2 justify-evenly bg-transparent font-bold flex flex-row h-[150px]'>
            <span className='w-[50%] flex flex-row items-end'>Currently reading: "Martyr!" by Kaveh Akbar<MoveUpRight className='ml-2 mt-2' size={18}/></span>
            <span className='flex-grow flex items-end'>
                <div className='border-2 w-[60px] h-full bg-blue-500' ></div>
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>

                <div className='flow flow-col border-2'>
                <div className='border-2 w-[150px] h-[60px] bg-red-500 ml-[5px]' ></div>
                <div className='border-2 w-[150px] h-[60px] bg-red-500 ml-[5px]' ></div>
                </div>
                <div className='border-2 w-[60px] h-full bg-blue-500 ml-[5px]'></div>
            </span>
        </div> 

        <span className='h-[50px] bg-[#eb6e87]'></span>



        <span className='absolute bottom-2 right-7 text-gray-300'>Created by Brenda Namuhoranye, 2024</span>
    
    </div>
    )
    
};

export default CurrentlyReading;
