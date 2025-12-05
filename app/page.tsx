import { HeroSection } from './components/organisms';
import { MainTemplate } from './components/templates';

export default function Home() {
  return (
    <div id="page" className="site">
      <MainTemplate>
        <HeroSection />
      </MainTemplate>
    </div>
  );
}
