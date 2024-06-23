import { Outlet } from "react-router-dom";
import Chatbox from "./Chatbox";
import Footer from "./Footer";
import LeftHeader from "./LeftHeader";
import Leftbar from "./Leftbar";
import RightHeader from "./RightHeader";


export default function Layout() {
  return (
  <div id="main-wrapper">
    <LeftHeader></LeftHeader>
    <Chatbox></Chatbox>
    <RightHeader></RightHeader>
    <Leftbar></Leftbar>
    <div className="content-body">
      <div className="container-fluid">
        <Outlet></Outlet>
      </div>
    </div>
    <Footer></Footer>
  </div>

  )
}
