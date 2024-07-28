import Reviews from './reviews';
import Gallery from './gallery';

export default function Home() {
  return (
    <div>
      <div className='container mx-auto justify-items-center'>
        <Gallery/>
      </div>
      <div className='container mx-auto justify-items-center'>
        <Reviews/>
      </div>
    </div>
  );
}
