
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Sidebar from "./Components/Header/Sidebar";
import LandingPage from "./Components/LandingPage/LandingPage";
import Product from "./Components/Record/Product/Product";

function App() {
  return (
    <>
    <BrowserRouter>
      <Sidebar/>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/add" element={<Product />}/>
        </Routes>
      </main>
    </BrowserRouter>
    </>
  );
}

export default App;



