import React from "react";
import { useState } from "react";
import { HiOutlineArrowSmUp } from "react-icons/hi";

export default function Colors({ handleClick, paintbrushes, colors }) {
  const [hover, setHover] = useState(false);

  const hoverNote = "Click to change backgrounds!";

  const onHover = (e) => {
    e.preventDefault();
    setHover(true);
    console.log("hovered");
  };

  const noHover = (e) => {
    e.preventDefault();
    setHover(false);
  };

  return (
    <>
      <section className='colors'>
        <h2 id='subtitle'>Custom Decorative Painting of New England </h2>
        <div className='pallet'>
          {hover && (
            <span className='note'>
              <p>
                <HiOutlineArrowSmUp className='arrow' /> {hoverNote}
                <HiOutlineArrowSmUp className='arrow' />
              </p>
            </span>
          )}
          <ul className='pals'>
            <li className='pallet1'>
              <img
                onMouseOver={(e) => onHover(e)}
                onMouseOut={(e) => noHover(e)}
                onClick={handleClick}
                src={paintbrushes[0]}
                alt='paintbrush'
                itemProp={colors[0]}
              />
            </li>
            <li className='pallet2'>
              <img
                onMouseEnter={(e) => onHover(e)}
                onMouseOut={(e) => noHover(e)}
                onClick={handleClick}
                src={paintbrushes[1]}
                alt='silver'
                itemProp={colors[1]}
              />
            </li>
            <li className='pallet3'>
              <img
                onMouseOver={(e) => onHover(e)}
                onMouseOut={(e) => noHover(e)}
                onClick={handleClick}
                src={paintbrushes[2]}
                alt='red'
                itemProp={colors[2]}
              />
            </li>
            <li className='pallet4'>
              <img
                onMouseOver={(e) => onHover(e)}
                onMouseOut={(e) => noHover(e)}
                onClick={handleClick}
                src={paintbrushes[3]}
                alt='green'
                itemProp={colors[3]}
              />
            </li>
            <li className='pallet5'>
              <img
                onMouseOver={(e) => onHover(e)}
                onMouseOut={(e) => noHover(e)}
                onClick={handleClick}
                src={paintbrushes[4]}
                alt='gold'
                itemProp={colors[4]}
              />
            </li>
            <li className='pallet6'>
              <img
                onMouseOver={(e) => onHover(e)}
                onMouseOut={(e) => noHover(e)}
                onClick={handleClick}
                src={paintbrushes[5]}
                alt='gray'
                itemProp={colors[5]}
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
