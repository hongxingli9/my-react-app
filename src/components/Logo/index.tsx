import { cn } from "@/utils";
import { NavLink } from "react-router";
import { Icon } from "../icon";

interface Props {
  size?: number | string;
  className?: string;
}

export default function Logo({ size = 50, className }: Props) {
  return (
    <NavLink to="/" className={cn(className)}>
      <Icon icon="local:vite" size={size} color="var(--color-primary)" />
    </NavLink>
  );
}
