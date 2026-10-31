interface PixelSparkleProps {
  className?: string;
  color?: string;
  shape?: 'star' | 'heart';
}

const SHAPES: Record<NonNullable<PixelSparkleProps['shape']>, [number, number][]> = {
  star: [
    [2, 0],
    [0, 2],
    [2, 2],
    [4, 2],
    [2, 4],
  ],
  heart: [
    [1, 0],
    [3, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [1, 2],
    [2, 2],
    [3, 2],
    [2, 3],
  ],
};

export default function PixelSparkle({ className = '', color = '#f0479f', shape = 'star' }: PixelSparkleProps) {
  return (
    <svg
      viewBox="0 0 5 5"
      aria-hidden="true"
      shapeRendering="crispEdges"
      className={`pointer-events-none absolute animate-float ${className}`}
    >
      {SHAPES[shape].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={color} />
      ))}
    </svg>
  );
}
