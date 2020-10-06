import React from 'react';
import './App.css';

const src = 'http://localhost:4000/150.png';

function App() {
  return (
    <div className="App">
      <a href={'/logo192.png'} target="__blank" download={'logo192.png'}>
        <img src={'/logo192.png'} alt="logo" />
      </a>
      <a href={src} target="__blank" download={'150.png'}>
        <img src={src} crossOrigin="anonymous" alt="150" />
      </a>
      <div>
        <img src={'/logo192.png'} alt="logo" />
        <button
          onClick={() => {
            const image = new Image();

            image.src = src;

            image.crossOrigin = 'anonymous';

            image.addEventListener('load', () => {
              const canvas = document.createElement('canvas');

              canvas.width = image.naturalWidth;
              canvas.height = image.naturalHeight;

              canvas.getContext('2d')?.drawImage(image, 0, 0);

              const dataUrl = canvas.toDataURL();

              const a = document.createElement('a');

              a.href = dataUrl;

              a.download = 'programmatic-download.png';

              a.click();
            });
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default App;
