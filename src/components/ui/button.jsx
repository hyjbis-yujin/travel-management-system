const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variants = {
    primary:
      "bg-slate-800 text-white hover:bg-slate-700 hover:shadow-md focus:ring-slate-500 transition-all",
    secondary:
      "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 focus:ring-slate-500 transition-all",
    danger:
      "bg-red-600 text-white hover:bg-red-700 hover:shadow-md focus:ring-red-500 transition-all",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
