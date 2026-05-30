import { Hero } from "./components";
import ComingSoon from "./components/Loading/ComingSoon";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import DotGrid from "./components/ReactBits/DotGrid";

export default function App() {
  const isProduction: boolean = import.meta.env.PROD;
  if (isProduction) return <ComingSoon />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="relative h-1000 border px-6 lg:px-18">
              <div className="absolute inset-0 z-0 h-full">
                <DotGrid
                  dotSize={3}
                  gap={12}
                  baseColor="#1c1c1c"
                  activeColor="#facc14"
                  proximity={150}
                  shockRadius={250}
                  shockStrength={5}
                  resistance={750}
                  returnDuration={1.5}
                />
              </div>
              <Hero />
            </main>
          }
        />
      </Routes>
    </>
  );
}
