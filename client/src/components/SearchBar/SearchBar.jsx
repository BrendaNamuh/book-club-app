import {React, useState} from 'react'

import {FaSearch} from 'react-icons/fa'
import './SearchBar.css'

export const SearchBar =  ({ setShowSearchResults, setResults, inputValue, onInputChange })=>{

    const [input,setInput] = useState('')
    
    // THIS FILTERING SHOULD BE DONE ON BACKEND. MEANING:
    // SEND SEARCHINPUT TO BACKEND AND ONLY GET BACK THE RELEVANT DATA
    async function fetchData(searchInput,startIndex, maxResults){
        const query = searchInput.replace(' ', '+');
        const url = `https://openlibrary.org/search.json?title=${query}&limit=3&fields=title,author_name,cover_i`
        console.log('Current request: ', url)
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Convert response to json  
            const data = await response.json();
            // Retrieve docs from response
            const results = data.docs || [];
            console.log('Book Results: ',results)
            const titles = results.map((doc)=>doc.title)
            console.log('Titles to show in search results: ',titles)
            setResults(results)

            //Retrieve cover
            //cover_img = url`https://covers.openlibrary.org/b/id/${docs[0].cover_i}.jpg`
           
            //title author_name cover_i
            //https://covers.openlibrary.org/b/id/${cover_i}.jpg
            
            ////


            //volumeInfo.imageLinks.thumbnail
            //volumeInfo.title
            //volumeInfo.authors
            //volumeInfo.description
            // if (data.items && data.items.length > 0) {
                // let books = data.items.filter((book)=>
                //     book.saleInfo.saleability === 'FOR_SALE' && book.accessInfo.viewability === 'ALL_PAGES'
                // )
                // const book = data.items[0].volumeInfo;
                // const description = book.description || 'No description available.';
                // const coverImage = book.imageLinks ? book.imageLinks.thumbnail : 'No cover image available.';
                // console.log(description,coverImage)
                //console.log()
                // return { description, coverImage };
            // } else {
            //     return { description: 'No books found.', coverImage: null };
            // }
            // return {
            //     items:docs,
            //     totalItems: data.totalItems,
            //     nextStartIndex: startIndex + maxResults,
            // };
        } catch (error) {
            console.error('Error fetching data:', error);
            // return { description: 'Error fetching data from API.', coverImage: null };
        }
        // fetch(url)
        // .then((response)=> response.json())
        // .then((json)=> {
        //     const results = json.filter((user)=>{
        //         return user && user.name && user.name.toLowerCase().includes(searchInput)
        //     });
        //     setResults(results)
        // })
        

    }// end of fetchData

   

    const handleChange = (event)=>{
        // setShowSearchResults(true);
        onInputChange(event)
        // setInput(value)
        fetchData(event.target.value)
    }

    return(
        <div 
         className=' bg-white rounded-lg p-3 mt-1 w-90 h-10 border-gray-70 flex items-center'
        >
            <FaSearch id='search-icon' className="mr-2 bg-transparent text-s " />
            <input 
            placeholder='Search book by title' 
            value={inputValue} 
            onChange={handleChange}
            >
            </input>

        </div>
        
    ) 

}

export default SearchBar;