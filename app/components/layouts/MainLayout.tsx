import Footer from "@/components/layouts/Footer";
import DarkModePopover from "@/components/ui/$DarkModePopover";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <DarkModePopover />
        {children}
      </main>
      <div class="w-full pt-8 pb-9 px-6 border-t">
        <Footer />
      </div>
    </>
  );
}
