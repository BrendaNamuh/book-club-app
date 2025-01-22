import React,{useEffect, useState} from 'react';
// import './PastEvents.css'
import {AddCard} from '../Popup/AddCard.jsx'
import {Library, ChevronRight, ChevronLeft,Plus } from 'lucide-react';;
const PastEvents = () => {





  const [viewMode, setViewMode] = useState('individual'); // 'grid' or 'individual'
  const [currentCard, setCurrentCard] = useState({});
  const [isPopupVisible, setisPopupVisible] = useState(false);
  const [cardList,setCardList] = useState([]);

  useEffect(() => {
    console.log('cardList length has changed:', cardList.length);
  }, [cardList]);  // This will trigger every time cardList changes
  
  
  
  
  useEffect( () => {
    const fetchReviews = async () => {
      console.log('Fetching Reviews ...')
      const response = await fetch(apiUrl)
      const reviews = await response.json()
      console.log('Review Response from backend: ',reviews )
      if (Array.isArray(reviews)) {
        //Add index to each card in cardlist
        const reviewsWithIndex = reviews.map((review, index) => ({
          ...review,
          index: reviews.length - index, // Add the position as the index
        }));

        setCardList(reviewsWithIndex);
        setCurrentCard(reviewsWithIndex[0])
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
    newCardInfo["index"] = cardList.length +1
    
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
      else if (responseData['code']===1){ 
        console.log("Failed to submit review to DB")
      }
      // User has not already submitted a review 
      else{
        console.log("Succesfully submitted review to DB !")
      
        // Update currentCard
        setCurrentCard(newCardInfo); 
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
    const nextCardPos = cardList.length +1 - currentCard.index 
    const nextCard = cardList[nextCardPos]
    setCurrentCard(nextCard)
    
  };

  const handlePrevious = () => {
    // disp  = length - pos
    // - disp + lenght -1
    // const prevCardIndex =  cardList.length - ((currentCard.index +1) +1)
    const prevCardIndex =  cardList.length - 1 - currentCard.index 
    const prevCard = cardList[prevCardIndex]
    setCurrentCard(prevCard)
  };

  return (
    <div className=" h-[85vh] mt-10 mx-auto w-[92%] flex items-start justify-center">
      <button onClick={handleViewChange} className='absolute top-[26.5px] right-[65px] text-[#391e1e]'> {viewMode === 'grid' ? 'View Individual Cards' : 'Back to Grid'}</button>
      {viewMode === 'grid' ? (
        // GRID VIEW
        <div
          className="img-grid grid gap-[18px] h-auto w-full"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))' }}
        >
          {/* Uncomment or fix the JSX inside if needed */}
          <div 
            key={-1} 
            className="h-[300px] w-full rounded-md shadow-lg flex items-center justify-center border-[1px] border-[#391e1e]"
            onClick={() => {
              togglePopup();
            }}
          >
            <Plus className="bg-transparent" size={30}></Plus>
          </div>
  
          {isPopupVisible && (
            <AddCard
              isVisible={isPopupVisible}
              onClose={togglePopup}
              onSubmit={(card) => handleAddCard(card)}
            ></AddCard>
          )}
  
          {cardList.map((card, index) => (
            <div
              key={index}
              className="h-[300px] w-full rounded-md pb-12 pt-6 px-6 shadow-md border-[1px] border-[#391e1e]"
              onClick={() => {
                setCurrentCard(card);
                setViewMode('individual');
              }}
            >
              <div className="text-[14px] bg-transparent">{card.index}</div>
              <div className="bg-transparent border-2 border-double border-transparent px-1 w-full flex flex-row mt-2 items-center font-extrabold text-[22px]">
                <Library className="bg-transparent pb-1" size={30} />{" "}
                <span className="bg-transparent">
                  {card.book_title} - {card.book_author}
                </span>
              </div>
              <div className="bg-transparent border-[0.5px] border-transparent px-2 text-[16px] h-32 overflow-y-scroll py-2 mt-4 w-full">
                {card.message}
              </div>
              <div className="bg-transparent border-2 border-double border-transparent px-1 text-[14px] mt-4 w-full">
                {card.user_name}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // INDIVIDUAL VIEW
        <div className="flex flex-col items-center justify-center w-[1500px] h-[650px] ml-auto mr-auto">
          <div className="h-[550px] w-[80%] rounded-md shadow-lg border-2 border-[#391e1e] flex flex-col justify-start text-lg pb-20 pt-10 px-14">
            <div>{currentCard.index }</div>
            <div className="bg-transparent mt-4 w-full overflow-x-hidden h-[85px] min-h-[85px] flex flex-row items-center text-[2.3em] font-bold gap-2">
              <Library className="bg-transparent min-w-[50px]" size={50} />{" "}
              <span className="bg-transparent whitespace-nowrap">
                Normal People - Sally Rooney
              </span>
            </div>
            <div className="text-[1.3em] mt-7 p-4 h-[400px] w-full overflow-y-hidden">
              {currentCard.message}
            </div>
            <div className="text-[1.1em] mt-8 gap-4 py-2 w-full">
              {currentCard.user_name}
            </div>
          </div>
            {/* ARROW DIV */}
            <div className="flex justify-between w-full mt-4">
            <button 
              className=" p-2 rounded" 
              onClick={handlePrevious} 
              disabled={currentCard.index === cardList.length}
            >
              <ChevronLeft size={32} className='text-[#508d86] bg-transparent' />
            </button>

            <button 
              className="p-1 rounded" 
              onClick={handleNext} 
              disabled={currentCard.index === 1}
            >
              <ChevronRight size={32} className='text-[#508d86] bg-transparent'/>
            </button>
          </div> 

        </div>
        
      )}


           

    
    </div>
    
  );}
  

export default PastEvents;
