import { TESTFLIGHT_URL, APK_URL } from "@/lib/constants";

function AppleIcon() {
  return (
    <svg viewBox="0 0 384 512" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg viewBox="0 0 576 512" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M420.55 301.93a24 24 0 1 1 24-24 24 24 0 0 1-24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24m270.7-116.13 47.94-83a10 10 0 1 0-17.27-10h.01l-48.54 84.07a301.25 301.25 0 0 0-247.6 0l-48.54-84.07a10 10 0 1 0-17.27 10l47.94 83C64.53 219.37 8.24 285.94 0 367.13h576c-8.24-81.19-64.54-147.76-149.85-181.33" />
    </svg>
  );
}

export default function DownloadButtons({
  variant = "panel",
}: {
  variant?: "panel" | "inline";
}) {
  if (variant === "inline") {
    return (
      <div className="hero-ctas">
        <a
          href={TESTFLIGHT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg"
        >
          Get it on TestFlight
        </a>
        <a href={APK_URL} className="btn btn-outline btn-lg" download>
          Download APK
        </a>
      </div>
    );
  }

  return (
    <div className="download-buttons">
      <a
        href={TESTFLIGHT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="download-btn"
      >
        <span className="icon" aria-hidden="true">
          <AppleIcon />
        </span>
        <span className="label">
          <small>iOS &middot; Beta via TestFlight</small>
          <strong>Get it on TestFlight</strong>
        </span>
      </a>
      <a href={APK_URL} className="download-btn" download>
        <span className="icon" aria-hidden="true">
          <AndroidIcon />
        </span>
        <span className="label">
          <small>Android &middot; Direct download</small>
          <strong>Download APK</strong>
        </span>
      </a>
      <p className="apk-note">
        Padlok is currently in public beta. iOS is distributed through
        Apple&rsquo;s TestFlight and Android via a direct APK download &mdash;
        official App Store and Google Play listings are coming soon.
      </p>
    </div>
  );
}
