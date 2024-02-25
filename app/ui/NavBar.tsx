import logoDark from "../../public/logo-dark.svg";
import logoLight from "../../public/logo-light.svg";

import { useTheme } from "remix-themes";
import { NavMenu } from "./NavMenu";
import { Heading } from "./Typography/Heading";
import { ThemeButton } from "./ThemeButton";
import { Link } from "@remix-run/react";

export const NavBar = () => {
    const [theme] = useTheme();
    return (
        <NavMenu className="sticky top-0 z-1 backdrop-filter backdrop-blur-lg bg-opacity-30">
            <Link
                className="flex items-center justify-between h-16 max-w-5xl mx-auto px-4 md:px-8"
                to="/"
            >
                <div className="flex items-center justify-between h-16">
                    <div className="flex gap-4 flex-row align-center justify-center">
                        <img
                            src={theme === "dark" ? logoDark : logoLight}
                            alt="logo"
                            className="w-8 h-8"
                        />
                        <Heading className="text-xl font-semibold">Haakon Svane</Heading>
                    </div>
                </div>
                <NavMenu.List>
                    <NavMenu.Item value="projects">
                        <NavMenu.Link href={"/projects"}>Projects</NavMenu.Link>
                    </NavMenu.Item>
                    <NavMenu.Item value="blog">
                        <NavMenu.Link href={"/blog"}>Blog</NavMenu.Link>
                    </NavMenu.Item>
                </NavMenu.List>
                <ThemeButton />
            </Link>
        </NavMenu>
    );
};
