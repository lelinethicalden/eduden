import { Icon } from "@iconify/react";

const SIZES = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  "2xl": 40,
} as const;

export type IconSize = keyof typeof SIZES;

export default function AppIcon({
  icon,
  size = "md",
  className,
}: {
  icon: string;
  size?: IconSize;
  className?: string;
}) {
  const px = SIZES[size];
  return <Icon icon={icon} width={px} height={px} className={className} />;
}
