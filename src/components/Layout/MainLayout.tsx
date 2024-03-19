import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Header from "../../Pages/Shared/Header/Header";
import DashboardMenu from "../../Pages/Shared/DashboardMenu/DashboardMenu";

function MainLayout() {
  return (
    <div className="flex w-full">
      <DashboardMenu></DashboardMenu>
      <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default MainLayout;
