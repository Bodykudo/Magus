import LandingNavbar from './_components/LandingNavbar';
import LandingHero from './_components/LandingHero';
import LandingContent from './_components/LandingContent';

export default function LandingPage() {
  return (
    <div className='h-full'>
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}
