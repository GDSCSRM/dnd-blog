interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, name, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name}>{label}</label>}
      <input
      {...props}
      name={name}
      id={name}
      className="border border-black px-4 py-2 rounded-md w-full"
    />
    </div>
  );
}