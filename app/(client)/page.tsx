import Hero from './hero';
import Reviews from './reviews';
import Showcase from './showcase';
import Socials from './socials';

export default function Home() {
  return (
    <div>
      <Hero/>
      <Showcase/>
      <Reviews/>
      <Socials/>
    </div>
  );
}
