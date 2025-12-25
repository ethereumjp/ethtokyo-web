import type { FC } from "hono/jsx";
import Menu from "@/components/layouts/$Menu";
import Footer from "@/components/layouts/Footer";

export default function Layout({ children }: { children: FC }) {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <div class="w-full pt-8 pb-9 px-6 border-t">
        <Footer />
      </div>
    </>
  );
}
