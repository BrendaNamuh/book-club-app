import React,{useEffect, useState} from 'react';
// import './PastEvents.css'
import {AddCard} from '../Popup/AddCard.jsx'
import {Library, ChevronRight, ChevronLeft,Plus } from 'lucide-react';;
const PastEvents = () => {





  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'individual'
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState({});
  const [isPopupVisible, setisPopupVisible] = useState(false);
  const [cardList,setCardList] = useState([]);
  const [cardListLength,setCardListLength] = useState([]);

  useEffect(() => {
    console.log('cardList length has changed:', cardList.length);
  }, [cardList]);  // This will trigger every time cardList changes
  
  
  
  
  useEffect( () => {
    const fetchReviews = async () => {
      console.log()
      const response = await fetch(apiUrl)
      const reviews = await response.json()
      console.log('Review Response from backend: ',reviews )
      if (Array.isArray(reviews)) {
        setCardList(reviews);
      } else {
        console.error('Fetched data is not an array');
      }
      }
    fetchReviews()
  }
    
  ,[])
  const apiUrl = "https://81k7sc1065.execute-api.us-east-2.amazonaws.com/dev/reviews"



  const handleAddCard = async (newCardInfo) =>{
    console.log('PastEvents Receives: ', newCardInfo)
    newCardInfo["index"] = cardList.length
    
    // Send newCardInfo to DB
    try{
      const response = await fetch(apiUrl,{
        method:"POST",
        headers:{"Content-Type":'application/json'},
        body: JSON.stringify(newCardInfo)
      })
      const responseData = await response.json()
      console.log('Response from backend POST',responseData)
      if (responseData.errorType !== undefined){
        console.log(`POST failed. ${responseData.errorType} occured`)

      }
      // User has already submitted a review 
      else if (responseData['code']==1){ 
        console.log("Failed to submit review to DB")
      }
      // User has not already submitted a review 
      else{
        console.log("Succesfully submitted review to DB !")
      

        // Update the cardList state
        setCardList((prevCardList)=>{
          const updatedCardList = [ newCardInfo, ...prevCardList]
          console.log('Updating frontEnd w/ newCardInfo: ',updatedCardList)
          return updatedCardList
        })
      }
  }
    catch{
      console.log('Error sending review POST request')
    }
  }



  const togglePopup = (event) =>{
    const popupCard = document.getElementById('popupCard');

    // To close popup by clicking outside of it  
    //event.target returns the div that was clicked on 
    if (!popupCard || !event || !popupCard.contains(event.target)){  // better to use .contain than equal ?
      //setCurrentCard({name:'',message:'',index:-1})
      setisPopupVisible(!isPopupVisible)
      console.log('isPopupVisible: ',!isPopupVisible )
      
    }
  }

  const handleViewChange = () => {
    setViewMode(viewMode === 'grid' ? 'individual' : 'grid');
  };

  const handleNext = () => {
    const nextCardIndex =  cardList.length - currentCard.index 
    const nextCard = cardList[nextCardIndex]
    setCurrentCard(nextCard)
    
  };

  const handlePrevious = () => {
    const prevCardIndex =  cardList.length - ((currentCard.index +1) +1)
    const prevCard = cardList[prevCardIndex]
    setCurrentCard(prevCard)
  };

  return (
    // #DC143C
    <div className=" h-[85vh] mt-10 mx-auto w-[92%] flex items-start justify-center">
      {/* <p>Private thoughts are shared publicly here.</p> */}

      {viewMode === 'grid' ? (
        <div        
          className="img-grid grid gap-[2px] h-auto w-full"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))' }}
        >
          <div 
              key={-1}
              className="h-[300px] w-full rounded-md shadow-lg flex items-center justify-center border-[0.5px] border-[#dc143ca2]"
              onClick={() => {
                togglePopup()
              }}
            > 
              <Plus className='bg-transparent' size={30}></Plus>
            </div>
            
          {isPopupVisible && <AddCard isVisible={isPopupVisible} onClose={togglePopup} onSubmit={(card)=>handleAddCard(card)}></AddCard>}
            
          {cardList.map((card, index) => (
            <div 
              key={index} 
              className="h-[300px] w-full rounded-md pb-12 pt-6 px-6 shadow-md border-[0.5px] border-[#dc143ca2]"
              onClick={() => {
                setCurrentCard(card);
                setViewMode('individual');
              }}
            >  
            <div className='text-[14px] bg-transparent'>{card.index + 1}</div>
            <div className=' bg-transparent border-2 border-double border-[#dc143c41] px-1 w-full flex flex-row mt-2 items-center font-bold text-[20px]'> <Library className='bg-transparent pb-1' size={30}/> <span className='bg-transparent'>{card.book_title} - {card.book_author}</span> </div>
            <div className='bg-transparent border-2 border-double border-[#dc143c41] px-1 font-bold text-[14px] h-32 overflow-y-scrollpy-2 mt-4 w-full'> {card.message}</div>
            <div className='bg-transparent border-2 border-double border-[#dc143c41] px-1 font-bold text-[14px] mt-4 w-full'> {card.user_name}</div>
            </div>
          ))}
        </div>
      ) :  (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="h-[550px] w-[90%] rounded-md shadow-lg border-2 border-double border-[#dc143c34] flex flex-col justify-start text-lg pb-20 pt-10 px-14">
            <div className=''>{currentCard.index +1}</div>
            <div className='border-2 border-double bg-transparent border-[#dc143ca2] mt-4 w-full flex flex-row items-center text-[2em] gap-2'> <Library className='bg-transparent' size={50}/> <span className='bg-transparent'>Normal People - Sally Rooney</span> </div>
            <div className='border-2 border-double border-[#dc143ca2] text-[1.2em] mt-4 p-4 h-[400px] w-full'> {currentCard.message}</div>
            <div className=' border-2 border-double border-[#dc143ca2] text-[1.1em] mt-8 gap-4 py-2 w-full'> {currentCard.user_name}</div>


          </div>
          <div className="flex justify-between w-full mt-4">
            <button 
              className=" p-2 rounded" 
              onClick={handlePrevious} 
              disabled={currentCard.index === cardList.length - 1}
            >
              <ChevronLeft size={32} className='text-[#508d86] bg-transparent' />
            </button>

            <button 
              className="p-1 rounded" 
              onClick={handleNext} 
              disabled={currentCard.index === 0}
            >
              <ChevronRight size={32} className='text-[#508d86] bg-transparent'/>
            </button>
          </div>
        </div>
      )}
        <button onClick={handleViewChange} className='absolute top-[26.5px] right-[65px] text-gray-500'> {viewMode === 'grid' ? 'View Individual Cards' : 'Back to Grid'}</button>
    
    </div>
  );

    
};

export default PastEvents;
