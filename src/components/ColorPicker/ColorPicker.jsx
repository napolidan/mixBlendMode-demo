import React from 'react';
import PropTypes from 'prop-types';
import './colorPicker.css';

const ColorPicker = ({ label, color, onColorChange, alpha }) => {

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

    function hexToRgb(hex, alpha) {
        // Remove the hash if it exists
        hex = hex.replace(/^#/, '');

        // Parse the hex values
        var bigint = parseInt(hex, 16);

        // Extract the RGB components
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        var a = alpha;

        // Return the RGB values as an object
        return { r, g, b, a };
    }

    const handleInputChange = (e) => {
        const selectedColor = hexToRgb(e.target.value, alpha);
        onColorChange(selectedColor);
    };

    const handleAlphaChange = (e) => {
        const newAlpha = parseFloat(e.target.value);
        const selectedColor = hexToRgb(rgbToHex(color), newAlpha);
        onColorChange(selectedColor);
    };

    // console.log(label, color)
    // console.log("alpha", alpha)

    return (
        <div className="colorPicker">
            <label htmlFor="colorPicker1">{label}</label>
            <input
                type="color"
                id="colorPicker"
                value={rgbToHex(color)}
                onChange={handleInputChange}
            />
            <label htmlFor="alphaSlider">Alpha:</label>
            <input
                className='alpha'
                type="range"
                id="alphaSlider"
                min="0"
                max="1"
                step="0.01"
                value={alpha}
                onChange={handleAlphaChange}
            />
            <span>{alpha}</span>
        </div>
    );
};

ColorPicker.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onColorChange: PropTypes.func.isRequired,
};

export default ColorPicker;
