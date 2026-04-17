import { cn } from "@/utils";
import { type VariantProps, cva } from "class-variance-authority";
import type React from "react";
import type { HTMLAttributes } from "react";

const titleVariants = cva("scroll-m-20 tracking-tight", {
  variants: {
    as: {
      h1: "text-4xl font-extrabold lg:text-5xl",
      h2: "text-3xl font-extrabold",
      h3: "text-2xl font-bold",
      h4: "text-xl font-bold",
      h5: "text-lg font-bold",
      h6: "text-base font-semibold",
    },
    color: {
      default: "text-text-primary",
      secondary: "text-text-secondary",
      disabled: "text-text-disabled",
      primary: "text-primary",
      info: "text-info",
      error: "text-error",
      warning: "text-warning",
      success: "text-success",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    as: "h1",
    color: "default",
    align: "left",
  },
});

const textVariants = cva("", {
  variants: {
    variant: {
      // 副标题
      subTitle1: "text-base font-semibold",
      subTitle2: "text-sm font-normal",

      // 正文
      body1: "text-base font-normal",
      body2: "text-sm font-normal",

      // 说明文字
      caption: "text-xs font-normal",

      // 代码
      code: "text-sm font-normal font-mono bg-muted relative rounded px-[0.3rem] py-[0.2rem]",
    },
    color: {
      default: "text-text-primary",
      secondary: "text-text-secondary",
      disabled: "text-text-disabled",
      primary: "text-primary",
      info: "text-info",
      error: "text-error",
      warning: "text-warning",
      success: "text-success",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "body1",
    color: "default",
    align: "left",
  },
});

type TitleVariantProps = VariantProps<typeof titleVariants>;
type TextVariantProps = VariantProps<typeof textVariants>;

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleProps extends Omit<HTMLAttributes<HTMLHeadElement>, "color"> {
  as?: HeadingTag;
  color?: TitleVariantProps["color"];
  align?: TitleVariantProps["align"];
}

function Title({
  className,
  as: Component = "h1",
  color,
  align,
  ref,
  ...props
}: React.ComponentPropsWithRef<HeadingTag> & TitleProps) {
  return (
    <Component
      className={cn(titleVariants({ as: Component, color, align, className }))}
      ref={ref}
      {...props}
    />
  );
}

export interface TextProps extends Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  variant?: TextVariantProps["variant"];
  color?: TextVariantProps["color"];
  align?: TextVariantProps["align"];
}

function Text({
  className,
  variant,
  color,
  align,
  ref,
  ...props
}: React.ComponentPropsWithRef<"span"> & TextProps) {
  return (
    <span className={cn(textVariants({ variant, color, align, className }))} ref={ref} {...props} />
  );
}

export { Title, Text };
