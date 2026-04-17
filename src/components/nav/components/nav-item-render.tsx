import { RouterLink } from "@/routes/components/router-link";
import type { NavItemProps } from "../types";
import type { JSX } from "react";
import { cn } from "@/utils";

type NavItemRenderProps = {
  item: NavItemProps;
  className: string;
  children: React.ReactNode;
};

export function NavItemRenderer({ item, className, children }: NavItemRenderProps): JSX.Element {
  const { disabled, hasChild, path, onClick, active } = item;
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  if (hasChild) {
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <RouterLink
      href={path}
      className={cn(
        "group inline-flex w-full items-center rounded-md px-2 py-1.5 text-sm transition-all duration-300 ease-in-out text-(--colors-text-primary)!",
        "hover:bg-(--colors-action-hover)",
        active && "bg-primary/(--opacity-hover) text-(--colors-palette-primary-default)!",
        disabled && "cursor-not-allowed hover:bg-transparent text-(--colors-action-disabled)!",
      )}
    >
      {children}
    </RouterLink>
  );
}
