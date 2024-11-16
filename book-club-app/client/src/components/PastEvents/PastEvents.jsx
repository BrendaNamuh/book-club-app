import React from 'react';
import './PastEvents.css'

const PastEvents = () => {







    const img_sources = [
        'https://media.istockphoto.com/id/1438424750/vector/book-club-leisure-vector-illustration-with-group-of-diversity-people-read-books-sitting-or.jpg?s=612x612&w=0&k=20&c=V2kNJt4vn5Ar26uzjXaUcbF27Naq8ZL_lVzU_8avbIY=',
        'https://d7hftxdivxxvm.cloudfront.net/?height=455&quality=85&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FIpHEGWsdTTs_EAhJjBdtMg%2Fmain.jpg&width=800',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
    ]
    
    return (
        <>
        <h1 className='header'>Past Event & Media</h1>
        <div className="img-grid">
            { img_sources.map((source,index)=>(
                <img className='img-wrapper' key={index} src='https://media.istockphoto.com/id/1438424750/vector/book-club-leisure-vector-illustration-with-group-of-diversity-people-read-books-sitting-or.jpg?s=612x612&w=0&k=20&c=V2kNJt4vn5Ar26uzjXaUcbF27Naq8ZL_lVzU_8avbIY='/>
            
            ))

            }

        </div>
        </>

    )
    
    
    // <h1 style={{ border: 'solid 2px black' }}>PastEvents Page</h1>;
};

export default PastEvents;
