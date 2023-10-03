import { ReactElement } from "react";
import { css, cx } from "../../styled-system/css";

type StackProps = {
  gap?: keyof typeof gaps;
  horizontal?: boolean;
  divider?: boolean;
  children: ReactElement[];
  className?: string;
  as?: React.ElementType;
};

const gaps = {
  none: 0,
  sm: 2,
  md: 4,
  lg: 8,
};

const Stack = ({
  gap = "md",
  horizontal = false,
  children,
  className,
  as: CustomTag = "div",
}: StackProps) => {
  return (
    <CustomTag
      className={cx(
        css({
          display: "flex",
          // TODO: panda codegenで出力されないことがある？要調査。
          gap: gaps[gap],
          flexDirection: horizontal ? "row" : "column",
        }),
        className
      )}
    >
      {children}
    </CustomTag>
  );
};

export default Stack;
