import { Icon } from "@iconify/react";
import type { NavItemProps } from "../types";
import { cn } from "@/utils";
import { TooltipTrigger, Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { NavItemRenderer } from "../components";
import useLocale from "@/locales/use-locale";
import { navItemClasses, navItemStyles } from "../style";

export function NavItem(item: NavItemProps) {
  const { title, icon, info, caption, open, active, disabled, depth, hasChild } = item;
  const { t } = useLocale();

  const content = (
    <>
      {/** Icon */}
      <span style={navItemStyles.icon} className={cn("justify-center items-center", "mr-3")}>
        {icon && typeof icon === "string" ? <Icon icon={icon} /> : icon}
      </span>

      {/** Texts */}
      <span style={navItemStyles.texts} className="min-h-[24px]">
        {/** title */}
        <span style={navItemStyles.title}>{t(title)}</span>
        {/** caption */}
        {caption && (
          // <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span style={navItemStyles.caption}>{t(caption)}</span>
            </TooltipTrigger>
            <TooltipContent side="top" align="start">
              {t(caption)}
            </TooltipContent>
          </Tooltip>
          // </TooltipProvider>
        )}
      </span>

      {/** info */}
      {info && <span style={navItemStyles.info}>{info}</span>}

      {/* Arrow */}
      {hasChild && (
        <Icon
          icon="eva:arrow-ios-forward-fill"
          style={{
            ...navItemStyles.arrow,
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
          }}
        />
      )}
    </>
  );

  const itemClassName = cn(
    navItemClasses.base,
    navItemClasses.hover,
    "min-h-[44px]",
    active && depth === 1 && navItemClasses.active,
    active && depth !== 1 && "bg-action-hover!",
    disabled && navItemClasses.disabled,
  );

  return (
    <NavItemRenderer item={item} className={itemClassName}>
      {content}
    </NavItemRenderer>
  );
}
