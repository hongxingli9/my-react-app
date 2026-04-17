import { Icon } from "@/components/icon";
import { cn } from "@/utils";
import type { NavProps } from "@/components/nav";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { GLOBAL_CONFIG } from "@/global-config";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavVertical } from "@/components/nav/vertical";

type Props = {
  data: NavProps["data"];
  className?: string;
};

export function NavVerticalLayout({ data, className }: Props) {
  const navWidth = "var(--layout-nav-width)";

  return (
    <nav
      className={cn(
        "fixed inset-y-0 left-0 flex-col h-full bg-background border-r border-dashed z-1000 transition-[width] duration-300 ease-in-out",
        className,
      )}
      style={{
        width: navWidth,
      }}
    >
      <div className={cn("relative flex items-center py-4 px-2 h-(--layout-header-height)")}>
        <div className="flex items-center justify-center">
          <Logo />
          <span
            className="text-xl font-bold transition-all duration-300 ease-in-out"
            style={{
              opacity: 1,
              maxWidth: "auto",
              whiteSpace: "nowrap",
              marginLeft: "8px",
            }}
          >
            {GLOBAL_CONFIG.appName}
          </span>
        </div>

        <Button variant="outline" size="icon" className="h-7 w-7 absolute right-0 translate-x-1/2 ">
          <Icon icon="lucide:arrow-left-to-line" />
        </Button>
      </div>

      <ScrollArea className={cn("h-[calc(100vh-var(--layout-header-height))] px-2 bg-background")}>
        <NavVertical data={data} />
      </ScrollArea>
      {/* <ScrollArea className="h-[calc(100vh-var(--layout-header-height))]">
        <div className="p-4">
          <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <div className="text-sm">{tag}</div>
            </React.Fragment>
          ))}
        </div>
      </ScrollArea> */}
    </nav>
  );
}
