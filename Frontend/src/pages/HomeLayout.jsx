import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <>
            <nav>
                <span>KASE</span>
            </nav>
            <Outlet />
        </>
    )
}

export default HomeLayout