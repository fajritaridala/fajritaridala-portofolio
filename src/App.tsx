import { Home } from "./components";
import ComingSoon from "./components/Loading/ComingSoon";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";

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
            <main>
              <Home />
            </main>
          }
        />
      </Routes>
    </>
  );
}
