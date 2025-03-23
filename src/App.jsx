import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
