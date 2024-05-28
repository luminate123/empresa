
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from "next/link";

function NavbarComponent() {
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">Empresa</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link href="/">
                        Home1
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/servicios">
                        Servicios
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/proyectos">
                        Proyectos
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="/clientes">
                        Clientes
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/blog">
                        Blog
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/contacto">
                        Contacto
                    </Link>
                </NavbarItem>
            </NavbarContent>

        </Navbar>
    )
}

export default NavbarComponent