import * as React from "react";
import "./button.css";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.StatelessComponent<Props> = props => {
  return (
    <button className="btn" {...props}>
      {props.children}
    </button>
  );
};
