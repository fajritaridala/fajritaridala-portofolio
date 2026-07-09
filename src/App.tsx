import { Hero, Skills } from "./components";
import ComingSoon from "./components/Loading/ComingSoon";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import DotGrid from "./components/ReactBits/DotGrid";
import useIsMobile from "./hooks/useIsMobile";

export default function App() {
  const isMobile = useIsMobile();
  const isProduction: boolean = import.meta.env.PROD;
  if (isProduction) return <ComingSoon />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="relative h-1000 px-6 lg:px-18">
              <div className="absolute inset-0 -z-10 h-full">
                <DotGrid
                  dotSize={3}
                  gap={12}
                  baseColor="#1c1c1c"
                  activeColor="#facc14"
                  proximity={isMobile ? 0 : 150}
                  shockRadius={isMobile ? 0 : 250}
                  shockStrength={isMobile ? 0 : 5}
                  resistance={750}
                  returnDuration={1.5}
                />
              </div>
              <Hero />
              <Skills />
            </main>
          }
        />
      </Routes>
    </>
  );
}
