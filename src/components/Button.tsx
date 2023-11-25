import { VariantProps, cva } from "class-variance-authority";
import { FC } from "react";

const button = cva("button", {
  variants: {
    /**
     * size paddingが異なります
     */
    size: {
      sm: "p-8",
      md: "p-16",
      lg: "p-24",
    },
    /**
     * 背景色を変更します。
     */
    color: {
      red: "bg-red-800",
      blue: "bg-blue-800",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "red",
  },
});

export type ButtonProps = VariantProps<typeof button>;

export const Button: FC<ButtonProps> = ({ size }) => {
  return <button className={button({ size })}>button</button>;
};
