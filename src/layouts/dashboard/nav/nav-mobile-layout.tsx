import { Icon } from "@/components/icon";
import Logo from "@/components/Logo";
import { NavVertical } from "@/components/nav";
import type { NavProps } from "@/components/nav/types";
import { GLOBAL_CONFIG } from "@/global-config";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function NavMobileLayout({ data }: NavProps) {
  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icon icon="local:ic-menu" size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" showCloseButton={false} className="px-2 data-[side=left]:w-[280px]">
        <div className="flex gap-2 px-2 h-(--layout-header-height) items-center">
          <Logo />
          <span className="text-xl font-bold">{GLOBAL_CONFIG.appName}</span>
        </div>
        <ScrollArea className="h-full">
          <NavVertical data={data} />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
