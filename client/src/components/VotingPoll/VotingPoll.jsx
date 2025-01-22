import React, { useState,useEffect } from 'react';
import './VotingPoll.css';
import {Popup} from '../Popup/Popup.jsx';

export const VotingPoll = ({setSelectedBook}) => {
  const apiUrl = "https://81k7sc1065.execute-api.us-east-2.amazonaws.com/dev/votes"


  const [votes, setVotes] = useState([]);
  const [isLocked, setIsLocked] = useState(false);
  

    useEffect(()=>{
      const fetchVotes = async ()=>{
          try{
              const votes_response = await fetch(apiUrl)
              const votes_json = await votes_response.json()
              setVotes(votes_json)
             

              console.log('Votes from backend: ', votes_json)
          }
          catch(error){
              console.log('Error fetching votes: ', error)
          }

      }

      fetchVotes();
      console.log('votes has been updated: ', votes)

    },[])
   
    const [showPopup,setShowPopup] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [displayResults,setDisplayResults] = useState(false)
    const handleBoxClick = (index) => {
      setSelectedIndex(index);
      setSelectedBook(votes[index])
      console.log('Option Selected: ',votes[index].book_title)
    };

    const handleAddBookClick = () =>{
      console.log('Add Book Clicked')
      setShowPopup(true)
      
    }

    const handleSubmit = async () =>{
      const selectedBook = votes[selectedIndex]
      console.log('The user has submited the following vote: ', selectedBook)

      // Send vote to backend
      const currentTimestamp= new Date().toISOString();
      try{
        const response = await fetch(apiUrl, {
          method: 'POST',
          body: JSON.stringify({
            timestamp: currentTimestamp,
            email:`user${Math.floor(Math.random() * 1000000)}@example.com` ,
            book_id: selectedBook.book_id,
            book_title: selectedBook.book_title,
          }),
          headers: {
            'Content-Type': 'application/json', // Specify content type for the request
          },
        });
        //Check if user has voting rights
        const responseData = await response.json()
        console.log('Response from server:', responseData);
        
        // USER HAS ALREADY VOTED
        if (responseData["code"] ==1){
          console.log(responseData["msg"])
        }
        // USER HAS NOT YET VOTED
        else{
          var updated_votes = votes.map((option,index)=>
            index === selectedIndex ? { ...option, count: option.count + 1 } : option
          )
          //Re-calculate percentage
          let total_count = updated_votes.reduce((sum,item)=> sum + item.count,0)
          updated_votes.forEach((item) => {
            item['percentage'] = total_count > 0 ? Math.round((item.count / total_count) * 100) : 0;
          });
          console.log(updated_votes)
          setVotes(updated_votes)
          setDisplayResults(true)
          setIsLocked(true)
        }
      }
      catch(error){
        console.log('Error w/ post request: ', error)
      }
      
      
      
    }
  
    const onPopupClose = (email,bookSelected) =>{
      if (email != null){
        console.log('Popup is closed and weve gathered the valid form: ', email, bookSelected)
        const newVote = { "title": bookSelected.book_title, "count": 1 };
        setVotes(prevVotes => [...prevVotes, newVote]);
      }
      setShowPopup(false)
    }
  
    return (
    // DC143C
      // <div className='mx-auto h-[80%] w-[70%]'> 
      <div className='mx-auto h-full w-full'> 
          <div className="et__box--wrapper">
            <button className='submit-vote-button' onClick={handleSubmit} disabled={isLocked}>Submit Vote</button>
            <div className="et__poll--area  ">
              {votes.map((option, index) => (
                <label
                  key={index}
                  className={`flex flex-row items-center  et__box ${selectedIndex === index ? 'et__selected' : ''}`}
                  onClick={() => !isLocked && handleBoxClick(index) }
                >
                  <div className="et__row bg-transparent ">
                    <div className="et__column bg-transparent">
                      <span className="et__circle"></span>
                      <div className="et__title font-medium bg-transparent pl-3 "
                      >
                      {option.book_title}</div>
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
    </div>
    );
  };

export default VotingPoll;
