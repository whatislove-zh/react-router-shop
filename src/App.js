import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import MainLayout from "./components/layout/MainLayout";
import NotFound from "./components/NotFound";

function App() {
  return (
    <section className="wrapper">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="contacts" element={<About />} /> 
        
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
