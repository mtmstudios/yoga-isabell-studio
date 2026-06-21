type Props = React.SVGProps<SVGSVGElement> & { size?: number };

/**
 * Hand-drawn lotus line motif — recurring brand accent.
 * Stroke uses currentColor so it adopts surrounding text color.
 */
export function LotusMark({ size = 28, ...props }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M32 54c-9 0-18-4-22-10 6 1 12 0 17-3" />
      <path d="M32 54c9 0 18-4 22-10-6 1-12 0-17-3" />
      <path d="M32 54c-6-2-11-8-12-15 4 2 8 3 12 3" />
      <path d="M32 54c6-2 11-8 12-15-4 2-8 3-12 3" />
      <path d="M32 54c-3-4-5-10-5-17 0-9 2-18 5-25 3 7 5 16 5 25 0 7-2 13-5 17z" />
      <path d="M22 44c2 4 6 8 10 10" opacity={0.5} />
      <path d="M42 44c-2 4-6 8-10 10" opacity={0.5} />
    </svg>
  );
}

/** Larger, decorative lotus — used as background accents in big sections. */
export function LotusOutline({ size = 320, ...props }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <g transform="translate(100 110)">
        {[-60, -40, -20, 0, 20, 40, 60].map((deg) => (
          <ellipse
            key={deg}
            cx={0}
            cy={-30}
            rx={14}
            ry={56}
            transform={`rotate(${deg})`}
          />
        ))}
        <path d="M -78 30 Q 0 60 78 30" />
        <path d="M -60 42 Q 0 68 60 42" opacity={0.6} />
      </g>
    </svg>
  );
}
