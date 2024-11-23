import React,{useState} from 'react';
// import './PastEvents.css'
import {Popup} from '../Popup/Popup.jsx'
import {Library, ChevronRight, ChevronLeft,Plus } from 'lucide-react';;
const PastEvents = () => {







    // const img_sources = [
    //     'https://media.istockphoto.com/id/1438424750/vector/book-club-leisure-vector-illustration-with-group-of-diversity-people-read-books-sitting-or.jpg?s=612x612&w=0&k=20&c=V2kNJt4vn5Ar26uzjXaUcbF27Naq8ZL_lVzU_8avbIY=',
    //     'https://d7hftxdivxxvm.cloudfront.net/?height=455&quality=85&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FIpHEGWsdTTs_EAhJjBdtMg%2Fmain.jpg&width=800',
    //     'https://picsum.photos/200/300',
    //     'https://picsum.photos/200/300',
    //     'https://picsum.photos/200/300',
    //     'https://picsum.photos/200/300',
    //     'https://picsum.photos/200/300',
    //     'https://picsum.photos/200/300',
    // ]
    let img_sources = Array.from({ length: 50 });
    // return (
        
    //     <div className="border-red-700 border-2 h-[85vh] mt-12 mx-24 flex items-start justify-center">
    //       <div className="img-grid grid  gap-2 h-auto-fill w-full" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))' }}>
    //         {img_sources.map((source, index) => (
    //           <div 
    //           key={index} 
    //           className="h-[100px] w-full rounded-md bg-red-500 text-xs p-5">
    //             Holden reminds me of my boyfriend
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   );
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'individual'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupVisible, setisPopupVisible] = useState(false);

  const togglePopup = () =>{
    setisPopupVisible(!isPopupVisible)
    console.log('switching')
  }

  const handleViewChange = () => {
    setViewMode(viewMode === 'grid' ? 'individual' : 'grid');
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % img_sources.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + img_sources.length) % img_sources.length);
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
              <Popup isVisible={isPopupVisible} onClose={togglePopup}></Popup>
              <Plus className='bg-transparent' size={30}></Plus>
            </div>
          {img_sources.map((source, index) => (
            <div 
              key={index} 
              className="h-[300px] w-full rounded-md  py-12 px-6 bg-[#6cc2b8] border-2 border-[#ecc4e3]"
              onClick={() => {
                setCurrentIndex(index);
                setViewMode('individual');
              }}
            >
            <div className='text-[14px] bg-transparent'>{currentIndex + 1}</div>
            <div className=' bg-transparent w-full flex flex-row items-center font-bold text-[20px]'> <Library className='bg-transparent pb-1' size={30}/> <span className='bg-transparent'>Normal People - Sally Rooney</span> </div>
            <div className='bg-transparent font-bold text-[14px] h-32 overflow-y-scrollpy-2 mt-4 w-full'> There is nothing normal about those people.</div>
            <div className='bg-transparent font-bold text-[14px] mt-4 w-full'> BN</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="h-[85%] w-full rounded-md bg-[#6cc2b8] border-2 border-[#ecc4e3] flex flex-col justify-start text-lg py-20 px-14">
            {currentIndex + 1}
            <div className='border-2 bg-transparent border-black w-full flex flex-row items-center font-bold text-[2em] gap-2'> <Library className='bg-transparent' size={50}/> <span className='bg-transparent'>Normal People - Sally Rooney</span> </div>
            <div className='bg-transparent  font-bold text-[1.2em] gap-4 h-max-56 py-8 w-full'> There is nothing normal about those people.</div>
            <div className='bg-transparent  font-bold text-[1.1em] gap-4 py-2 w-full'> BN</div>


          </div>
          <div className="flex justify-between w-full mt-4">
            <button 
              className=" p-2 rounded" 
              onClick={handlePrevious} 
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={32} className='text-[#508d86] bg-transparent' />
            </button>
            <button 
              className="p-1 rounded" 
              onClick={handleNext} 
              disabled={currentIndex === img_sources.length - 1}
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
