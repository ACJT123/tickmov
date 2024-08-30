import BottomTabs from "@/components/tabs";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Press me</Button>
      <BottomTabs />
    </main>
  );
}
