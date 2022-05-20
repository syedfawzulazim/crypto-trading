import React, {
  forwardRef,
  ButtonHTMLAttributes,
  JSXElementConstructor,
  useRef,
} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  label: string;
  className?: string;
  active?: boolean;
  type?: "submit" | "reset" | "button";
  Component?: string | JSXElementConstructor<any>;
  width?: string | number;
  loading?: boolean;
  disabled?: boolean;
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    label,
    className,
    type,
    handleClick,
    loading = false,
    disabled = false,
  } = props;

  return (
    <div>
      <button
        type={type}
        className={className}
        onClick={handleClick}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
