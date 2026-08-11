import "./wordmark.css";

type Props = { className?: string };

/** O logotipo escrito, com o mesmo degradê laranja para rosa da marca. */
export default function Wordmark({ className = "" }: Props) {
  return <span className={`wordmark ${className}`.trim()}>Socialy</span>;
}
