export default function ToothIcon({
  size = 16,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2c-2.5 0-4.5 1.5-5.5 3.5C5.5 7.5 5 10 5.5 13c.4 2.2 1.3 4.5 2 6.5.3.9.8 2 1.9 2s1.6-1 1.9-2.2c.3-1.2.7-3.3 1.2-3.3s.9 2.1 1.2 3.3c.3 1.2.8 2.2 1.9 2.2s1.6-1.1 1.9-2c.7-2 1.6-4.3 2-6.5.5-3 0-5.5-1-7.5C16.5 3.5 14.5 2 12 2Z" />
    </svg>
  );
}
