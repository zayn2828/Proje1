import type { ReactNode } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";

interface QtyProps {
  value: number;
  onChange: (v: number) => void;
}

export function Qty({ value, onChange }: QtyProps) {
  return (
    <div className="qty">
      <button type="button" aria-label="Azalt" onClick={() => onChange(Math.max(1, value - 1))}>
        <Minus />
      </button>
      <b>{value}</b>
      <button type="button" aria-label="Artır" onClick={() => onChange(value + 1)}>
        <Plus />
      </button>
    </div>
  );
}

interface AddButtonProps {
  label?: string;
  onClick?: () => void;
}

export function AddButton({ label = "Koli Ekle", onClick }: AddButtonProps) {
  return (
    <button type="button" className="btn primary" onClick={onClick}>
      <ShoppingCart />
      {label}
    </button>
  );
}

interface BadgeProps {
  children: ReactNode;
  tone?: "teal" | "amber" | "blue";
}

export function Badge({ children, tone = "teal" }: BadgeProps) {
  return <span className={`badge ${tone}`}>{children}</span>;
}
