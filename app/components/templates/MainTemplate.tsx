import { Navbar, Footer } from '../organisms';

interface MainTemplateProps {
  children: React.ReactNode;
}

export default function MainTemplate({ children }: MainTemplateProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
