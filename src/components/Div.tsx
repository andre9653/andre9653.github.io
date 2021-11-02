// eslint-disable-next-line no-use-before-define
import React from "react";

interface DivProps {
  children: JSX.ElementAttributesProperty;
  typeClass: string;
}
export default function Div({ children, typeClass }: DivProps) {
  return <div className={typeClass}>{children}</div>;
}
