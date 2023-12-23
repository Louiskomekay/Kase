import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const HomeLayout = () => {
    return (
        <>
            <Navbar />
            <section className="layoutWidth">
                <Outlet />
            </section>
        </>
    )
}

export default HomeLayout