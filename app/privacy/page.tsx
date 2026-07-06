import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Padlok collects, uses, and protects your data, including identity verification, security, and your rights over your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="legal-page">
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: 1 September 2025</p>

      <p>
        This Privacy Policy explains what data Padlok collects, how we use
        it, and the choices you have over your information.
      </p>

      <h2>Data We Collect</h2>
      <p>
        We collect your name, phone number, transaction history, and
        certain device information needed to secure your account and
        process escrow transactions.
      </p>

      <h2>How We Use Your Data</h2>
      <p>
        Your data is used for identity verification, fraud detection,
        dispute resolution, and improving the Padlok service. We do not
        sell your personal data.
      </p>

      <h2>Data Security</h2>
      <p>
        Data is encrypted in transit and at rest. Authentication tokens are
        stored in your device&rsquo;s secure Keychain rather than app
        storage, and biometric data (Face ID / Touch ID) never leaves your
        device &mdash; Padlok never sees or stores it.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may access, correct, or request deletion of your data by
        contacting our data protection officer at{" "}
        <a href="mailto:hello@padlokit.com">hello@padlokit.com</a>.
      </p>

      <h2>Analytics</h2>
      <p>
        We use usage analytics to understand how Padlok is used and to
        improve the app. Analytics preferences can be managed from within
        the app&rsquo;s settings.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy as Padlok evolves. Material changes will
        be reflected here with an updated effective date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href="mailto:hello@padlokit.com">hello@padlokit.com</a>.
      </p>
    </article>
  );
}
