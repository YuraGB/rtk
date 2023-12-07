import {Outlet} from "react-router-dom";
import {ReactNode} from "react";


const Layout = (): ReactNode => {

    return (
        <article>
            <Outlet />
        </article>
    )
}

export default Layout
