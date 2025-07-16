import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { ToastProvider } from './components/Toast';

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
