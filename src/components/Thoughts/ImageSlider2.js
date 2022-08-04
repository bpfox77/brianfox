import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ThoughtsData } from './ThoughtsData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import alienImg from '../../Assets/alien.png';
import ETH from './assets/icons8-ethereum-48.png';

const slideStyles = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  marginBottom: '10px',
};

const rightArrowStyles = {
  right: '32px',
  color: '#0c861c',
  cursor: 'pointer',
  fontSize: '45px',
  width: '30%',
};

const leftArrowStyles = {
  left: '32px',
  color: '#0c861c',
  cursor: 'pointer',
  fontSize: '45px',
  width: '30%',
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
                    </div>

                    <div>
                      <span>Price </span>
                      <div className="price">
                        <div>
                          <img width={100} height={100} src={ETH} alt="ETH" />
                        </div>
                        <h7>{Number(slide.price).toFixed(1)}</h7>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div id="row" className="thoughtNavigation">
                      <FaArrowAltCircleLeft
                        onClick={prevSlide}
                        style={leftArrowStyles}
                      />
                      <div>
                        <img
                          src={alienImg}
                          className="alien"
                          alt="jacque valle"
                        />
                      </div>
                      <FaArrowAltCircleRight
                        onClick={nextSlide}
                        style={rightArrowStyles}
                      />
                    </div>
                  </div>
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
