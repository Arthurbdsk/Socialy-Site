type IconProps = { className?: string };

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
      <path
        d="M4.5 11.5 11.5 4.5M5.6 4.5h5.9v5.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
      <path
        d="M3 8h10M8.8 3.6 13.2 8l-4.4 4.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Plus({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <path
        d="M8 2.5v11M2.5 8h11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WhatsAppGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2.1 22l5.34-1.4a9.8 9.8 0 0 0 4.6 1.16h.01c5.43 0 9.84-4.4 9.84-9.84 0-2.63-1.03-5.1-2.89-6.96A9.75 9.75 0 0 0 12.04 2Zm0 1.8c2.15 0 4.17.84 5.69 2.36a7.99 7.99 0 0 1 2.36 5.69c0 4.44-3.61 8.05-8.06 8.05a8.1 8.1 0 0 1-4.1-1.12l-.3-.18-3.05.8.81-2.97-.19-.31a7.98 7.98 0 0 1-1.22-4.27c0-4.45 3.61-8.05 8.06-8.05Zm-3.4 4.3c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.43-.59 1.63-1.15.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.31-.74-1.79-.19-.46-.39-.4-.53-.41h-.04Z"
      />
    </svg>
  );
}

export function InstagramGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.25" fill="currentColor" />
    </svg>
  );
}
