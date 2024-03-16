import logoDark from "../../public/logo-dark.svg";
import logoLight from "../../public/logo-light.svg";

import { useTheme } from "remix-themes";
import { NavMenu } from "./NavMenu";
import { Heading } from "./Typography/Heading";
import { ThemeButton } from "./ThemeButton";
import { Link } from "@remix-run/react";
import { Container } from "./Container";

export const NavBar = () => {
    const [theme] = useTheme();
    return (
        <header className="sticky top-0 z-10 backdrop-filter backdrop-blur">
            <NavMenu>
                <Container className="flex items-center justify-between h-16 backdrop-filter backdrop-blur">
                    <Link className="flex gap-4 flex-row align-center justify-center" to="/">
                        <img
                            src={theme === "dark" ? logoDark : logoLight}
                            alt="logo"
                            className="w-8 h-8"
                        />
                        <Heading className="text-xl font-semibold">Haakon Svane</Heading>
                    </Link>
                    <NavMenu.List>
                        <NavMenu.Item value="projects">
                            <NavMenu.Link href={"/projects"}>Projects</NavMenu.Link>
                        </NavMenu.Item>
                        <NavMenu.Item value="blog">
                            <NavMenu.Link href={"/blog"}>Blog</NavMenu.Link>
                        </NavMenu.Item>
                    </NavMenu.List>
                    <ThemeButton />
                </Container>
            </NavMenu>
        </header>
    );
};
