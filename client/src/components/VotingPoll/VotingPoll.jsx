import React, { useState,useEffect } from 'react';
import './VotingPoll.css';
import {Popup} from '../Popup/Popup.jsx';

export const VotingPoll = () => {

  ///// Backend 
  const options = [
    { title: 'Normal People', count: 1 },
    { title: 'Lovely Day', count: 1 },
    { title: 'Book Lovers', count: 1 },
    { title: 'Catcher in the Rye', count: 1 },
  ];
  const [votes, setVotes] = useState([]); // Value in search bar

    useEffect(()=>{
      const fetchVotes = async ()=>{
          try{
              const votes_response = await fetch("/votes")
              const votes_json = await votes_response.json()
              setVotes(votes_json)
              console.log('Votes from backend: ', votes_json)
          }
          catch(error){
              console.log('Error fetching votes: ', error)
          }

      }
      //fetchVotes();
      let total_count = options.reduce((sum,item)=> sum + item.count,0)
      options.map((item)=>{
          item['percentage'] = Math.round((item.count/total_count)*100)
      })
      console.log(options)
      setVotes(options)

    },[])

    /////////
    const [showPopup,setShowPopup] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [displayResults,setDisplayResults] = useState(false)
    const handleBoxClick = (index) => {
      setSelectedIndex(index);
      console.log('Option Selected: ',votes[index].title)
    };

    const handleAddBookClick = () =>{
      console.log('Add Book Clicked')
      setShowPopup(true)
      
    }
    const handleSubmit = () =>{
      console.log('The user has submited the following vote: ')
      setDisplayResults(true)
      
    }
    const onPopupClose = (email,bookSelected) =>{
      if (email != null){
        console.log('Popup is closed and weve gathered the valid form: ', email, bookSelected)
        const newVote = { "title": bookSelected.title, "count": 1 };
        setVotes(prevVotes => [...prevVotes, newVote]);
      }
      setShowPopup(false)
    }
  
    return (
    
      <> 
          <div className="et__box--wrapper">
          {/* <button className='add-book-button' onClick={handleAddBookClick}>Add a book</button> */}
            <button className='submit-vote-button' onClick={handleSubmit}>Submit Vote</button>
            {/* <header className='rounded-t-lg font-bold text-sm mb-10 h-9 flex items-center pb-2'>Please vote for our next read</header> */}
            <div className="et__poll--area">
              {votes.map((option, index) => (
                <label
                  key={index}
                  className={`flex flex-row items-center et__box ${selectedIndex === index ? 'et__selected' : ''}`}
                  onClick={() => handleBoxClick(index)}
                >
                  <div className="et__row bg-transparent">
                    <div className="et__column bg-transparent">
                      <span className="et__circle"></span>
                      <div className="et__title font-medium bg-transparent pl-3 "
                      >
                      {option.title}</div>
                    </div>
                    <div 
                      className="et__percent font-medium bg-transparent"
                      style={{visibility: displayResults ? 'visible' : 'hidden',
                              opacity: displayResults ? 1 : 0,
                      }}>
                      {option.percentage}%
                    </div>
                  </div>
                  <div
                    className="et__progress"
                    style={{
                      visibility: displayResults ? 'visible' : 'hidden',
                      opacity: displayResults ? 1 : 0,
                    }}
                  >
                    <div
                      className="progress-bar"
                      style={{
                        width: displayResults ? `${option.percentage}%` : '0%',
                      }}
                    ></div>
                  </div>
                </label>
              ))}
            </div>
          </div>
     
    {showPopup && <Popup onClose={onPopupClose}/>}
    </>
    );
  };

export default VotingPoll;
