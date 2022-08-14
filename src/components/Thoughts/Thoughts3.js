//import './thoughts3.css';
import ImageSlider2 from './ImageSlider2';
import { ThoughtsData } from './ThoughtsData';
import './thoughts.css';

const containerStyles = {
  width: '375px',
  height: '375px',
  margin: '0 auto',
};

function Thoughts3() {
  return (
    <section className="thoughtWrapper">
      <div className="thoughts-about-body">
        <div>
          <b className="purple">THOUGHTS </b> tell the monomyth of
          transcendence. The collection is a short story of Science Fiction
          Satori. It is a hero's journey beyond spacetime, with each of the 49
          pieces being a Koan unto itself.
          <div
            className="openSea"
            onClick={() =>
              window.open(
                'https://opensea.io/collection/thoughts-nowdao?search[sortAscending]=true&search[sortBy]=CREATED_DATE',
                '_blank'
              )
            }
          >
            {' '}
            <u>View the Collection on OpenSea</u>
          </div>
        </div>
      </div>
      <br></br>
      <div className="sliderWrapper">
        <div style={containerStyles}>
          <ImageSlider2 slides={ThoughtsData} />
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
      </div>
    </section>
  );
}

export default Thoughts3;
