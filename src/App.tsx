import { Routes, Route } from "react-router-dom";
import useMobileDetect from './hooks/useMobileDetect';
import PortifolioMobileLight from "./pages/light/Portifolio_mobile";
import PortifolioDeskLight from "./pages/light/Portifolio_desk";

function App() {
  const isMobile = useMobileDetect();

  if (isMobile) {
    return <PortifolioMobileLight />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<PortifolioDeskLight />} />
      </Routes>
    </>
  );
}

export default App;