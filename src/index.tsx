import React from 'react';
import './index.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const Button: React.StatelessComponent<Props> = (props) => {
  return <button className="btn" {...props}>{props.children}</button>;
}