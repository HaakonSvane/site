import logoDark from "../../public/logo-dark.svg";
import logoLight from "../../public/logo-light.svg";

import { Link } from "@remix-run/react";
import { Menu } from "lucide-react";
import { useTheme } from "remix-themes";
import { Button } from "./Button";
import { Container } from "./Container";
import { NavMenu } from "./NavMenu";
import { Separator } from "./Separator";
import { SideSheet } from "./SideSheet";
import { ThemeButton } from "./ThemeButton";
import { Typography } from "./Typography";

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

                        <SideSheet.Content className="flex flex-col">
                            <NavMenu.List
                                data-orientation="vertical"
                                className="flex-col text-xl items-start gap-2"
                            >
                                <NavMenu.Item value="projects" asChild>
                                    <Link to="/projects" className="w-full font-semibold">
                                        Projects
                                    </Link>
                                </NavMenu.Item>

                                <NavMenu.Item value="blog" asChild>
                                    <Link to="/blog" className="w-full font-semibold">
                                        Blog
                                    </Link>
                                </NavMenu.Item>
                            </NavMenu.List>

                            <Separator />

                            <ThemeButton variant="outline" />
                        </SideSheet.Content>
                    </SideSheet>

                    <ThemeButton className="hidden md:flex" />
                </Container>
            </NavMenu>
        </header>
    );
};
