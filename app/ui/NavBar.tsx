import logoDark from "../../public/logo-dark.svg";
import logoLight from "../../public/logo-light.svg";

import { Link, NavLink } from "@remix-run/react";
import { useTheme } from "remix-themes";
import { Container } from "./Container";
import { NavMenu } from "./NavMenu";
import { ThemeButton } from "./ThemeButton";
import { Typography } from "./Typography";
import { Button } from "./Button";
import { Menu } from "lucide-react";
import { SideSheet } from "./SideSheet";

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
                        <Typography.Serif className="text-xl font-semibold">
                            Haakon Svane
                        </Typography.Serif>
                    </Link>
                    <NavMenu.List data-orientation="horizontal" className="hidden md:flex">
                        <NavMenu.Item value="projects">
                            <NavMenu.Link href={"/projects"}>Projects</NavMenu.Link>
                        </NavMenu.Item>
                        <NavMenu.Item value="blog">
                            <NavMenu.Link href={"/blog"}>Blog</NavMenu.Link>
                        </NavMenu.Item>
                    </NavMenu.List>

                    <SideSheet>
                        <SideSheet.Trigger asChild className="flex md:hidden">
                            <Button variant="outline" className="rounded-full">
                                <Menu />
                            </Button>
                        </SideSheet.Trigger>

                        <SideSheet.Content>
                            <NavMenu.List
                                data-orientation="vertical"
                                className="flex-col text-xl items-start gap-2"
                            >
                                <NavMenu.Item value="projects" asChild>
                                    <NavLink to="/projects" className="w-full font-semibold">
                                        Projects
                                    </NavLink>
                                </NavMenu.Item>

                                <NavMenu.Item value="blog" asChild>
                                    <NavLink to="/blog" className="w-full font-semibold">
                                        Blog
                                    </NavLink>
                                </NavMenu.Item>
                            </NavMenu.List>

                            <ThemeButton />
                        </SideSheet.Content>
                    </SideSheet>

                    <ThemeButton className="hidden md:flex" />
                </Container>
            </NavMenu>
        </header>
    );
};
