import { Link } from "react-router";
import type { LinkProps } from "react-router";
import { forwardRef } from "react";

interface RouterLinkProps extends Omit<LinkProps, "to"> {
  href: string;
  // ref?: React.Ref<HTMLAnchorElement>;
}

export const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  ({ href, ...props }, ref) => {
    // 这里不要访问 ref.current！
    return <Link ref={ref} to={href} {...props} />;
  },
);
