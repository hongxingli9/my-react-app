import { Icon } from "@iconify/react";
import type { NavItemProps } from "../types";
import { cn } from "@/utils";
import { TooltipProvider, TooltipTrigger, Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { NavItemRenderer } from "../components";
import useLocale from "@/locales/use-locale";

export function NavItem(item: NavItemProps) {
  const { title, icon, info, caption, open, active, disabled, hasChild } = item;
  const { t } = useLocale();

  const content = (
    <>
      {/** icon */}
      <span className={cn("inlne-flex shrink-0 w-5.5 h-5.5 justify-center items-center", "mr-3")}>
        {icon && typeof icon === "string" ? <Icon icon={icon} /> : icon}
      </span>

      {/** text */}
      <span className={cn("inline-flex flex-col justify-center flex-auto min-h-6")}>
        {/** title */}
        <span
          className="text-sm font-medium text-left leading-tight"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {t(title)}
        </span>
        {/** caption */}
        {caption && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span
                  className="text-xs text-text-secondary text-left leading-tight"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {t(caption)}
                </span>
              </TooltipTrigger>
              <TooltipContent side="top" align="start">
                {t(caption)}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </span>

      {/** info */}
      {info && <span className="mx-1.5 inline-flex shrink-0 items-center">{info}</span>}

      {/* Arrow */}
      {hasChild && (
        <Icon
          icon="eva:arrow-ios-forward-fill"
          className="h-4 w-4 inline-flex shrink-0 transition-all duration-300 ease-in-out"
          style={{
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
          }}
        />
      )}
    </>
  );

  const itemClassName = cn(
    "inline-flex w-full items-center rounded-md px-2 py-1.5 text-sm transition-all duration-300 ease-in-out text-(--colors-text-secondary)! cursor-pointer",
    "hover:bg-(--colors-action-hover)!",
    active && "bg-primary/hover! text-primary!",
    disabled && "cursor-not-allowed hover:g-transparent text-action-disabled!",
  );

  return (
    <NavItemRenderer item={item} className={itemClassName}>
      {content}
    </NavItemRenderer>
  );
}
