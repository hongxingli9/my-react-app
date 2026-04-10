import type React from "react";

export type NavItemOptionsProps = {
  depth?: number;
  hasChild?: boolean;
};

export type NavItemStateProps = {
  open?: boolean;
  active?: boolean;
  disabled?: boolean;
  hidden?: boolean;
};

export type NavDataProps = {
  name?: string;
  items: NavItemDataProps[];
};

export type NavItemDataProps = {
  path: string;
  title: string;
  icon?: string | React.ReactNode;
  info?: React.ReactNode;
  caption?: string;
  auth?: string[];
  children?: NavItemDataProps[];
} & NavItemStateProps;

export type NavItemProps = React.ComponentProps<"div"> & NavItemDataProps & NavItemOptionsProps;

export type NavListProps = Pick<NavItemProps, "depth"> & {
  data: NavItemDataProps;
  authenticate?: (auth?: NavItemProps["auth"]) => boolean;
};

export type NavGroupProps = Omit<NavListProps, "data" | "depth"> & NavDataProps;

export type NavProps = React.ComponentProps<"nav"> &
  Omit<NavListProps, "data" | "depth"> & {
    data: NavDataProps[];
  };
