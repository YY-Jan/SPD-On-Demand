import {
    NavBtn, NavBtnLink
} from './NavbarElements';

const Navbar = () => {

    return (
        <>
            <NavBtn>
                <NavBtnLink
                    to={{
                        pathname: "/",
                    }}
                >Home
                </NavBtnLink>
            </NavBtn>
            <NavBtn>
                <NavBtnLink
                    to={{
                        pathname: "/input",
                        // state: { accounts }
                    }}
                >Input
                </NavBtnLink>
            </NavBtn>
        </>
    )
};
export default Navbar;
