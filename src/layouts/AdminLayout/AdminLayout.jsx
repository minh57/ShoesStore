import { Outlet } from "react-router-dom";
import NavBar1 from "../../components/NavBar1/NavBar1";
import Footer from "../../components/Footer/Footer";

export default function AdminLayout() {
    return (
        <div>
            <NavBar1 />
            
            <h1 style={{ textAlign: 'left' }}>Admin Layout</h1>
            <Outlet />

            <Footer/>
        </div>
    )
}