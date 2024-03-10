interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  fullWidth?: boolean
}

export default function Button({ children, fullWidth, ...props }: ButtonProps) {
  return (
    <button {...props} className={`bg-white border border-black px-4 py-2 rounded-md ${fullWidth ? "w-full" : "w-fit"}`}>
      {children}
    </button>
  );
}
