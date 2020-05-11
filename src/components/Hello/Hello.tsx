import React from "react";

import styles from "./Hello.scss";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello: React.FC<HelloProps> = (props: HelloProps) => (
  <h1 className={styles.header}>
    Hello from <span className={styles.compiler}>{props.compiler}</span> and{" "}
    <span className={styles.framework}>{props.framework}</span>!
  </h1>
);

export default Hello;
