import { type NavProps } from "@/components/nav/types";
import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";
import { NavHorizontal } from "@/components/nav";

export function NavHorizontalLayout({ data }: NavProps) {
  return (
    <nav className="w-full bg-background z-app-bar sticky top-(--layout-header-height) left-0 right-0 grow-0 shrink-0">
      <ScrollArea className="whitespace-nowrap px-2 bg-background">
        <NavHorizontal data={data} />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </nav>
  );
}
