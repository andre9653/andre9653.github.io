// eslint-disable-next-line no-use-before-define
import React from "react";

interface LiProps {
  typeClass: string;
  text: string;
}
export default function Li({ typeClass, text }: LiProps) {
  return <li className={typeClass}>{text}</li>;
}
