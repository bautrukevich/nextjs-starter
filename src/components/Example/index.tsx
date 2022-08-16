/* Utils */
import { classNames } from "@/packages/classnames";

/* Styles */
import styles from "./styles.module.css";

/* Types */
import type { ReactNode } from "react";

interface Props {
  hasGreenBackground?: boolean;
  children: ReactNode;
}

export function Example({ hasGreenBackground = false, children }: Props) {
  return (
    <div className={classNames(styles.example, hasGreenBackground && styles.example_background_green)}>
      <div className={classNames(styles.example__element, styles.example__element_size_big)}>{children}</div>
    </div>
  );
}
