import { useEffect, useState } from 'react';
import { Library } from 'lucide-react';

export const AddCard = ({isVisible, onClose, onSubmit }) => {
    const CURRENT_BOOK_TITLE = 'Normal People'
    const CURRENT_BOOK_AUTHOR = 'Sally Rooney'
  
    const [cardData,setCardData] = useState({
        book_title: CURRENT_BOOK_TITLE,
        book_author: CURRENT_BOOK_AUTHOR,
        message:'',
        user_name:'',
        timestamp:''
    })

    useEffect(() => {
        if (isVisible) {
            setCardData({
            book_title: CURRENT_BOOK_TITLE,
            book_author: CURRENT_BOOK_AUTHOR,
            message: '',
            user_name: '',
            timestamp: '',
            });
        }
        }, [isVisible]); // Only run this effect when `isVisible` changes
   
    // Triggered when a change occurs in inputs
    const handleChange = (event)=> {
        const {name, value} = event.target;
        setCardData((prevCardData)=>({
            ...prevCardData,
            [name]:value
        }))
    }
    // After submit
    // Sends new card to parent component
    // Reset card info to null value
    const handleSubmit = () =>{
        console.log('Popup Submit is clicked:', cardData)
        const currentTimestamp = new Date().toISOString()
        // If user_name is empty, we assign "Anonymous" directly to updatedReview
        const updatedReview = {
        ...cardData, // Spread the current state
        user_name: cardData.user_name === "" ? "Anonymous" : cardData.user_name, // Check and assign "Anonymous" if empty
        timestamp: currentTimestamp // Add the timestamp
    };
        onSubmit(updatedReview)
        onClose()
    }

    return ( 
        <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center">
        
        {/* Popup Card */}
        <div id="popupCard" className="flex flex-col items-center justify-start w-[65%] h-[78%] rounded-md border-2 border-[#391e1e] bg-[#fbfbfb] text-lg py-14 px-16 gap-8">
            {/* {1} */}
            <div className='bg-transparent h-[60px] w-full overflow-x-hidden flex flex-row items-center font-bold text-[40px] gap-2'> <Library className=' bg-transparent min-w-[50px]' size={50}/> 
            <span className='bg-transparent flex-1 whitespace-nowrap'>{cardData.book_title} - {cardData.book_author}</span> 
            </div>
            
            <div className=' bg-transparentfont-bold text-[1.2em] h-[60%] w-full overflow-y-scroll'>
                <textarea  
                    placeholder='Enter your honest thoughts, no filters'
                    className=' text-[#391e1e] placeholder:text-[#391e1e] p-2 border-2 border-[#391e1e]  w-[100%] h-full bg-transparent focus:outline-none'
                    name="message"
                    value={cardData.message}
                    onChange={handleChange}
                    >
                </textarea >
            </div>

            <div className=' bg-transparent text-[1.1em] gap-4 py-2 w-full border-2 border-[#391e1e] overflow-x-hidden'>
                <input
                    placeholder='Enter your name, initials or leave empty to remain anonymous'
                    name="user_name"
                    className='placeholder:text-[#391e1e] '
                    value={cardData.user_name}
                    onChange={handleChange}
                ></input>
            </div>
            <div className='w-full mt-3 flex justify-end bg-transparent'><button onClick={()=>handleSubmit()}className='border-2 px-4 rounded-lg border-[#391e1e] '>Submit</button> </div>
            
            </div>
      </div>
           
    );
};

export default AddCard;
