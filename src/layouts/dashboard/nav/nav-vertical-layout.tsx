import { Icon } from "@/components/icon";
import { cn } from "@/utils";
import { useSettingActions, useSettings } from "@/store/settingStore";
import { ThemeLayout } from "@/types/enum";
import type { NavProps } from "@/components/nav";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { GLOBAL_CONFIG } from "@/global-config";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavVertical, NavMini } from "@/components/nav";

type Props = {
  data: NavProps["data"];
  className?: string;
};

export function NavVerticalLayout({ data, className }: Props) {
  const settings = useSettings();
  const { themeLayout } = settings;
  const { setSettings } = useSettingActions();

  const navWidth =
    themeLayout === ThemeLayout.Vertical
      ? "var(--layout-nav-width)"
      : "var(--layout-nav-width-mini)";
  const handleToggle = () => {
    setSettings({
      ...settings,
      themeLayout: themeLayout === ThemeLayout.Vertical ? ThemeLayout.Mini : ThemeLayout.Vertical,
    });
  };
  return (
    <nav
      className={cn(
        "fixed inset-y-0 left-0 flex-col h-full bg-background border-r border-dashed z-(--zIndex-nav) transition-[width] duration-300 ease-in-out",
        className,
      )}
      style={{
        width: navWidth,
      }}
    >
      <div
        className={cn("relative flex items-center py-4 px-2 h-(--layout-header-height)", {
          "justify-center": themeLayout === ThemeLayout.Mini,
        })}
      >
        <div className="flex items-center justify-center">
          <Logo />
          <span
            className="text-xl font-bold transition-all duration-300 ease-in-out"
            style={{
              opacity: themeLayout === ThemeLayout.Mini ? 0 : 1,
              maxWidth: themeLayout === ThemeLayout.Mini ? 0 : "auto",
              whiteSpace: "nowrap",
              marginLeft: themeLayout === ThemeLayout.Mini ? 0 : "8px",
            }}
          >
            {GLOBAL_CONFIG.appName}
          </span>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleToggle}
          className="h-7 w-7 absolute right-0 translate-x-1/2 "
        >
          {themeLayout === ThemeLayout.Mini ? (
            <Icon icon="lucide:arrow-right-to-line" size={12} />
          ) : (
            <Icon icon="lucide:arrow-left-to-line" size={12} />
          )}
        </Button>
      </div>

      <ScrollArea className={cn("h-[calc(100vh-var(--layout-header-height))] px-2 bg-background")}>
        {themeLayout === ThemeLayout.Mini ? <NavMini data={data} /> : <NavVertical data={data} />}
      </ScrollArea>
    </nav>
  );
}
