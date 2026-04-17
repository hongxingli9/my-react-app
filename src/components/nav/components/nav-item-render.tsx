import { RouterLink } from "@/routes/components/router-link";
import type { NavItemProps } from "../types";
import type { JSX } from "react";

type NavItemRenderProps = {
  item: NavItemProps;
  className: string;
  children: React.ReactNode;
};

export function NavItemRenderer({ item, className, children }: NavItemRenderProps): JSX.Element {
  const { disabled, hasChild, path, onClick } = item;
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
    <RouterLink href={path} className={className}>
      {children}
    </RouterLink>
  );
}
