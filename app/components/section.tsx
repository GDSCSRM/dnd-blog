import { ReactNode } from "react";

interface SectionProps {
    title: string;
    children: ReactNode;
}

export default function Section({title, children}: SectionProps) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-lg font-bold">{title}</h1>
      {children}
    </div>
  );
}
