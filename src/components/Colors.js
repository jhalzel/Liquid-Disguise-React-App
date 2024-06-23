// import React from "react";
// import { useState } from "react";
// import { HiOutlineArrowSmUp } from "react-icons/hi";

// export default function Colors({ handleClick, paintbrushes, colors }) {
//   const [hover, setHover] = useState(false);

//   const hoverNote = "Click to change backgrounds!";

//   const onHover = (e) => {
//     e.preventDefault();
//     setHover(true);
//     console.log("hovered");
//   };

//   const noHover = (e) => {
//     e.preventDefault();
//     setHover(false);
//   };

//   return (
//     <>
//       <section className='colors'>
//         <h2 id='subtitle'>Custom Decorative Painting of New England </h2>
//         <div className='pallet'>
//           {hover && (
//             <span className='note'>
//               <p>
//                 <HiOutlineArrowSmUp className='arrow' /> {hoverNote}
//                 <HiOutlineArrowSmUp className='arrow' />
//               </p>
//             </span>
//           )}
//           <ul className='pals'>
//             <li className='pallet1'>
//               <img
//                 onMouseOver={(e) => onHover(e)}
//                 onMouseOut={(e) => noHover(e)}
//                 onClick={handleClick}
//                 src={paintbrushes[0]}
//                 alt='paintbrush'
//                 itemProp={colors[0]}
//               />
//             </li>
//             <li className='pallet2'>
//               <img
//                 onMouseEnter={(e) => onHover(e)}
//                 onMouseOut={(e) => noHover(e)}
//                 onClick={handleClick}
//                 src={paintbrushes[1]}
//                 alt='silver'
//                 itemProp={colors[1]}
//               />
//             </li>
//             <li className='pallet3'>
//               <img
//                 onMouseOver={(e) => onHover(e)}
//                 onMouseOut={(e) => noHover(e)}
//                 onClick={handleClick}
//                 src={paintbrushes[2]}
//                 alt='red'
//                 itemProp={colors[2]}
//               />
//             </li>
//             <li className='pallet4'>
//               <img
//                 onMouseOver={(e) => onHover(e)}
//                 onMouseOut={(e) => noHover(e)}
//                 onClick={handleClick}
//                 src={paintbrushes[3]}
//                 alt='green'
//                 itemProp={colors[3]}
//               />
//             </li>
//             <li className='pallet5'>
//               <img
//                 onMouseOver={(e) => onHover(e)}
//                 onMouseOut={(e) => noHover(e)}
//                 onClick={handleClick}
//                 src={paintbrushes[4]}
//                 alt='gold'
//                 itemProp={colors[4]}
//               />
//             </li>
//             <li className='pallet6'>
//               <img
//                 onMouseOver={(e) => onHover(e)}
//                 onMouseOut={(e) => noHover(e)}
//                 onClick={handleClick}
//                 src={paintbrushes[5]}
//                 alt='gray'
//                 itemProp={colors[5]}
//               />
//             </li>
//           </ul>
//         </div>
//       </section>
//     </>
//   );
// }


import { set } from "firebase/database";
import React, { useState } from "react";
import { HiOutlineArrowSmUp } from "react-icons/hi";

export default function Colors({ handleClick, paintbrushes, colors, setBack }) {
  const [hover, setHover] = useState(true);
  const [currentPallet, setCurrentPallet] = useState(null);
  const [lastClickedColor, setLastClickedColor] = useState(null);
  const hoverNote = "Change Background Colors!";

  // Modified handleClick to update lastClickedColor
  const modifiedHandleClick = (e) => {
    handleClick(e); // Call the original handleClick function
    // Update lastClickedColor with the current color
    let color = e.target.attributes[2].nodeValue;
    setLastClickedColor(color);
  };

    // Temporary background change on hover
  const handleHover = (e) => {
    console.log("current background: ", currentPallet);
    console.log('e.currentTarget', e.currentTarget);
    // Current pallet
    setCurrentPallet(e.currentTarget);
    // Pallet's background image
    let color = e.target.attributes[2].nodeValue;
    // Add invert class to pallets for effect
    // Temporarily set background image/color
    setBack(color); // This temporarily changes the background
  };

  const handleHoverOut = () => {
    // Revert background image/color to default or previous state
    // You need to have a default or previous background color stored to revert to it
    // For demonstration, let's assume 'defaultColor' is your default background color
    setBack(lastClickedColor); // Revert to default or previous background color
    setHover(false);
  };

  return (
    <section className="colors">
      {/* <h3 id="subtitle">Custom Decorative Painting of New England</h3> */}
      <div className="pallet">
      {hover && (
            <span className='note'>
              <p>
                <HiOutlineArrowSmUp className='arrow' /> {hoverNote}
                <HiOutlineArrowSmUp className='arrow' />
              </p>
            </span>
          )}
        <ul className="pals">
          {paintbrushes.map((paintbrushUrl, index) => (
            <li key={index} className={`pallet${index + 1}`}>
              <img
                onMouseOver={(e) => { handleHover(e); setHover(true); }}
                onMouseOut={handleHoverOut}
                onBlur={handleHoverOut}
                onClick={modifiedHandleClick}
                src={paintbrushUrl}
                alt={colors[index]}
                itemProp={colors[index]}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}