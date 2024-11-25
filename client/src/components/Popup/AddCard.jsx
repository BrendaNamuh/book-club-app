import { useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar.jsx'; 
import { SearchResults } from '../SearchBar/SearchResults.jsx'; 
// import {FaSearch} from 'react-icons/fa'
import { Library } from 'lucide-react';



export const AddCard = ({isVisible, onClose, onSubmit,index }) => {

    const [cardData,setCardData] = useState({
        book: 'Normal People - Sally Rooney',
        message:'',
        name:'',
        index:index
    })
   
    // Triggered when a chaneg occurs in inputs
    const handleChange = (event)=>{
        console.log('input updating')
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
        console.log('Submittted new card')
        console.log(cardData)
        onSubmit(cardData)
        setCardData({
            book: 'Normal People - Sally Rooney',
            message:'',
            name:'',
        })
        onClose()

       

    }


    if (!isVisible) return null;

    return (
        
        <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center">
        
        {/* Popup Card */}
        <div id="popupCard" className="flex flex-col items-center justify-start w-[70%] h-[60%] rounded-md bg-[#6cc2b8] border-2 border-[#ecc4e3] text-lg py-6 px-14 gap-4">
            {1}
            <div className='border-2 bg-transparent border-black w-full flex flex-row items-center font-bold text-[2em] gap-2'> <Library className='bg-transparent' size={50}/> <span className='bg-transparent'>Normal People - Sally Rooney</span> </div>
            
            <div className=' bg-transparent font-bold text-[1.2em] h-[60%] w-full overflow-y-scroll border-2 border-black'>
                <textarea  
                    placeholder='Enter a secret, a reflection or a review'
                    className=' border-black border-2 pb-10 w-[100%] h-full bg-transparent'
                    name="message"
                    value={cardData.message}
                    onChange={handleChange}
                    >
                </textarea >
            </div>

            <div className='bg-transparent  font-bold text-[1.1em] gap-4 py-2 w-full border-2 border-black'>
                <input
                    placeholder='Enter your name or initials or leave empty to remain anonymous'
                    name="name"
                    value={cardData.name}
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
