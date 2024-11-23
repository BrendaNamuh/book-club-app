import { useState } from 'react';
import './Popup.css';
import { SearchBar } from '../SearchBar/SearchBar.jsx'; 
import { SearchResults } from '../SearchBar/SearchResults.jsx'; 
// import {FaSearch} from 'react-icons/fa'
import { BookmarkX } from 'lucide-react';


export const Popup = ({isVisible, onClose }) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [emailError, setEmailError] = useState('');
    const [bookError, setBookError] = useState('');
    const [results, setResults] = useState([]);
    const [bookSelected, setBookSelected] = useState({ title: '', author_name: [] });
    const [email, setEmail] = useState('');
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [inputValue, setInputValue] = useState('');

    if (!isVisible) return null;


    
    // Handle input change of search bar
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setShowSearchResults(true);
    };

    const selectSearchResult = (selectedResult) => {
        setBookSelected(selectedResult);
        setInputValue(selectedResult.title);
        setShowSearchResults(false);
    };

    const displaySelectedBook = () => {
        if (bookSelected.title && bookSelected.author_name[0]) {
            return (
                <div className="text-white bg-transparent mt-2 font-bold text-sm">
                    You've selected:<br/> {bookSelected.title} by {bookSelected.author_name[0]}
                </div>
            );
        } else {
            return (
                <div className="text-gray-500 mt-2 font-bold text-sm"></div>
            );
        }
    };

    const isValidForm = () => {
        const isValidEmail = emailRegex.test(email);
        const isValidSelection = bookSelected.title && bookSelected.author_name.length > 0;
        return isValidEmail && isValidSelection;
    };


    const handleSubmission = () => {
        const isValidEmail = emailRegex.test(email);
        const isValidSelection = bookSelected.title && bookSelected.author_name.length > 0;

        // Set errors only if validation fails
        setEmailError(isValidEmail ? '' : 'Please enter a valid email');
        setBookError(isValidSelection ? '' : 'Please select a book');

        if (isValidEmail && isValidSelection) {
            console.log('Valid submission: ',email,bookSelected)
            onClose(email,bookSelected);
        }
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center">
                <div className="bg-[#dbe7e8d2] w-[500px] h-[440px] rounded-xl relative p-10">
                    <button onClick={()=>onClose(null,null)} className="absolute top-2 right-3 text-white"><BookmarkX className='bg-transparent ' size={30} /></button>
                    <h2 className="text-white text-4xl font-bold bg-transparent">Book Submission</h2>
                    <p className="text-white text-s font-bold bg-transparent">What book should we read next?</p>

                    <form className="mt-8 bg-transparent h-[250px]">
                        <div className="font-bold bg-transparent text-white">Email</div>
                        <input
                            className="bg-white rounded-lg p-3 mt-1 w-90 h-10 border-gray-70 ml-0"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <p className="text-gray-500 mt-2 font-bold text-sm">{emailError}</p>}

                        <div className="bg-transparent mt-5 flex flex-col">
                            <div className="font-bold bg-transparent text-white">Select Book</div>
                            <SearchBar
                                setResults={setResults}
                                inputValue={inputValue}
                                onInputChange={handleInputChange}
                            />
                            {bookError && <p className="text-gray-500 mt-2 font-bold text-sm">{bookError}</p>}
                            {showSearchResults && <SearchResults onSelect={selectSearchResult} results={results} />}
                            {/* {!showSearchResults && displaySelectedBook()} */}
                        </div>
                        <div className="mt-12 bg-black border-black border-2 rounded-xl flex items-center justify-center w-54 mb-0">
                        <button
                            className="px-7 text-white font-bold text-sm p-2"
                            onClick={handleSubmission}
                            type="button"
                        >
                            Submit
                        </button>
                    </div>
                    </form>

                    
                </div>
            </div>
        </>
    );
};

export default Popup;
