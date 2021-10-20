/* Utils */
import { classNames } from "@/utils/class-names";

/* Styles */
import styles from "./Example.module.css";

/* Types */
import type { ReactNode } from "react";

type Props = {
  hasGreenBackground?: boolean;
  children: ReactNode;
};

export const Example = ({ hasGreenBackground = true, children }: Props) => {
  return (
    <div className={classNames(styles.example, hasGreenBackground && styles.example_background_green)}>
      <div className={classNames(styles.example__element, styles.example__element_size_big)}>{children}</div>
    </div>
  );
};
