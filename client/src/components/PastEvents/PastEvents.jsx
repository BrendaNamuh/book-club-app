import React,{useState} from 'react';
// import './PastEvents.css'
import {AddCard} from '../Popup/AddCard.jsx'
import {Library, ChevronRight, ChevronLeft,Plus } from 'lucide-react';;
const PastEvents = () => {





  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'individual'
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState({});
  const [isPopupVisible, setisPopupVisible] = useState(false);
  const [cardList,setCardList] = useState([
    { book:'Normal People - Sally Rooney', 
      message:'There is nothing normal about those people',
      name: 'BN',
      index:0
    }

  ]);


  const handleAddCard = (newCardInfo) =>{
    //TODO: Validation of card info
    setCardList((prevCardList)=>{
      const updatedCardList = [ newCardInfo, ...prevCardList]
      console.log('Updated card list: ',updatedCardList)
      return updatedCardList
    })
  }

  const togglePopup = (event) =>{
    const popupCard = document.getElementById('popupCard');

    // To close popup by clicking outside of it  
    //event.target returns the div that was clicked on 
    if (!popupCard || !event || !popupCard.contains(event.target)){  // better to use .contain than equal ?
      //setCurrentCard({name:'',message:'',index:-1})
      setisPopupVisible(!isPopupVisible)
      console.log('Submitted Info: ', )
      
    }
    
    console.log('Youve clicked on popupCard')
  }

  const handleViewChange = () => {
    setViewMode(viewMode === 'grid' ? 'individual' : 'grid');
  };

  const handleNext = () => {
    // 4 cards
    // 0, 3
    // 1, 2
    // 2, 1
    // 3, 0

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
    
    <div className=" h-[85vh] mt-10 mx-10 flex items-start justify-center">
      {/* <p>Private thoughts are shared publicly here.</p> */}

      {viewMode === 'grid' ? (
        <div
          className="img-grid grid gap-[2px] h-auto w-full"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))' }}
        >
          <div 
              key={-1}
              className="h-[300px] w-full rounded-md bg-[#6cc2b8] border-2 border-[#ecc4e3] flex items-center justify-center"
              onClick={() => {
                togglePopup()
              }}
            > 
              
              <Plus className='bg-transparent' size={30}></Plus>
            </div>
            <AddCard isVisible={isPopupVisible} index={cardList.length} onClose={togglePopup} onSubmit={(card)=>handleAddCard(card)}></AddCard>
          {cardList.map((card, index) => (
            <div 
              key={index} 
              className="h-[300px] w-full rounded-md  py-12 px-6 bg-[#6cc2b8] border-2 border-[#ecc4e3]"
              onClick={() => {
                setCurrentCard(card);
                setViewMode('individual');
              }}
            >
            <div className='text-[14px] bg-transparent'>{card.index + 1}</div>
            <div className=' bg-transparent w-full flex flex-row items-center font-bold text-[20px]'> <Library className='bg-transparent pb-1' size={30}/> <span className='bg-transparent'>Normal People - Sally Rooney</span> </div>
            <div className='bg-transparent font-bold text-[14px] h-32 overflow-y-scrollpy-2 mt-4 w-full'> {card.message}</div>
            <div className='bg-transparent font-bold text-[14px] mt-4 w-full'> {card.name}</div>
            </div>
          ))}
        </div>
      ) :  (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="h-[85%] w-full rounded-md bg-[#6cc2b8] border-2 border-[#ecc4e3] flex flex-col justify-start text-lg py-20 px-14">
            {currentCard.index +1}
            <div className='border-2 bg-transparent border-black w-full flex flex-row items-center font-bold text-[2em] gap-2'> <Library className='bg-transparent' size={50}/> <span className='bg-transparent'>Normal People - Sally Rooney</span> </div>
            <div className='bg-transparent  font-bold text-[1.2em] gap-4 h-max-56 py-8 w-full'> {currentCard.message}</div>
            <div className='bg-transparent  font-bold text-[1.1em] gap-4 py-2 w-full'> {currentCard.name}</div>


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
        <button onClick={handleViewChange} className='absolute top-2 right-24 font-bold text-gray-500'> {viewMode === 'grid' ? 'View Individual Cards' : 'Back to Grid'}</button>
    
    </div>
  );

    
};

export default PastEvents;
