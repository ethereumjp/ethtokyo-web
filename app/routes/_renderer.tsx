import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";
import Meta from "@/components/layouts/Meta";

export default jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&family=IBM+Plex+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <script src="/app/scripts/setTheme.ts" />
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
      </head>
      <body>{children}</body>
    </html>
  );
});
