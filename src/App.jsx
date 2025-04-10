import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Layout from "./components/Layout.jsx";
import MainPage from "./pages/MainPage.jsx";
// import ConvertorPage from './pages/ConvertorPage.jsx';
import NotFoundPage from "./pages/NotFoundPage.jsx";
import NewPage from './pages/NewPage.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<MainPage />} />
            <Route path="convertor" element={<NewPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
