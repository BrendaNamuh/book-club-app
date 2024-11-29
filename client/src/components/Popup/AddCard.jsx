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
        const updatedReview  = {...cardData,timestamp:currentTimestamp}
        onSubmit(updatedReview)
        onClose()
    }

    return ( 
        <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center">
        
        {/* Popup Card */}
        <div id="popupCard" className="flex flex-col items-center justify-start w-[70%] h-[60%] rounded-md border-2 border-double border-[#dc143c34] bg-[#fbfbfb] text-lg py-6 px-14 gap-4">
            {1}
            <div className='border-2 border-double bg-transparent border-[#dc143ca2] w-full flex flex-row items-center font-bold text-[2em] gap-2'> <Library className='bg-transparent' size={50}/> <span className='bg-transparent'>{cardData.book_title} - {cardData.book_author}</span> </div>
            
            <div className='border-2 border-double bg-transparent border-[#dc143ca2] font-bold text-[1.2em] h-[60%] w-full overflow-y-scroll'>
                <textarea  
                    placeholder='Enter a secret, a reflection or a review'
                    className=' text-[#391e1e] placeholder:text-[#391e1e] border-2 pb-10 w-[100%] h-full bg-transparent'
                    name="message"
                    value={cardData.message}
                    onChange={handleChange}
                    >
                </textarea >
            </div>

            <div className='border-2 border-double bg-transparent border-[#dc143ca2] font-bold text-[1.1em] gap-4 py-2 w-full'>
                <input
                    placeholder='Enter your name or initials or leave empty to remain anonymous'
                    name="user_name"
                    className='placeholder:text-[#391e1e] '
                    value={cardData.user_name}
                    onChange={handleChange}
                ></input>
            </div>
            <div className='w-full mt-3 flex justify-end bg-transparent'><button onClick={()=>handleSubmit()}className='border-2 px-4 rounded-lg '>Submit</button> </div>
            
            </div>
      </div>
    //   </div>
           
    );
};

export default AddCard;
