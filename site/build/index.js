var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => AppWithProviders,
  links: () => links,
  loader: () => loader
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-7UWJMJBV.css";

// app/root.tsx
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme as useTheme3 } from "remix-themes";

// app/sessions.server.ts
import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";

// app/lib/utility/tw.ts
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
function tw(...inputs) {
  return twMerge(clsx(inputs));
}

// app/lib/utility/getEnvValue.ts
var getEnvValue = (key) => {
  let value = process.env[key];
  if (!value)
    throw new Error(`No ${key} environment variable found.`);
  return value;
};

// app/sessions.server.ts
var sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "site-theme",
    domain: getEnvValue("BASE_URL"),
    path: "/",
    httpOnly: !0,
    sameSite: "lax",
    secrets: [getEnvValue("SESSION_SECRET")],
    secure: !0
  }
}), themeSessionResolver = createThemeSessionResolver(sessionStorage);

// public/logo-dark.svg
var logo_dark_default = "/build/_assets/logo-dark-RSZCQ5JS.svg";

// public/logo-light.svg
var logo_light_default = "/build/_assets/logo-light-C4U5JDHE.svg";

// app/ui/NavBar.tsx
import { Link as Link2 } from "@remix-run/react";
import { Menu } from "lucide-react";
import { useTheme as useTheme2 } from "remix-themes";

// app/ui/Button.tsx
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold rounded-md transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-danger text-danger-foreground hover:bg-danger/90",
        outline: "border border-text bg-background hover:bg-background/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        ghost: "",
        //TODO
        link: "text-foreground underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = forwardRef(
  ({ className, variant, size, ...rest }, ref) => /* @__PURE__ */ jsx2("button", { ref, className: tw(buttonVariants({ variant, size, className })), ...rest })
);
Button.displayName = "Button";

// app/ui/Container.tsx
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Container = forwardRef2(
  ({ className, ...rest }, ref) => /* @__PURE__ */ jsx3(
    "div",
    {
      ref,
      className: tw("max-w-5xl px-6 md:px-8 mx-auto w-full min-w-0", className),
      ...rest
    }
  )
);
Container.displayName = "Container";

// app/ui/NavMenu/index.ts
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";

// app/ui/NavMenu/NavMenuListItem.tsx
import { Link } from "@radix-ui/react-navigation-menu";
import { forwardRef as forwardRef3 } from "react";

// app/ui/Typography/Serif.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Serif = ({
  as,
  className,
  ...rest
}) => /* @__PURE__ */ jsx4(as ?? "p", { ...rest, className: tw("text-text font-heading transition-color", className) });
Serif.displayName = "Serif";

// app/ui/NavMenu/NavMenuListItem.tsx
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
var NavMenuListItem = forwardRef3((props, ref) => /* @__PURE__ */ jsx5("li", { children: /* @__PURE__ */ jsx5(Link, { asChild: !0, children: /* @__PURE__ */ jsxs("a", { ref, className: tw("", props.className), ...props, children: [
  /* @__PURE__ */ jsx5(Serif, { children: props.title }),
  props.children
] }) }) }));
NavMenuListItem.displayName = "NavMenu.ListItem";

// app/ui/NavMenu/NavMenuList.tsx
import { List } from "@radix-ui/react-navigation-menu";
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var NavMenuList = forwardRef4(
  ({ className, children, ...rest }, ref) => /* @__PURE__ */ jsx6(
    List,
    {
      className: tw("group flex flex-1 list-none items-center justify-center", className),
      ref,
      ...rest,
      children
    }
  )
);
NavMenuList.displayName = "NavMenu.List";

// app/ui/NavMenu/NavMenuLink.tsx
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { NavLink } from "@remix-run/react";
import { cva as cva2 } from "class-variance-authority";
import { forwardRef as forwardRef5 } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var navigationMenuTriggerStyle = cva2(
  "group font-semibold inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), NavMenuLink = forwardRef5(({ className, children, href, ...rest }, ref) => /* @__PURE__ */ jsx7(
  NavigationMenuLink,
  {
    className: tw(navigationMenuTriggerStyle(), className),
    ref,
    asChild: !0,
    ...rest,
    children: /* @__PURE__ */ jsx7(NavLink, { to: href ?? "#", children })
  }
));
NavMenuLink.displayName = "NavMenu.Link";

// app/ui/NavMenu/NavMenuTrigger.tsx
import { forwardRef as forwardRef6 } from "react";
import { Trigger as RadixTrigger } from "@radix-ui/react-navigation-menu";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx8 } from "react/jsx-runtime";
var navigationMenuTriggerStyle2 = cva3(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), NavMenuTrigger = forwardRef6(({ className, children, ...rest }, ref) => /* @__PURE__ */ jsx8(
  RadixTrigger,
  {
    className: tw(navigationMenuTriggerStyle2(), "group", className),
    ref,
    ...rest,
    children
  }
));
NavMenuTrigger.displayName = "NavMenu.Trigger";

// app/ui/NavMenu/index.ts
var NavMenu = RadixNavigationMenu.Root;
NavMenu.Item = RadixNavigationMenu.Item;
NavMenu.Trigger = NavMenuTrigger;
NavMenu.Content = RadixNavigationMenu.Content;
NavMenu.Link = NavMenuLink;
NavMenu.List = NavMenuList;
NavMenu.ListItem = NavMenuListItem;
NavMenu.Indicator = RadixNavigationMenu.Indicator;

// app/ui/Separator.tsx
import * as RadixSeparator from "@radix-ui/react-separator";
import { forwardRef as forwardRef7 } from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var Separator = forwardRef7(({ className, orientation = "horizontal", decorative = !0, ...props }, ref) => /* @__PURE__ */ jsx9(
  RadixSeparator.Root,
  {
    ref,
    decorative,
    orientation,
    className: tw(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    ),
    ...props
  }
));
Separator.displayName = "Separator";

// app/ui/SideSheet/index.ts
import * as RadixSheet from "@radix-ui/react-dialog";

// app/ui/SideSheet/SideSheet.tsx
import { Overlay, Portal, Content as Content2, Close } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { forwardRef as forwardRef8 } from "react";
import { jsx as jsx10, jsxs as jsxs2 } from "react/jsx-runtime";
var SideSheetOverlay = forwardRef8(({ className, ...props }, ref) => /* @__PURE__ */ jsx10(
  Overlay,
  {
    className: tw(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SideSheetOverlay.displayName = "SideSheetOverlay";
var SideSheetPortal = Portal, sideSheetStyle = tw(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top"
), SideSheetContent = forwardRef8(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs2(SideSheetPortal, { children: [
    /* @__PURE__ */ jsx10(SideSheetOverlay, {}),
    /* @__PURE__ */ jsxs2(Content2, { ref, className: tw(sideSheetStyle, className), ...props, children: [
      children,
      /* @__PURE__ */ jsxs2(Close, { className: "absolute right-4 top-4 rounded-sm ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
        /* @__PURE__ */ jsx10(X, {}),
        /* @__PURE__ */ jsx10("span", { className: "sr-only", children: "Close" })
      ] })
    ] })
  ] })
);
SideSheetContent.displayName = "SideSheetContent";

// app/ui/SideSheet/SideSheetHeader.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var SideSheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsx11("div", { className: tw("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
SideSheetHeader.displayName = "SideSheetHeader";

// app/ui/SideSheet/SideSheetTitle.tsx
import { Title } from "@radix-ui/react-dialog";
import { forwardRef as forwardRef9 } from "react";
import { jsx as jsx12 } from "react/jsx-runtime";
var SideSheetTitle = forwardRef9(({ className, ...props }, ref) => /* @__PURE__ */ jsx12(
  Title,
  {
    ref,
    className: tw("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SideSheetTitle.displayName = "SideSheetTitle";

// app/ui/SideSheet/SideSheetDescription.tsx
import { Description } from "@radix-ui/react-dialog";
import { forwardRef as forwardRef10 } from "react";
import { jsx as jsx13 } from "react/jsx-runtime";
var SideSheetDescription = forwardRef10(({ className, ...props }, ref) => /* @__PURE__ */ jsx13(Description, { ref, className: tw("text-sm text-muted-foreground", className), ...props }));
SideSheetDescription.displayName = "SideSheetDescription";

// app/ui/SideSheet/SideSheetFooter.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
var SideSheetFooter = ({ className, ...props }) => /* @__PURE__ */ jsx14(
  "div",
  {
    className: tw("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
SideSheetFooter.displayName = "SideSheetFooter";

// app/ui/SideSheet/index.ts
var SideSheet = RadixSheet.Root;
SideSheet.Content = SideSheetContent;
SideSheet.Header = SideSheetHeader;
SideSheet.Title = SideSheetTitle;
SideSheet.Description = SideSheetDescription;
SideSheet.Footer = SideSheetFooter;
SideSheet.Trigger = RadixSheet.Trigger;

// app/ui/ThemeButton.tsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "remix-themes";

// app/ui/ToggleButton.tsx
import { jsx as jsx15, jsxs as jsxs3 } from "react/jsx-runtime";
var ToggleButton = ({
  value,
  values,
  onChange,
  className,
  ...rest
}) => {
  let currentValue = values.find((v) => v.value === value), setNextValue = () => {
    let nextIndex = (values.findIndex((v) => v.value === value) + 1) % values.length, newValue = values.at(nextIndex).value;
    onChange(newValue);
  };
  return /* @__PURE__ */ jsxs3(
    Button,
    {
      variant: "ghost",
      className: tw("flex flex-row gap-2", className),
      onClick: setNextValue,
      ...rest,
      children: [
        currentValue?.icon && /* @__PURE__ */ jsx15(currentValue.icon, {}),
        currentValue?.label
      ]
    }
  );
};

// app/ui/ThemeButton.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
var ThemeButton = ({ ...rest }) => {
  let [theme, setTheme] = useTheme();
  return /* @__PURE__ */ jsx16(
    ToggleButton,
    {
      value: theme ?? "light",
      values: [
        { icon: Sun, label: "Light", value: "light" },
        { icon: Moon, label: "Dark", value: "dark" }
        // { icon: SunMoon, label: "Auto", value: null },
      ],
      onChange: setTheme,
      ...rest
    }
  );
};

// app/ui/Typography/Sans.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
var Sans = ({
  as,
  className,
  ...rest
}) => /* @__PURE__ */ jsx17(
  as ?? "p",
  {
    ...rest,
    className: tw("font-sans text-foreground transition-color", className)
  }
);
Sans.displayName = "Sans";

// app/ui/Typography/index.ts
var Typography = {
  Serif,
  Sans
};

// app/ui/NavBar.tsx
import { jsx as jsx18, jsxs as jsxs4 } from "react/jsx-runtime";
var NavBar = () => {
  let [theme] = useTheme2();
  return /* @__PURE__ */ jsx18("header", { className: "flex h-16 sticky top-0 z-10 backdrop-filter backdrop-blur", children: /* @__PURE__ */ jsx18(NavMenu, { className: "flex flex-1", children: /* @__PURE__ */ jsxs4(Container, { className: "flex flex-1 items-center justify-between", children: [
    /* @__PURE__ */ jsxs4(Link2, { className: "flex gap-4 flex-row align-center justify-center", to: "/", children: [
      /* @__PURE__ */ jsx18(
        "img",
        {
          src: theme === "dark" ? logo_dark_default : logo_light_default,
          alt: "logo",
          className: "w-8 h-8"
        }
      ),
      /* @__PURE__ */ jsx18(Typography.Serif, { className: "text-xl font-semibold", children: "Haakon Svane" })
    ] }),
    /* @__PURE__ */ jsxs4(NavMenu.List, { "data-orientation": "horizontal", className: "hidden md:flex", children: [
      /* @__PURE__ */ jsx18(NavMenu.Item, { value: "projects", children: /* @__PURE__ */ jsx18(NavMenu.Link, { href: "/projects", children: "Projects" }) }),
      /* @__PURE__ */ jsx18(NavMenu.Item, { value: "blog", children: /* @__PURE__ */ jsx18(NavMenu.Link, { href: "/blog", children: "Blog" }) })
    ] }),
    /* @__PURE__ */ jsxs4(SideSheet, { children: [
      /* @__PURE__ */ jsx18(SideSheet.Trigger, { asChild: !0, className: "flex md:hidden", children: /* @__PURE__ */ jsx18(Button, { variant: "outline", className: "rounded-full", children: /* @__PURE__ */ jsx18(Menu, {}) }) }),
      /* @__PURE__ */ jsxs4(SideSheet.Content, { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs4(
          NavMenu.List,
          {
            "data-orientation": "vertical",
            className: "flex-col text-xl items-start gap-2",
            children: [
              /* @__PURE__ */ jsx18(NavMenu.Item, { value: "projects", asChild: !0, children: /* @__PURE__ */ jsx18(Link2, { to: "/projects", className: "w-full font-semibold", children: "Projects" }) }),
              /* @__PURE__ */ jsx18(NavMenu.Item, { value: "blog", asChild: !0, children: /* @__PURE__ */ jsx18(Link2, { to: "/blog", className: "w-full font-semibold", children: "Blog" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx18(Separator, {}),
        /* @__PURE__ */ jsx18(ThemeButton, { variant: "outline" })
      ] })
    ] }),
    /* @__PURE__ */ jsx18(ThemeButton, { className: "hidden md:flex" })
  ] }) }) });
};

// app/root.tsx
import { SpeedInsights } from "@vercel/speed-insights/remix";
import { jsx as jsx19, jsxs as jsxs5 } from "react/jsx-runtime";
var loader = async ({ request }) => {
  let { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme()
  };
}, links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  let loaderData = useLoaderData(), [theme] = useTheme3();
  return /* @__PURE__ */ jsxs5("html", { lang: "en", className: theme ?? "", children: [
    /* @__PURE__ */ jsxs5("head", { children: [
      /* @__PURE__ */ jsx19("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx19("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx19(Analytics, {}),
      /* @__PURE__ */ jsx19(SpeedInsights, {}),
      /* @__PURE__ */ jsx19(Meta, {}),
      /* @__PURE__ */ jsx19(PreventFlashOnWrongTheme, { ssrTheme: Boolean(loaderData.theme) }),
      /* @__PURE__ */ jsx19(Links, {})
    ] }),
    /* @__PURE__ */ jsxs5("body", { className: "bg-background transition-colors font-sans text-foreground antialiased min-h-[100dvh]", children: [
      /* @__PURE__ */ jsxs5("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx19(NavBar, {}),
        /* @__PURE__ */ jsx19(Outlet, {}),
        /* @__PURE__ */ jsx19("div", { className: "bg-red-300" })
      ] }),
      /* @__PURE__ */ jsx19(ScrollRestoration, {}),
      /* @__PURE__ */ jsx19(Scripts, {}),
      /* @__PURE__ */ jsx19(LiveReload, {})
    ] })
  ] });
}
function AppWithProviders() {
  let loaderData = useLoaderData();
  return /* @__PURE__ */ jsx19(ThemeProvider, { specifiedTheme: loaderData.theme, themeAction: "/action/setTheme", children: /* @__PURE__ */ jsx19(App, {}) });
}

// app/routes/projects.$project.$slug._index/route.tsx
var route_exports = {};
__export(route_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => route_default,
  loader: () => loader2,
  meta: () => meta
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2, useRouteError } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import { useMemo } from "react";

// app/lib/postComponents.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
var postComponents = {
  h1: (props) => /* @__PURE__ */ jsx20(
    Typography.Serif,
    {
      className: tw(
        "[&:not(:first-child)]:mt-6 scroll-m-20 border-b border-border pb-2 mb-6 text-4xl font-bold tracking-tight lg:text-5xl",
        props.className
      ),
      ...props
    }
  ),
  h2: (props) => /* @__PURE__ */ jsx20(
    Typography.Serif,
    {
      className: tw(
        "[&:not(:first-child)]:mt-6 scroll-m-20 pb-0 mb-0 text-3xl font-extrabold tracking-tight first:mt-0",
        props.className
      ),
      ...props
    }
  ),
  h3: (props) => /* @__PURE__ */ jsx20(
    Typography.Serif,
    {
      className: tw(
        "[&:not(:first-child)]:mt-6 scroll-m-20 text-2xl font-semibold tracking-tight",
        props.className
      ),
      ...props
    }
  ),
  h4: (props) => /* @__PURE__ */ jsx20(
    Typography.Serif,
    {
      className: tw(
        "[&:not(:first-child)]:mt-6 leading-8 text-xl font-semibold",
        props.className
      ),
      ...props
    }
  ),
  h5: (props) => /* @__PURE__ */ jsx20(
    Typography.Serif,
    {
      className: tw("[&:not(:first-child)]:mt-6 leading-8 text-lg", props.className),
      ...props
    }
  ),
  h6: (props) => /* @__PURE__ */ jsx20(
    Typography.Serif,
    {
      className: tw("[&:not(:first-child)]:mt-6 leading-8 text-md", props.className),
      ...props
    }
  ),
  hr: (props) => /* @__PURE__ */ jsx20("hr", { className: tw("shrink-0 border-border", props.className), ...props }),
  blockquote: (props) => /* @__PURE__ */ jsx20(
    "blockquote",
    {
      className: tw("mt-6 border-l-2 pl-6 italic border-border", props.className),
      ...props
    }
  ),
  p: (props) => /* @__PURE__ */ jsx20(Typography.Sans, { className: tw("leading-8 mb-6", props.className), ...props }),
  table: (props) => /* @__PURE__ */ jsx20("table", { className: tw("my-6 w-full max-w-lg mx-auto", props.className), ...props }),
  tr: (props) => /* @__PURE__ */ jsx20("tr", { className: tw("", props.className), ...props }),
  th: (props) => /* @__PURE__ */ jsx20("th", { className: tw("m-0 border-t border-border p-0", props.className), ...props }),
  li: (props) => /* @__PURE__ */ jsx20("li", { className: tw("my-4 ml-6 list-disc [&>li]:mt-2", props.className), ...props }),
  small: (props) => /* @__PURE__ */ jsx20("small", { className: tw("text-sm font-medium leading-none", props.className), ...props }),
  svg: (props) => /* @__PURE__ */ jsx20("svg", { className: tw("inline", props.className), ...props }),
  img: (props) => /* @__PURE__ */ jsx20(
    "img",
    {
      alt: "[missing alt]",
      ...props,
      className: tw("object-cover max-w-[80%] mx-auto", props.className)
    }
  )
};

// app/graphql/graphql.ts
var GetPostQueryDocument = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "GetPostQuery" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "slug" } }, type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "blogPostCollection" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "where" }, value: { kind: "ObjectValue", fields: [{ kind: "ObjectField", name: { kind: "Name", value: "slug" }, value: { kind: "Variable", name: { kind: "Name", value: "slug" } } }] } }, { kind: "Argument", name: { kind: "Name", value: "limit" }, value: { kind: "IntValue", value: "1" } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "items" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "content" } }] } }] } }] } }] }, GetProjectQueryDocument = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "GetProjectQuery" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "slug" } }, type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "projectCollection" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "where" }, value: { kind: "ObjectValue", fields: [{ kind: "ObjectField", name: { kind: "Name", value: "slug" }, value: { kind: "Variable", name: { kind: "Name", value: "slug" } } }] } }, { kind: "Argument", name: { kind: "Name", value: "limit" }, value: { kind: "IntValue", value: "1" } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "items" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "description" } }, { kind: "Field", name: { kind: "Name", value: "siteUrl" } }, { kind: "Field", name: { kind: "Name", value: "githubUrl" } }, { kind: "Field", name: { kind: "Name", value: "leadImage" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "title" } }] } }] } }] } }] } }] }, GetProjectPostQueryDocument = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "GetProjectPostQuery" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "projectSlug" } }, type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } }, { kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "postSlug" } }, type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "projectCollection" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "where" }, value: { kind: "ObjectValue", fields: [{ kind: "ObjectField", name: { kind: "Name", value: "slug" }, value: { kind: "Variable", name: { kind: "Name", value: "projectSlug" } } }] } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "items" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "postsCollection" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "where" }, value: { kind: "ObjectValue", fields: [{ kind: "ObjectField", name: { kind: "Name", value: "slug" }, value: { kind: "Variable", name: { kind: "Name", value: "postSlug" } } }] } }, { kind: "Argument", name: { kind: "Name", value: "limit" }, value: { kind: "IntValue", value: "1" } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "items" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "content" } }] } }] } }] } }] } }] } }] }, GetPostsQueryDocument = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "GetPostsQuery" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "blogPostCollection" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "items" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "slug" } }, { kind: "Field", name: { kind: "Name", value: "synopsis" } }, { kind: "Field", name: { kind: "Name", value: "leadImage" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "url" } }] } }] } }] } }] } }] }, GetProjectPostsQueryDocument = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "GetProjectPostsQuery" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "projectSlug" } }, type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "projectPostCollection" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "where" }, value: { kind: "ObjectValue", fields: [{ kind: "ObjectField", name: { kind: "Name", value: "project" }, value: { kind: "ObjectValue", fields: [{ kind: "ObjectField", name: { kind: "Name", value: "slug" }, value: { kind: "Variable", name: { kind: "Name", value: "projectSlug" } } }] } }] } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "items" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "slug" } }, { kind: "Field", name: { kind: "Name", value: "synopsis" } }, { kind: "Field", name: { kind: "Name", value: "leadImage" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "url" } }] } }] } }] } }] } }] }, GetProjectsQueryDocument = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "GetProjectsQuery" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "projectCollection" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "items" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "slug" } }, { kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "synopsis" } }, { kind: "Field", name: { kind: "Name", value: "leadImage" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "title" } }] } }] } }] } }] } }] };

// app/graphql/gql.ts
var documents = {
  "\n    query GetPostQuery($slug: String!) {\n        blogPostCollection(where: { slug: $slug }, limit: 1) {\n            items {\n                title\n                content\n            }\n        }\n    }\n": GetPostQueryDocument,
  "\n    query GetProjectQuery($slug: String!) {\n        projectCollection(where: { slug: $slug }, limit: 1) {\n            items {\n                title\n                description\n                siteUrl\n                githubUrl\n                leadImage {\n                    url\n                    title\n                }\n            }\n        }\n    }\n": GetProjectQueryDocument,
  "\n    query GetProjectPostQuery($projectSlug: String!, $postSlug: String!) {\n        projectCollection(where: { slug: $projectSlug }) {\n            items {\n                postsCollection(where: {slug: $postSlug}, limit: 1) {\n                    items {\n                        title\n                        content\n                    }\n                }\n            }\n        }\n    }\n\n": GetProjectPostQueryDocument,
  "\n    query GetPostsQuery {\n        blogPostCollection {\n            items {\n                title\n                slug\n                synopsis\n                leadImage {\n                    title\n                    url\n                }\n            }\n        }\n    }\n": GetPostsQueryDocument,
  "\n    query GetProjectPostsQuery($projectSlug: String!) {\n        projectPostCollection(where: { project: { slug: $projectSlug } }) {\n            items {\n                title\n                slug\n                synopsis\n                leadImage {\n                    title\n                    url\n                }\n            }\n        }\n    }\n": GetProjectPostsQueryDocument,
  "\n    query GetProjectsQuery {\n        projectCollection {\n            items {\n                title\n                slug\n                title\n                synopsis\n                leadImage {\n                    url\n                    title\n                }\n            }\n        }\n    }\n": GetProjectsQueryDocument
};
function gql(source) {
  return documents[source] ?? {};
}

// app/lib/server/graphql.server.ts
import { json } from "@remix-run/node";
import { Kind } from "graphql";
import {
  Client,
  cacheExchange,
  fetchExchange
} from "urql";
var client = new Client({
  url: process.env.CONTENTFUL_GQL_URL,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => ({
    headers: { authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}` }
  })
}), injectPreviewArguments = (query) => {
  if (typeof query == "object") {
    let previewQueryArgumentNode = {
      kind: Kind.ARGUMENT,
      name: {
        kind: Kind.NAME,
        value: "preview"
      },
      value: {
        kind: Kind.BOOLEAN,
        value: !0
      }
    };
    for (let definition of query.definitions)
      if ("operation" in definition)
        for (let selection of definition.selectionSet.selections) {
          if (selection.kind !== Kind.FIELD)
            continue;
          let newSelection = {
            ...selection,
            arguments: [...selection.arguments ?? [], previewQueryArgumentNode]
          };
          Object.assign(selection, newSelection);
        }
  }
}, qlQuery = async (query, variables, context) => {
  process.env.ENV === "dev" && injectPreviewArguments(query);
  let response = await client.query(query, variables, context);
  if (response.error?.networkError)
    throw json({
      message: response.error.networkError.message,
      details: response.error.networkError.stack
    });
  return response;
};

// app/lib/server/mdx.server.ts
import { bundleMDX } from "mdx-bundler";

// app/lib/server/projects.server.ts
var GET_PROJECT_QUERY = gql(`
    query GetProjectQuery($slug: String!) {
        projectCollection(where: { slug: $slug }, limit: 1) {
            items {
                title
                description
                siteUrl
                githubUrl
                leadImage {
                    url
                    title
                }
            }
        }
    }
`), GET_PROJECT_POST_QUERY = gql(`
    query GetProjectPostQuery($projectSlug: String!, $postSlug: String!) {
        projectCollection(where: { slug: $projectSlug }) {
            items {
                postsCollection(where: {slug: $postSlug}, limit: 1) {
                    items {
                        title
                        content
                    }
                }
            }
        }
    }

`);
async function getProject(projectSlug) {
  let rawProject = (await qlQuery(GET_PROJECT_QUERY, { slug: projectSlug })).data?.projectCollection?.items.at(0);
  if (!rawProject)
    return null;
  let [rehypeHighlight, remarkGfm] = await Promise.all([
    import("rehype-highlight").then((mod) => mod.default),
    import("remark-gfm").then((mod) => mod.default)
  ]), { code } = await bundleMDX({
    source: rawProject.description ?? "",
    cwd: process.cwd(),
    esbuildOptions: (options) => (options.loader = {
      ...options.loader,
      ".png": "dataurl",
      ".gif": "dataurl"
    }, options),
    mdxOptions: (options) => (options.remarkPlugins = [...options.remarkPlugins ?? [], remarkGfm], options.rehypePlugins = [...options.rehypePlugins ?? [], rehypeHighlight], options)
  });
  return {
    ...rawProject,
    description: code
  };
}
async function getProjectPost(projectSlug, postSlug) {
  let rawPost = (await qlQuery(GET_PROJECT_POST_QUERY, { projectSlug, postSlug })).data?.projectCollection?.items.at(0)?.postsCollection?.items.at(0), [rehypeHighlight, rehypeMathjax, remarkGfm, remarkMath] = await Promise.all([
    import("rehype-highlight").then((mod) => mod.default),
    import("rehype-mathjax").then((mod) => mod.default),
    import("remark-gfm").then((mod) => mod.default),
    import("remark-math").then((mod) => mod.default)
  ]);
  if (!rawPost)
    return null;
  let post = await bundleMDX({
    source: rawPost.content ?? "",
    cwd: process.cwd(),
    esbuildOptions: (options) => (options.loader = {
      ...options.loader,
      ".png": "dataurl",
      ".gif": "dataurl"
    }, options),
    mdxOptions: (options) => (options.remarkPlugins = [...options.remarkPlugins ?? [], remarkGfm, remarkMath], options.rehypePlugins = [
      ...options.rehypePlugins ?? [],
      rehypeHighlight,
      rehypeMathjax
    ], options)
  });
  return {
    ...rawPost,
    content: post.code
  };
}

// app/lib/utility/errorResponse.ts
import { isRouteErrorResponse } from "@remix-run/react";
var isJsonErrorResponse = (value) => isRouteErrorResponse(value) && "message" in value.data && typeof value.data.message == "string";

// app/routes/projects.$project.$slug._index/route.tsx
import { jsx as jsx21, jsxs as jsxs6 } from "react/jsx-runtime";
var loader2 = async ({ params }) => {
  let { slug, project } = params;
  if (!slug || !project)
    throw json2(
      {
        message: "Bad request",
        details: "The server could not parse the provided URL parameters as a slug"
      },
      { status: 400 }
    );
  try {
    let post = await getProjectPost(project, slug);
    if (!post)
      throw json2(
        {
          message: "Post not found",
          details: "The post you are looking for does not exist"
        },
        { status: 404 }
      );
    return json2(post);
  } catch (error) {
    throw json2(
      {
        message: "Server error",
        details: "An error occurred while trying to retrieve the post",
        error: error instanceof Error ? error : void 0
      },
      { status: 500 }
    );
  }
}, meta = ({ data }) => [
  { title: `${data?.title ?? "Project post"} | Haakon Svane` },
  { name: "description", content: "Personal site for Haakon Svane" }
], ProjectPost = () => {
  let { content } = useLoaderData2(), Component = useMemo(() => getMDXComponent(content), [content]);
  return /* @__PURE__ */ jsx21(Container, { className: "py-4", children: /* @__PURE__ */ jsx21("article", { children: /* @__PURE__ */ jsx21(Component, { components: postComponents }) }) });
}, ErrorBoundary = () => {
  let error = useRouteError(), errorTitle, errorDescription;
  return isJsonErrorResponse(error) ? (errorTitle = error.data.message, errorDescription = error.data.details, error.data.error?.message && (errorDescription += `
: ${error.data.error.message}`)) : (errorTitle = "An error occurred", errorDescription = "An error occurred somewhere in the project post page"), /* @__PURE__ */ jsxs6(Container, { className: "flex h-full gap-x-4 flex-row justify-center align-center", children: [
    /* @__PURE__ */ jsx21("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ jsx21(Typography.Serif, { className: "text-6xl font-bold whitespace-nowrap", children: ":(" }) }),
    /* @__PURE__ */ jsxs6("div", { className: "flex flex-col gap-2 justify-center", children: [
      /* @__PURE__ */ jsx21(Typography.Serif, { className: "text-3xl font-bold", children: errorTitle }),
      /* @__PURE__ */ jsx21(Typography.Sans, { children: errorDescription })
    ] }),
    /* @__PURE__ */ jsx21("div", { className: "flex flex-col justify-center whitespace-nowrap", children: /* @__PURE__ */ jsx21(Typography.Serif, { className: "text-6xl font-bold", children: "):" }) })
  ] });
}, route_default = ProjectPost;

// app/routes/projects.$project._index/route.tsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => Project,
  loader: () => loader3,
  meta: () => meta2
});
import { json as json3 } from "@remix-run/node";
import { useLoaderData as useLoaderData3 } from "@remix-run/react";
import { Github, Globe } from "lucide-react";
import { getMDXComponent as getMDXComponent2 } from "mdx-bundler/client/index.js";
import { useMemo as useMemo2 } from "react";

// app/ui/Badge/Badge.tsx
import { jsx as jsx22, jsxs as jsxs7 } from "react/jsx-runtime";
var Badge = ({ title, LeadingIcon, TrailingIcon, className, ...rest }) => /* @__PURE__ */ jsxs7(
  "div",
  {
    ...rest,
    className: tw(
      "rounded-sm border bg-card text-card-foreground p-2 flex flex-row space-x-2 items-center",
      className
    ),
    children: [
      LeadingIcon && /* @__PURE__ */ jsx22(LeadingIcon, { className: "size-4" }),
      /* @__PURE__ */ jsx22(Typography.Sans, { children: title }),
      TrailingIcon && /* @__PURE__ */ jsx22(TrailingIcon, { className: "size-4" })
    ]
  }
);

// app/ui/Badge/BadgeLink.tsx
import { jsx as jsx23, jsxs as jsxs8 } from "react/jsx-runtime";
var BadgeLink = ({
  LeadingIcon,
  TrailingIcon,
  className,
  title,
  ...rest
}) => /* @__PURE__ */ jsxs8(
  "a",
  {
    ...rest,
    className: tw(
      "rounded-sm border bg-card text-card-foreground p-2 flex flex-row space-x-2 items-center hover:bg-primary/5 transition-colors",
      className
    ),
    children: [
      LeadingIcon && /* @__PURE__ */ jsx23(LeadingIcon, { className: "size-4" }),
      /* @__PURE__ */ jsx23(Typography.Sans, { className: "font-bold", children: title }),
      TrailingIcon && /* @__PURE__ */ jsx23(TrailingIcon, { className: "size-4" })
    ]
  }
);

// app/ui/Badge/index.ts
var Badge2 = Badge;
Badge2.Link = BadgeLink;

// app/ui/Card/Card.tsx
import { forwardRef as forwardRef11 } from "react";
import { jsx as jsx24 } from "react/jsx-runtime";
var Card = forwardRef11(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx24(
    "div",
    {
      ref,
      className: tw("rounded-sm border bg-card text-card-foreground shadow-sm", className),
      ...props
    }
  )
);
Card.displayName = "Card";

// app/ui/Card/CardContent.tsx
import { forwardRef as forwardRef12 } from "react";
import { jsx as jsx25 } from "react/jsx-runtime";
var CardContent = forwardRef12(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx25("div", { ref, className: tw("px-6 py-4 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";

// app/ui/Card/CardContentRow.tsx
import { forwardRef as forwardRef13 } from "react";
import { jsx as jsx26 } from "react/jsx-runtime";
var CardContentRow = forwardRef13(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx26("div", { ...props, className: tw("flex flex-row gap-x-4 items-center", className), ref })
);
CardContentRow.displayName = "CardContentRow";

// app/ui/Card/CardDescription.tsx
import { forwardRef as forwardRef14 } from "react";
import { jsx as jsx27 } from "react/jsx-runtime";
var CardDescription = forwardRef14(({ className, ...props }, ref) => /* @__PURE__ */ jsx27("p", { ref, className: tw("text-sm text-muted-foreground", className), ...props }));
CardDescription.displayName = "Card.Description";

// app/ui/Card/CardFooter.tsx
import { forwardRef as forwardRef15 } from "react";
import { jsx as jsx28 } from "react/jsx-runtime";
var CardFooter = forwardRef15(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx28("div", { ref, className: tw("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "Card.Footer";

// app/ui/Card/CardHeader.tsx
import { forwardRef as forwardRef16 } from "react";
import { jsx as jsx29 } from "react/jsx-runtime";
var CardHeader = forwardRef16(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx29("div", { ref, className: tw("flex flex-col gap-2 px-6 py-4", className), ...props })
);
CardHeader.displayName = "Card.Header";

// app/ui/Card/CardLink.tsx
import { Link as Link3 } from "@remix-run/react";
import { forwardRef as forwardRef17 } from "react";
import { jsx as jsx30 } from "react/jsx-runtime";
var CardLink = forwardRef17(({ children, ...props }, ref) => /* @__PURE__ */ jsx30(Link3, { ref, ...props, children: /* @__PURE__ */ jsx30(Card, { className: "transition-colors hover:bg-foreground/5", children }) }));
CardLink.displayName = "Card.Link";

// app/ui/Card/CardTitle.tsx
import { jsx as jsx31 } from "react/jsx-runtime";
var CardTitle = ({ className, children, ...props }) => /* @__PURE__ */ jsx31(
  Typography.Serif,
  {
    className: tw("text-2xl font-semibold leading-none tracking-tight", className),
    ...props,
    children
  }
);
CardTitle.displayName = "Card.Title";

// app/ui/Card/index.ts
var Card2 = Card;
Card2.Content = CardContent;
Card2.ContentRow = CardContentRow;
Card2.Description = CardDescription;
Card2.Footer = CardFooter;
Card2.Header = CardHeader;
Card2.Title = CardTitle;
Card2.Link = CardLink;

// app/ui/SiteItem/SiteItemCard.tsx
import { jsx as jsx32, jsxs as jsxs9 } from "react/jsx-runtime";
var SiteItemCard = ({ title, slug, leadImage, description }) => /* @__PURE__ */ jsxs9(Card2.Link, { to: slug, children: [
  /* @__PURE__ */ jsx32(Card2.Header, { children: /* @__PURE__ */ jsx32(Card2.Title, { children: title }) }),
  /* @__PURE__ */ jsx32(Card2.Content, { children: /* @__PURE__ */ jsxs9(Card2.ContentRow, { children: [
    leadImage?.url && /* @__PURE__ */ jsx32(
      "img",
      {
        src: leadImage.url,
        alt: leadImage.title ?? "Post image",
        className: "w-12 h-12"
      }
    ),
    /* @__PURE__ */ jsx32(Card2.Description, { className: "text-card-foreground", children: description })
  ] }) })
] });

// app/ui/Skeleton.tsx
import { jsx as jsx33 } from "react/jsx-runtime";
var Skeleton = ({ className, ...props }) => /* @__PURE__ */ jsx33("div", { className: tw("animate-pulse rounded-md bg-muted opacity-10", className), ...props });

// app/ui/SiteItem/SiteItemCardSkeleton.tsx
import { jsx as jsx34, jsxs as jsxs10 } from "react/jsx-runtime";
var SiteItemCardSkeleton = () => /* @__PURE__ */ jsxs10(Card2, { className: "border-muted", children: [
  /* @__PURE__ */ jsx34(Card2.Header, { children: /* @__PURE__ */ jsx34(Skeleton, { className: "h-7 w-[10%]" }) }),
  /* @__PURE__ */ jsx34(Card2.Content, { children: /* @__PURE__ */ jsxs10(Card2.ContentRow, { children: [
    /* @__PURE__ */ jsx34(Skeleton, { className: "w-12 h-12" }),
    /* @__PURE__ */ jsxs10(Card2.Description, { className: "w-full flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx34(Skeleton, { className: "h-4 w-[100%]" }),
      /* @__PURE__ */ jsx34(Skeleton, { className: "h-4 w-[62%]" })
    ] })
  ] }) })
] });

// app/routes/projects.$project._index/route.tsx
import { jsx as jsx35, jsxs as jsxs11 } from "react/jsx-runtime";
var GET_PROJECT_POSTS_QUERY = gql(`
    query GetProjectPostsQuery($projectSlug: String!) {
        projectPostCollection(where: { project: { slug: $projectSlug } }) {
            items {
                title
                slug
                synopsis
                leadImage {
                    title
                    url
                }
            }
        }
    }
`), meta2 = ({ data }) => [
  { title: `${data?.project?.title ?? "Project"} | Haakon Svane` },
  {
    name: "description",
    content: `The ${data?.project?.title ?? "UNNAMED"} project of Haakon Svane`
  }
], loader3 = async ({ params }) => {
  let projectSlug = params.project;
  if (!projectSlug)
    throw json3(
      {
        message: "Bad request",
        details: "The server could not parse the provided URL parameters as a slug"
      },
      { status: 400 }
    );
  try {
    let projectPromise = getProject(projectSlug), projectPostsPromise = qlQuery(GET_PROJECT_POSTS_QUERY, { projectSlug }), [project, projectPosts] = await Promise.allSettled([
      projectPromise,
      projectPostsPromise
    ]);
    if (!project || project.status === "rejected" || !projectPosts || projectPosts.status === "rejected")
      throw json3(
        {
          message: "Project not found",
          details: "The project you are looking for does not exist, but maybe it will in the future?"
        },
        { status: 404 }
      );
    return json3({
      project: project.value,
      projectPosts: projectPosts.value.data?.projectPostCollection?.items
    });
  } catch (error) {
    throw json3(
      {
        message: "Server error",
        details: "An error occurred while trying to retrieve the project",
        error: error instanceof Error ? error : void 0
      },
      { status: 500 }
    );
  }
};
function Project() {
  let { project, projectPosts } = useLoaderData3(), Component = useMemo2(
    () => getMDXComponent2(project?.description ?? ""),
    [project?.description]
  );
  return /* @__PURE__ */ jsxs11(Container, { className: "flex flex-1 flex-col gap-y-8", children: [
    /* @__PURE__ */ jsx35(Typography.Serif, { className: "text-4xl font-bold", children: project?.title }),
    /* @__PURE__ */ jsxs11("div", { className: "flex flex-row gap-x-4 items-center", children: [
      project?.siteUrl && /* @__PURE__ */ jsx35(Badge2.Link, { LeadingIcon: Globe, title: "Project site", href: project?.siteUrl }),
      project?.githubUrl && /* @__PURE__ */ jsx35(Badge2.Link, { LeadingIcon: Github, title: "GitHub", href: project?.githubUrl })
    ] }),
    /* @__PURE__ */ jsx35(Component, { components: postComponents }),
    /* @__PURE__ */ jsxs11("div", { className: "flex flex-col gap-y-4", children: [
      /* @__PURE__ */ jsx35(Typography.Serif, { className: "text-2xl font-bold", children: "Project posts" }),
      /* @__PURE__ */ jsx35("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: (projectPosts ?? []).map((post) => /* @__PURE__ */ jsx35(
        SiteItemCard,
        {
          title: post.title ?? "[Missing title]",
          description: post.synopsis ?? "[Missing synopsis]",
          slug: post.slug,
          leadImage: post.leadImage ? {
            title: post.leadImage.title ?? void 0,
            url: post.leadImage.url
          } : void 0
        },
        post.slug
      )) })
    ] })
  ] });
}

// app/routes/action.setTheme.ts
var action_setTheme_exports = {};
__export(action_setTheme_exports, {
  action: () => action
});
import { createThemeAction } from "remix-themes";
var action = createThemeAction(themeSessionResolver);

// app/routes/projects._index/route.tsx
var route_exports3 = {};
__export(route_exports3, {
  default: () => route_default2,
  loader: () => loader4,
  meta: () => meta3
});
import { defer } from "@remix-run/node";
import { Await, useLoaderData as useLoaderData4 } from "@remix-run/react";
import { Suspense } from "react";
import { jsx as jsx36, jsxs as jsxs12 } from "react/jsx-runtime";
var meta3 = () => [
  { title: "Projects | Haakon Svane" },
  { name: "description", content: "Haakon Svane's projects" }
], GET_PROJECTS_QUERY = gql(`
    query GetProjectsQuery {
        projectCollection {
            items {
                title
                slug
                title
                synopsis
                leadImage {
                    url
                    title
                }
            }
        }
    }
`), loader4 = async () => defer({ posts: (async () => ((await qlQuery(GET_PROJECTS_QUERY, {})).data?.projectCollection?.items ?? []).filter(
  Boolean
))() }), Projects = () => {
  let { posts } = useLoaderData4();
  return /* @__PURE__ */ jsxs12(Container, { className: "flex flex-1 flex-col gap-y-8", children: [
    /* @__PURE__ */ jsx36(Typography.Serif, { className: "text-4xl font-bold", children: "Projects" }),
    /* @__PURE__ */ jsx36("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: /* @__PURE__ */ jsx36(
      Suspense,
      {
        fallback: Array(3).fill(0).map((index) => /* @__PURE__ */ jsx36(SiteItemCardSkeleton, {}, index)),
        children: /* @__PURE__ */ jsx36(Await, { resolve: posts, children: (posts2) => posts2.map((project) => /* @__PURE__ */ jsx36(
          SiteItemCard,
          {
            title: project.title ?? "[Missing title]",
            description: project.synopsis ?? "[Missing synopsis]",
            slug: project.slug,
            leadImage: project.leadImage ? {
              url: project.leadImage.url,
              title: project.leadImage.title ?? void 0
            } : void 0
          },
          project.slug
        )) })
      }
    ) })
  ] });
}, route_default2 = Projects;

// app/routes/blog._index.tsx
var blog_index_exports = {};
__export(blog_index_exports, {
  default: () => blog_index_default,
  loader: () => loader5,
  meta: () => meta4
});
import { defer as defer2 } from "@remix-run/node";
import { Await as Await2, useLoaderData as useLoaderData5 } from "@remix-run/react";
import { Suspense as Suspense2 } from "react";
import { Fragment, jsx as jsx37, jsxs as jsxs13 } from "react/jsx-runtime";
var meta4 = () => [
  { title: "Blog posts | Haakon Svane" },
  { name: "description", content: "Haakon Svane's blog posts" }
], GET_POSTS_QUERY = gql(`
    query GetPostsQuery {
        blogPostCollection {
            items {
                title
                slug
                synopsis
                leadImage {
                    title
                    url
                }
            }
        }
    }
`), loader5 = async () => defer2({ posts: (async () => ((await qlQuery(GET_POSTS_QUERY, {})).data?.blogPostCollection?.items ?? []).filter(
  Boolean
))() }), Blog = () => {
  let { posts } = useLoaderData5();
  return /* @__PURE__ */ jsxs13(Container, { className: "flex flex-1 flex-col gap-y-8", children: [
    /* @__PURE__ */ jsx37(Typography.Serif, { className: "text-4xl font-bold", children: "Blog posts" }),
    /* @__PURE__ */ jsx37("div", { className: "grid grid-cols-1 gap-6", children: /* @__PURE__ */ jsx37(
      Suspense2,
      {
        fallback: /* @__PURE__ */ jsx37(Fragment, { children: Array(3).fill(0).map((_, index) => /* @__PURE__ */ jsx37(SiteItemCardSkeleton, {}, index)) }),
        children: /* @__PURE__ */ jsx37(Await2, { resolve: posts, children: (posts2) => posts2.map((post) => /* @__PURE__ */ jsx37(
          SiteItemCard,
          {
            title: post.title ?? "[Missing title]",
            description: post.synopsis ?? "[Missing synopsis]",
            slug: post.slug,
            leadImage: post.leadImage ? {
              url: post.leadImage.url,
              title: post.leadImage.title ?? void 0
            } : void 0
          },
          post.slug
        )) })
      }
    ) })
  ] });
}, blog_index_default = Blog;

// app/routes/blog.$slug/route.tsx
var route_exports4 = {};
__export(route_exports4, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => route_default3,
  loader: () => loader6,
  meta: () => meta5
});
import { json as json4 } from "@remix-run/node";
import { useLoaderData as useLoaderData6, useRouteError as useRouteError2 } from "@remix-run/react";
import { getMDXComponent as getMDXComponent3 } from "mdx-bundler/client/index.js";
import { useMemo as useMemo3 } from "react";

// app/lib/server/blogPost.server.ts
var GET_POST_QUERY = gql(`
    query GetPostQuery($slug: String!) {
        blogPostCollection(where: { slug: $slug }, limit: 1) {
            items {
                title
                content
            }
        }
    }
`);
async function getPost(slug) {
  let rawPost = (await qlQuery(GET_POST_QUERY, { slug })).data?.blogPostCollection?.items.at(0), [rehypeHighlight, rehypeMathjax, remarkGfm, remarkMath] = await Promise.all([
    import("rehype-highlight").then((mod) => mod.default),
    import("rehype-mathjax").then((mod) => mod.default),
    import("remark-gfm").then((mod) => mod.default),
    import("remark-math").then((mod) => mod.default)
  ]);
  if (!rawPost)
    return null;
  let post = await bundleMDX({
    source: rawPost.content ?? "",
    cwd: process.cwd(),
    esbuildOptions: (options) => (options.loader = {
      ...options.loader,
      ".png": "dataurl",
      ".gif": "dataurl"
    }, options),
    mdxOptions: (options) => (options.remarkPlugins = [...options.remarkPlugins ?? [], remarkGfm, remarkMath], options.rehypePlugins = [
      ...options.rehypePlugins ?? [],
      rehypeHighlight,
      rehypeMathjax
    ], options)
  });
  return {
    ...rawPost,
    content: post.code
  };
}

// app/routes/blog.$slug/route.tsx
import { jsx as jsx38, jsxs as jsxs14 } from "react/jsx-runtime";
var loader6 = async ({ params }) => {
  let slug = params.slug;
  if (!slug)
    throw json4(
      {
        message: "Bad request",
        details: "The server could not parse the provided URL parameters as a slug"
      },
      { status: 400 }
    );
  try {
    let post = await getPost(slug);
    if (!post)
      throw json4(
        {
          message: "Post not found",
          details: "The post you are looking for does not exist"
        },
        { status: 404 }
      );
    return json4(post);
  } catch (error) {
    throw json4(
      {
        message: "Server error",
        details: "An error occurred while trying to retrieve the post",
        error: error instanceof Error ? error : void 0
      },
      { status: 500 }
    );
  }
}, meta5 = ({ data }) => [
  { title: `${data?.title ?? "Post"} | Haakon Svane` },
  { name: "description", content: "Personal site for Haakon Svane" }
], BlogPost = () => {
  let { content } = useLoaderData6(), Component = useMemo3(() => getMDXComponent3(content), [content]);
  return /* @__PURE__ */ jsx38(Container, { className: "py-4", children: /* @__PURE__ */ jsx38("article", { children: /* @__PURE__ */ jsx38(Component, { components: postComponents }) }) });
}, ErrorBoundary2 = () => {
  let error = useRouteError2(), errorTitle, errorDescription;
  return isJsonErrorResponse(error) ? (errorTitle = error.data.message, errorDescription = error.data.details, error.data.error?.message && (errorDescription += `
: ${error.data.error.message}`)) : (errorTitle = "An error occurred", errorDescription = "An error occurred somewhere in the blog post page"), /* @__PURE__ */ jsxs14(Container, { className: "flex h-full gap-x-4 flex-row justify-center align-center", children: [
    /* @__PURE__ */ jsx38("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ jsx38(Typography.Serif, { className: "text-6xl font-bold whitespace-nowrap", children: ":(" }) }),
    /* @__PURE__ */ jsxs14("div", { className: "flex flex-col gap-2 justify-center", children: [
      /* @__PURE__ */ jsx38(Typography.Serif, { className: "text-3xl font-bold", children: errorTitle }),
      /* @__PURE__ */ jsx38(Typography.Sans, { children: errorDescription })
    ] }),
    /* @__PURE__ */ jsx38("div", { className: "flex flex-col justify-center whitespace-nowrap", children: /* @__PURE__ */ jsx38(Typography.Serif, { className: "text-6xl font-bold", children: "):" }) })
  ] });
}, route_default3 = BlogPost;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta6
});
import { useTheme as useTheme4 } from "remix-themes";
import { jsx as jsx39, jsxs as jsxs15 } from "react/jsx-runtime";
var meta6 = () => [
  { title: "Haakon Svane" },
  { name: "description", content: "Personal site for Haakon Svane" }
];
function Index() {
  let [theme] = useTheme4();
  return /* @__PURE__ */ jsxs15(Container, { className: "justify-center gap-4 max-w-lg", children: [
    /* @__PURE__ */ jsxs15("div", { className: "flex flex-row gap-8 md:gap-6 items-center", children: [
      /* @__PURE__ */ jsx39(
        "img",
        {
          src: theme === "dark" ? logo_dark_default : logo_light_default,
          alt: "logo",
          className: "w-24 h-24"
        }
      ),
      /* @__PURE__ */ jsx39(Typography.Serif, { className: "text-5xl font-bold", children: "Hi, I'm Haakon" })
    ] }),
    /* @__PURE__ */ jsx39(Typography.Sans, { children: "My name is Haakon Hafsahl Svane. Welcome to what is, or at least will be, my personal site. This site acts as both a blog and a project showcase. Feel free to navigate around and see if there is anything that interests you." })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-LPKDBTDD.js", imports: ["/build/_shared/chunk-C45XDZ7B.js", "/build/_shared/chunk-XXMTTSDF.js", "/build/_shared/chunk-G5WX4PPA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ZIZBEM4W.js", imports: ["/build/_shared/chunk-2NH5BA6O.js", "/build/_shared/chunk-C2REYRCI.js", "/build/_shared/chunk-7BK34SLQ.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-BHJWND6X.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/action.setTheme": { id: "routes/action.setTheme", parentId: "root", path: "action/setTheme", index: void 0, caseSensitive: void 0, module: "/build/routes/action.setTheme-PEGI7ILO.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blog.$slug": { id: "routes/blog.$slug", parentId: "root", path: "blog/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog.$slug-VL3Z52YE.js", imports: ["/build/_shared/chunk-XUE66JKY.js", "/build/_shared/chunk-OAFVWH7V.js", "/build/_shared/chunk-5TRFQBKG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/blog._index": { id: "routes/blog._index", parentId: "root", path: "blog", index: !0, caseSensitive: void 0, module: "/build/routes/blog._index-CDO4OWQ2.js", imports: ["/build/_shared/chunk-UPVHAXNC.js", "/build/_shared/chunk-IZ7JEYBM.js", "/build/_shared/chunk-5TRFQBKG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects.$project.$slug._index": { id: "routes/projects.$project.$slug._index", parentId: "root", path: "projects/:project/:slug", index: !0, caseSensitive: void 0, module: "/build/routes/projects.$project.$slug._index-43NUZMM3.js", imports: ["/build/_shared/chunk-R73OGMWY.js", "/build/_shared/chunk-XUE66JKY.js", "/build/_shared/chunk-OAFVWH7V.js", "/build/_shared/chunk-5TRFQBKG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/projects.$project._index": { id: "routes/projects.$project._index", parentId: "root", path: "projects/:project", index: !0, caseSensitive: void 0, module: "/build/routes/projects.$project._index-R5L5Y4UH.js", imports: ["/build/_shared/chunk-R73OGMWY.js", "/build/_shared/chunk-IZ7JEYBM.js", "/build/_shared/chunk-OAFVWH7V.js", "/build/_shared/chunk-5TRFQBKG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects._index": { id: "routes/projects._index", parentId: "root", path: "projects", index: !0, caseSensitive: void 0, module: "/build/routes/projects._index-LKAEQ52Y.js", imports: ["/build/_shared/chunk-UPVHAXNC.js", "/build/_shared/chunk-IZ7JEYBM.js", "/build/_shared/chunk-5TRFQBKG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "dd85c538", hmr: void 0, url: "/build/manifest-DD85C538.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/projects.$project.$slug._index": {
    id: "routes/projects.$project.$slug._index",
    parentId: "root",
    path: "projects/:project/:slug",
    index: !0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/projects.$project._index": {
    id: "routes/projects.$project._index",
    parentId: "root",
    path: "projects/:project",
    index: !0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/action.setTheme": {
    id: "routes/action.setTheme",
    parentId: "root",
    path: "action/setTheme",
    index: void 0,
    caseSensitive: void 0,
    module: action_setTheme_exports
  },
  "routes/projects._index": {
    id: "routes/projects._index",
    parentId: "root",
    path: "projects",
    index: !0,
    caseSensitive: void 0,
    module: route_exports3
  },
  "routes/blog._index": {
    id: "routes/blog._index",
    parentId: "root",
    path: "blog",
    index: !0,
    caseSensitive: void 0,
    module: blog_index_exports
  },
  "routes/blog.$slug": {
    id: "routes/blog.$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports4
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
