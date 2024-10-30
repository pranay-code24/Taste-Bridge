import { Link } from "react-router-dom"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";

const Navbar = () => {
    const admin = true;
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-14">
                <Link to="/">
                    <h1 className="font-bold md:font-extrabold text-2xl">TasteBridge</h1>
                </Link>
                <div className="hidden md:flex items-center gap-10">
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/order/status">Order</Link>
                    </div>
                    {
                        admin && (
                            <Menubar>
                                <MenubarMenu>
                                    <MenubarTrigger>
                                        Dashboard
                                    </MenubarTrigger>
                                    <MenubarContent>
                                        <Link to="/admin/restaurant">
                                            <MenubarItem>Restaurant</MenubarItem>
                                        </Link>
                                        <Link to="/admin/menu">
                                            <MenubarItem>Menu</MenubarItem>
                                        </Link>
                                        <Link to="/admin/orders">
                                            <MenubarItem>Orders</MenubarItem>
                                        </Link>
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar