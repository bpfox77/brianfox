import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ThoughtsData } from './ThoughtsData';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

import ETH from './assets/icons8-ethereum-48.png';

const slideStyles = {
  width: '100%',
  height: '100%',
  borderRadius: '30px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  marginBottom: '15px',
  boxShadow: '0 0 2px 8px rgba(51, 151, 86, 0.459)',
};

const rightArrowStyles = {
  right: '32px',
  color: '#5dcf79',
  cursor: 'pointer',
  fontSize: '75px',
  // width: '30%',
};

const leftArrowStyles = {
  left: '32px',
  color: '#5dcf79',
  cursor: 'pointer',
  fontSize: '75px',
  // width: '30%',
};

const sliderStyles = {
  position: 'relative',
  height: '100%',
};

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(current + 1),
    onSwipedRight: () => prevSlide(current - 1),
    preventDefaultTouchmoveEvent: true,
    // ...config,
  });

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const slideStylesWidthBackground = {
    ...slideStyles,

    backgroundImage: `url(${ThoughtsData[current].url})`,
  };

  return (
    <div style={sliderStyles} {...handlers}>
      <div style={slideStylesWidthBackground}> </div>

      {ThoughtsData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div>
                <>
                  <div className="details">
                    <div>
                      <span>{slide.name}</span> <br />
                      <h7>#{slide.number}</h7>
                      <div>
                        <div className="price">
                          <h7>Price: </h7>
                          <div>
                            <img width={100} height={100} src={ETH} alt="ETH" />
                          </div>
                          <h7>{Number(slide.price).toFixed(1)}</h7>
                        </div>
                      </div>
                    </div>
                    <div id="row" className="thoughtNavigation">
                      {/* <FaArrowAltCircleLeft */}
                      <MdArrowBackIosNew
                        onClick={prevSlide}
                        style={leftArrowStyles}
                      />
                      {/* <div>
                        <img
                          src={alienImg}
                          className="alien"
                          alt="jacque valle"
                        />
                      </div> 
                      <FaArrowAltCircleRight*/}
                      <MdArrowForwardIos
                        onClick={nextSlide}
                        style={rightArrowStyles}
                      />
                    </div>
                  </div>
                  <div></div>
                </>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
