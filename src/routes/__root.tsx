import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "IMTI'S CALENDER" },
      {
        name: "description",
        content: "Admission, mock tests, and important dates. Your brutalist desk calendar.",
      },
      { name: "theme-color", content: "#e10600" },
      { name: "application-name", content: "IMTI'S CALENDER" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "IMTI'S CALENDER" },
      { name: "mobile-web-app-capable", content: "yes" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/icons/icon.svg" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/icons/icon.svg" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@500;600;700&display=swap",
      },
      { rel: "manifest", href: "/manifest.webmanifest" },
    ],
  }),
  component: () => (
    <html lang="en" data-theme="day" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
