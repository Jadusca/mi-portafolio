const PALETTE = {
  body: '#f8c8e6',
  bodyShade: '#e9a0cc',
  ink: '#3d2a42',
  blush: '#ff7bd0',
  nose: '#f0479f',
};

type Pixel = [x: number, y: number, w: number, h: number, color: keyof typeof PALETTE];

const PIXELS: Pixel[] = [
  [2, 2, 2, 2, 'body'],
  [8, 2, 2, 2, 'body'],
  [3, 3, 1, 1, 'blush'],
  [10, 3, 1, 1, 'blush'],
  [2, 4, 12, 6, 'body'],
  [3, 10, 10, 2, 'bodyShade'],
  [4, 6, 2, 2, 'ink'],
  [10, 6, 2, 2, 'ink'],
  [7, 8, 2, 1, 'nose'],
  [3, 9, 1, 1, 'blush'],
  [12, 9, 1, 1, 'blush'],
  [4, 12, 3, 1, 'bodyShade'],
  [9, 12, 3, 1, 'bodyShade'],
];

export default function PixelCat({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      role="img"
      aria-label="Gatito pixel art"
      shapeRendering="crispEdges"
      className={className}
    >
      {PIXELS.map(([x, y, w, h, color], index) => (
        <rect key={index} x={x} y={y} width={w} height={h} fill={PALETTE[color]} />
      ))}
    </svg>
  );
}
