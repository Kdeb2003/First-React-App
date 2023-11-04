import React from 'react';
import './CardGrid.css';

function CardGrid() {
  // Create an array of image file names
  const imageFileNames = [
    'Image.png',
    'Image 1.png',
    'Image 2.png',
    'Image 3.png',
    'Image 4.png',
    'Image 5.png',
    'Image 6.png',
    'Image 7.png',
    'Image 8.png',
    'Image 9.png',
    'Image 10.png',
    'Image 11.png',
    'Image 12.png',
    'Image 13.png',
    'Image 14.png',
    'Image 15.png',
    'Image 16.png',
    'Image 17.png',
    'Image 18.png',
    'Image 19.png',
    'Image 20.png',
    'Image 21.png',
    'Image 22.png',
    'Image 23.png',
    'Image 24.png',
    'Image 25.png',
    'Image 26.png',
    'Image 27.png',
    'Image 28.png',
    'Image 29.png',
    'Image 30.png',
    'Image 31.png',
    'Image 32.png',
    'Image 33.png',
    'Image 34.png',
    'Image 35.png',
  ];

  return (
    <div className="card-grid-container">
      <div className="card-grid">
        {imageFileNames.map((imageName, index) => (
          <div className="card" key={index}>
            <img src={`/images/${imageName}`} alt={`Card ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
