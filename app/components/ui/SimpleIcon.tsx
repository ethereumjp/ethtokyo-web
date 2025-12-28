export default function SimpleIcon({
  src,
  alt,
  klass = "w-4 h-4",
}: {
  src: string;
  alt: string;
  klass?: string;
}) {
  // Remove query params or color paths if present to get clean SVG content for masking
  // actually, keeping query params like viewbox=auto is fine, but we should strip colors if the user passes them by mistake.
  // For this implementation, we assume the user (me) will pass the clean URL.

  return (
    <div
      aria-label={alt}
      role="img"
      class={`${klass} bg-current`}
      style={{
        maskImage: `url('${src}')`,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
        WebkitMaskImage: `url('${src}')`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        backgroundColor: "currentColor",
      }}
    />
  );
}
