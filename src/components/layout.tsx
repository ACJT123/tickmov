import BottomTabs from "./tabs";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <main className="bg-white flex flex-col justify-between relative">
      {children}

      <BottomTabs />
    </main>
  );
}
