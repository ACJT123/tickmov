// components/tabs.tsx
"use client";

import { Tabs, Tab } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function BottomTabs() {
  const pathname = usePathname();

  return (
    <Tabs
      aria-label="Options"
      selectedKey={pathname.split("/")[1]}
      radius="full"
      className="fixed w-full bottom-0 -translate-y-10"
      classNames={{
        cursor: "bg-grey",
        tabList: "mx-auto",
      }}
    >
      <Tab key="home" title="Home" href="/home" />
      <Tab key="ticket" title="Ticket" href="/ticket" />
    </Tabs>
  );
}
