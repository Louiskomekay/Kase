import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components";
const HomeLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default HomeLayout