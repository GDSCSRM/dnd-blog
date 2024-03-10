import { ReactNode } from "react";

interface MockImageProps {
  children?: ReactNode;
}

export default function MockImage({ children }: MockImageProps) {
  return (
    <div className="flex flex-col min-w-72 min-h-44 bg-gray-100 p-3 border border-black rounded-md">
      {children}
    </div>
  );
}
