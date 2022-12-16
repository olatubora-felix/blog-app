import { useState, useEffect, useContext } from "react";
import { Navbar, MobileNav } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

import Menu from "./Menu";
import Lists from "./Lists";

export default function MenuBar() {
  const context = useContext(AuthContext);
  const [openNav, setOpenNav] = useState(false);

  const { users, logout } = context;

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className=" py-2 px-4 lg:px-8 lg:py-4" fullWidth>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/dashboard" className="text-2xl font-bold text-blue-500">
          Mereev
        </Link>
        <div className="hidden md:block">
          <Lists users={users} logout={logout} />
        </div>
        <Menu openNav={openNav} setOpenNav={setOpenNav} />
      </div>
      <MobileNav open={openNav}>
        <div className="block md:hidden">
          <Lists users={users} logout={logout} />
        </div>
      </MobileNav>
    </Navbar>
  );
}
