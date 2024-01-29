import "./box.css"

import React from 'react'

const Box = ({ mode, color1, color2, color3, color4, color5, alpha1, alpha2, alpha3, alpha4, alpha5 }) => {

    function rgbToHex(rgb) {
        // Extract the RGB components
        const [r, g, b] = rgb.match(/\d+/g);

        // Convert to hexadecimal and ensure two digits
        const toHex = (value) => {
            const hex = Number(value).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };

        // Construct the hexadecimal color code
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    function separateRgb(rgbString) {
        const match = rgbString.match(/\d+/g);
        
        if (match && match.length === 3) {
          const [r, g, b] = match.map(Number);
          return { r, g, b };
        } else {
          // Handle the case where the input is not a valid RGB string
          console.error("Invalid RGB string:", rgbString);
          return { r: 0, g: 0, b: 0 }; // Default values or handle as needed
        }
      }

    return (
        <div className="box" style={{ backgroundColor: `rgba(${separateRgb(color4).r},${separateRgb(color4).g},${separateRgb(color4).b},${alpha4})`, color: `rgba(${separateRgb(color5).r},${separateRgb(color5).g},${separateRgb(color5).b},${alpha5})`, borderWidth: "2px", borderStyle: "outset", borderColor: `rgba(${color4.r},${color4.g},${color4.b},${alpha4 / 2})` }}>
            <h2 className="mode">{mode}</h2>
            <span style={{ backgroundColor: `rgba(${separateRgb(color1).r},${separateRgb(color1).g},${separateRgb(color1).b},${alpha1})`, mixBlendMode: mode }} className="color"><p style={{mixBlendMode: mode}}>{rgbToHex(color1)}</p></span>
            <span style={{ backgroundColor: `rgba(${separateRgb(color2).r},${separateRgb(color2).g},${separateRgb(color2).b},${alpha2})`, mixBlendMode: mode }} className="color"><p style={{mixBlendMode: mode}}>{rgbToHex(color2)}</p></span>
            <span style={{ backgroundColor: `rgba(${separateRgb(color3).r},${separateRgb(color3).g},${separateRgb(color3).b},${alpha3})`, mixBlendMode: mode }} className="color"><p style={{mixBlendMode: mode}}>{rgbToHex(color3)}</p></span>
        </div>
    )
}

export default Box