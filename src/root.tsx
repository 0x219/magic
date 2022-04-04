import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useLocation,
  ScrollRestoration,
} from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "~/styles/tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Magic - A magical and convenient tool website",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function App() {
  const { key } = useLocation();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.main
            key={key}
            initial={{ x: "10%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            exit={{ x: "-40%", opacity: 0 }}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
