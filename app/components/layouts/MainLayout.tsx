import DarkModePopover from "@/components/ui/$DarkModePopover";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main class="">
      <DarkModePopover />
      {children}
    </main>
  );
}
