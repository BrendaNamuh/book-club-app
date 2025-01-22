import React, {useState,useEffect} from 'react';
import './CurrentlyReading.css'
import { MoveUpRight } from 'lucide-react';


const CurrentlyReading = () => {
    const SHELF_COLOUR = '#391e1e11';
    const [text, setText] = useState('Read a book');

    useEffect(() => {
      const texts = ['Read a book', 'Share a secret', 'Secret Library'];
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
        <div className="h-fit mt-4 p-1 mx-auto flex flex-col border-2 w-[92%] border-b-[0px] border-[#391e1e11]" style={{ borderColor: SHELF_COLOUR }} > 

        <div className=" mt-4 border-b-2 border-[#5a3e3e8b] transition-opacity duration-1000 h-[150px] flex items-end " style={{ borderColor: SHELF_COLOUR }}>
            {/* <div className='absolute text-[70px] bg-transparent w-[50%]'>
                {text}
            </div> */}
            <div className='flex-grow flex items-end h-full relative gap-[2px]'>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C] '></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-red-700'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-red-700'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-red-700 ml-5' style={{ transform: 'rotate(-14deg)'}}></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]' style={{ transform: 'rotate(-15deg)'}}></div>
                <div className='border-2 w-[20px] h-[99%] bg-[#DC143C]' style={{ transform: 'rotate(-15deg)'}}></div>
                <div className='border-2 w-[20px] h-[98%] bg-[#DC143C] ' style={{ transform: 'rotate(-16deg)'}}></div>
                <div className='border-2 w-[20px] h-[99%] bg-[#DC143C] ' style={{ transform: 'rotate(-16deg)'}}></div>
            </div>
        </div>
        {/* <span className='h-[40px] border-[2px] border-[#DC143C]'></span> */}


        <div className='flex mt-24 bg-transparent h-[150px] border-b-2' style={{borderColor:SHELF_COLOUR}}>
            <div className='w-[130%] flex items-end gap-[2px]'>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-red-700' ></div>
                <div className='border-2 w-[20px] h-full bg-red-600'></div>
                <div className='border-2 w-[20px] h-full bg-red-700'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>

                <div className='flow flow-col border-2'>
                <div className='border-2 w-[150px] h-[20px] bg-red-600' ></div>
                <div className='border-2 w-[150px] h-[20px] bg-red-500' ></div>
                <div className='border-2 w-[20px] h-full bg-red-500'></div>
                <div className='border-2 w-[150px] h-[20px] bg-red-600 ' ></div>
                <div className='border-2 w-[150px] h-[20px] bg-red-600' ></div>
                </div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C] ml-[7px]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-red-500'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
            </div>
            <div className='pl-8 pr-8 flex-grow text-right text-[20px] overflow-y-scroll'>

            Secret Library is a book club with a twist. In addition to our bi-monthly discussions, we create a space to share reflections that might otherwise go unsaid—how a book intimately resonates with our lives, stirs memories, evokes emotions, or invites more thoughtful critiques. Our hope is that this deepens our connections to both the text and one another.            </div>
        </div>
        {/* <span className='h-[40px] border-[2px] border-[#DC143C]'></span> */}

        <div className='text-[22px] mt-14 border-b-2 justify-evenly bg-transparent flex flex-row h-[150px]' style={{borderColor:SHELF_COLOUR}}>
           <span className='w-[50%] flex flex-row items-end text-[17px]'> <a href='https://www.penguinrandomhouse.com/books/734476/martyr-by-kaveh-akbar/'>Currently reading: "Martyr!" by Kaveh Akbar </a><MoveUpRight className='ml-2 mt-2' size={18}/></span>
            <span className='flex-grow flex items-end gap-[2px]'>
            
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]' ></div>
                <div className='border-2 w-[20px] h-full bg-red-500'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-red-700'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>


                <div className='flow flow-col border-2'>
                <div className='border-2 w-[150px] h-[20px] bg-red-500' ></div>
                <div className='border-2 w-[150px] h-[20px] bg-red-500' ></div>
                <div className='border-2 w-[150px] h-[20px] bg-red-500' ></div>
                <div className='border-2 w-[150px] h-[20px] bg-red-500' ></div>
                </div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-red-500'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-red-500'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                <div className='border-2 w-[20px] h-full bg-[#DC143C]'></div>
                
            </span>
        </div> 

        {/* <span className='h-[40px] border-[2px] border-[#DC143C]'></span> */}



        <span className='ml-auto text-[15px]  text-gray-300'>Created by Brenda Namuhoranye, 2024</span>
    
    </div>
    )
    
};

export default CurrentlyReading;
