import { useState } from 'react'
import  './SearchResults.css'

export const SearchResults = ({onSelect,results}) => {
    console.log('onSelect in Component C:', onSelect);

    const submitInput = (selectedInput) =>{
        console.log('The user selects: ',selectedInput )
        onSelect(selectedInput)
    }
    return (
   <div className="mt-1.5 border-transparent-700 border-2 w-90 max-h-28 bg-white rounded-lg overflow-y-auto">
    {
        results.map((result,index)=> {
            // return <div className='search-result' onClick={()=>submitInput(result)} key={index}>{result.title}</div>
            return <div className='bg-white p-2 border-gray-200 border-[0.2px]' onClick={()=>submitInput(result)} key={index}>{result.title}</div>
        })
    }
    </div> 

    )
}

export default SearchResults;