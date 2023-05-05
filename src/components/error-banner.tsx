import "../styles/error-banner.css";
export default function ErrorBanner({ error }: { error: string }) {
  return (
    <div className="error-banner">
      <p>{error}</p>
    </div>
  );
}
