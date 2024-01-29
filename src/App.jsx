import './App.css'
import Box from './components/Box/Box'
import ColorPicker from './components/ColorPicker/ColorPicker'
import { useState } from "react"

function App() {


  // State to hold the selected colors
  const [color1, setColor1] = useState('rgb(255,0,0');
  const [color2, setColor2] = useState('rgb(0,255,0)');
  const [color3, setColor3] = useState('rgb(0,0,255)');
  const [color4, setColor4] = useState('rgb(160, 160, 160)');
  const [color5, setColor5] = useState('rgb(255, 255, 255)');

  const [alpha1, setAlpha1] = useState(1);
  const [alpha2, setAlpha2] = useState(1);
  const [alpha3, setAlpha3] = useState(1);
  const [alpha4, setAlpha4] = useState(1);
  const [alpha5, setAlpha5] = useState(1);

  // Function to handle color changes
  const handleColorChange = (color, setColor, setAlpha) => {
    setColor((prevState1) => `rgb(${color.r},${color.g},${color.b})`);
    setAlpha((prevState2) => color.a);
    // You can perform additional actions here if needed
  };

  const mixmodes = [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity",
  ]


  return (
    <>
      <div className="titleSection">
        <h1>Mix Blend Mode Test</h1>
        <br />
        <p>The mix-blend-mode property specifies how an element's content should blend with its direct parent background.<br></br><br></br>Here's an interactive demo on how some colors interact with different mix blend modes.</p>
      </div>
      <div className="colorPickers">
        <ColorPicker
          label="Color 1:"
          alpha={alpha1}
          color={color1}
          onColorChange={(color) => handleColorChange(color, setColor1, setAlpha1)}
        />
        <ColorPicker
          label="Color 2:"
          alpha={alpha2}
          color={color2}
          onColorChange={(color) => handleColorChange(color, setColor2, setAlpha2)}
        />
        <ColorPicker
          label="Color 3:"
          alpha={alpha3}
          color={color3}
          onColorChange={(color) => handleColorChange(color, setColor3, setAlpha3)}
        />
        <ColorPicker
          label="BG:"
          alpha={alpha4}
          color={color4}
          onColorChange={(color) => handleColorChange(color, setColor4, setAlpha4)}
        />
        <ColorPicker
          label="Text:"
          alpha={alpha5}
          color={color5}
          onColorChange={(color) => handleColorChange(color, setColor5, setAlpha5)}
        />
      </div>

      <div className="contentSection">
        <div className="boxContainer">
          {mixmodes.map((mode, i) => (
            <Box key={i}
              mode={mode}
              color1={color1}
              color2={color2}
              color3={color3}
              color4={color4}
              color5={color5}
              alpha1={alpha1}
              alpha2={alpha2}
              alpha3={alpha3}
              alpha4={alpha4}
              alpha5={alpha5}
            />
          ))}
        </div>
      </div>
      <section className='footer'>
        <a href="https://github.com/napolidan">
          <img style={{ width: '64px' }} src="/public/whitegit.png" alt="" />
        </a>
      </section>
    </>
  )
}

export default App
