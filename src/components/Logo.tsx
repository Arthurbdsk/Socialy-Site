type Props = { className?: string; alt?: string };

/** A marca, recortada do arquivo original com fundo transparente. */
export default function Logo({ className, alt = "" }: Props) {
  return (
    <img
      className={className}
      src="/logo.png"
      alt={alt}
      width={150}
      height={176}
      decoding="async"
    />
  );
}
