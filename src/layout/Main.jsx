import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
  const location = useLocation()
  
  const pathname = location.pathname;
  const isLogin = pathname?.includes('login') || pathname?.includes('signup');
  return (
    <div>
      {
        isLogin || <Navbar></Navbar>
      }
      <div className="mt-10"><Outlet></Outlet></div>
      {
        isLogin || <Footer></Footer>
      }
    </div>
  );
};

export default Main;
