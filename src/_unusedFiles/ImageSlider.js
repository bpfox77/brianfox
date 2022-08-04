// import { useState } from 'react';
// import alienImg from '../../Assets/alien.png';
// import ETH from './assets/icons8-ethereum-48.png';

// const slideStyles = {
//   width: '100%',
//   height: '100%',
//   borderRadius: '10px',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   marginBottom: '10px',
// };

// const rightArrowStyles = {
//   right: '32px',
//   color: '#0c861c',
//   cursor: 'pointer',
//   fontSize: '45px',
// };

// const leftArrowStyles = {
//   left: '32px',
//   color: '#0c861c',
//   cursor: 'pointer',
//   fontSize: '45px',
// };

// const sliderStyles = {
//   position: 'absolute',
//   height: '100%',
// };

// const ImageSlider = ({ slides, name, number, price }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const slideStylesWidthBackground = {
//     ...slideStyles,
//     backgroundImage: `url(${slides[currentIndex].url})`,
//   };

//   return (
//     <div style={sliderStyles}>
//       <div style={slideStylesWidthBackground}> </div>

//       <div className="details">
//         <div>
//           <span>{name}</span> <br />
//           <h7>#{number}</h7>
//         </div>

//         <div>
//           <span>Price </span>
//           <div className="price">
//             <div>
//               <img width={100} height={100} src={ETH} alt="ETH" />
//             </div>
//             <h7>{Number(price).toFixed(1)}</h7>
//           </div>
//         </div>
//       </div>

//       <div id="row" className="thoughtNavigation">
//         <div>
//           {' '}
//           <p onClick={goToPrevious} style={leftArrowStyles}>
//             ❰
//           </p>
//         </div>
//         <div>
//           <img src={alienImg} className="alien" alt="jacque valle" />
//         </div>
//         <div>
//           {' '}
//           <p onClick={goToNext} style={rightArrowStyles}>
//             ❱
//           </p>
//         </div>
//       </div>
//       {/* <div style={dotsContainerStyles}>
//         {slides.map((slide, slideIndex) => (
//           <div
//             style={dotStyle}
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//           >
//             ●
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default ImageSlider;
