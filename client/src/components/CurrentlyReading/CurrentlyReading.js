import React from 'react';
import './CurrentlyReading.css'

const CurrentlyReading = () => {
    return(
    <div className='main-content'>
        <div className='book-cover'>
        <img src="https://media.npr.org/assets/img/2024/01/29/martyr_custom-726f99ee2cd5bcd3b319a98eb04eb93002bb30d4.jpg" alt="Book Cover"></img>

        </div>
        <div className='book-detail-container'>
            <div className='book-title'>Martyr!</div>
            <div className='book-author'>Kaveh Akbar</div>
            <div className='book-description'>Cyrus Shams is a young man grappling with an inheritance of violence and loss: his mother’s plane was shot down over the skies of Tehran in a senseless accident; and his father’s life in America was circumscribed by his work killing chickens at a factory farm in the Midwest. Cyrus is a drunk, an addict, and a poet, whose obsession with martyrs leads him to examine the mysteries of his past—toward an uncle who rode through Iranian battlefields dressed as the Angel of death to inspire and comfort the dying, and toward his mother, through a painting discovered in a Brooklyn art gallery that suggests she may not have been who or what she seemed.

Electrifying, funny, wholly original, and profound, Martyr! heralds the arrival of a blazing and essential new voice in contemporary fiction.</div>
        </div>
    </div>
    )
    
};

export default CurrentlyReading;
