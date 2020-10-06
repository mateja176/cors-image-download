import React from 'react';
import './App.css';

const src = 'http://localhost:4000/150.png';

function App() {
  return (
    <main style={{ margin: 20 }}>
      <section>
        <h2>Same Origin Download</h2>
        <a href={'/logo192.png'} target="__blank" download={'logo192.png'}>
          <img src={'/logo192.png'} alt="logo" />
        </a>
      </section>
      <section>
        <h2>Download Cross Origin Using Anchor</h2>
        <a href={src} target="__blank" download={'150.png'}>
          <img src={src} alt="150" />
        </a>
        <section>
          <h3>With Cross Origin Anonymous</h3>
          <a href={src} target="__blank" download={'150.png'}>
            <img src={src} crossOrigin="anonymous" alt="150" />
          </a>
        </section>
      </section>
      <section>
        <h2>Download Using Canvas</h2>
        <img
          src={src}
          alt="logo"
          style={{ cursor: 's-resize' }}
          onClick={() => {
            const image = new Image();

            image.src = src;

            // * circumvents "Tainted canvas may not be exported error"
            image.crossOrigin = 'anonymous';

            image.addEventListener('load', () => {
              const canvas = document.createElement('canvas');

              canvas.width = image.naturalWidth;
              canvas.height = image.naturalHeight;

              canvas.getContext('2d')?.drawImage(image, 0, 0);

              const dataUrl = canvas.toDataURL();

              const a = document.createElement('a');

              a.href = dataUrl;

              const [download] = src.split('/').reverse();
              a.download = download;

              a.click();
            });
          }}
        />
      </section>
    </main>
  );
}

export default App;
