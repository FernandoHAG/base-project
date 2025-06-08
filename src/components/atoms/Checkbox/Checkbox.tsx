import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox(props: CheckboxProps) {
  return <input type="checkbox" className="checkbox" {...props} />;
}
