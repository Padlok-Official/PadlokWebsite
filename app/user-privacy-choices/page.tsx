import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Your Privacy Choices",
  description:
    "Manage your data with Padlok: access, correct, export, or delete your information, control notifications and biometrics, and see our no-sell, no-share commitment.",
  alternates: { canonical: "/user-privacy-choices" },
};

export default function UserPrivacyChoicesPage() {
  return (
    <article className="legal-page">
      <h1>Your Privacy Choices</h1>
      <p className="updated">Last updated: 6 July 2026</p>

      <p>
        This page explains the choices you have over your information on
        Padlok and how to exercise them. It works alongside our full{" "}
        <Link href="/policy-and-privacy">Privacy Policy</Link>.
      </p>

      <div className="legal-callout">
        <p>
          Padlok does not sell personal information and does not share
          personal information with third parties for cross-context
          advertising. There is nothing to opt out of, because this sharing
          does not happen.
        </p>
      </div>

      <h2>Access, correct, or update your data</h2>
      <p>
        Most of your account information &mdash; name, username, bio,
        location, profile photo, and payment methods &mdash; can be viewed
        and edited directly from your Profile and Security settings in the
        app. For anything you can&rsquo;t change yourself, contact us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Download a copy of your data</h2>
      <p>
        You can request an export of your account, transaction, and
        verification data by emailing{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We aim to
        respond within 30 days.
      </p>

      <h2>Delete your account &amp; data</h2>
      <p>
        You can request account deletion by contacting{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Because
        Padlok handles escrow payments, some transaction and identity
        verification records must be retained for a period afterward to meet
        financial record-keeping and anti-fraud obligations, even after your
        account is deleted. We&rsquo;ll always tell you what is retained and
        why.
      </p>

      <h2>Push notifications</h2>
      <p>
        Control notification permissions from your device&rsquo;s system
        Settings at any time, or manage in-app notification preferences from
        Padlok&rsquo;s Settings screen.
      </p>

      <h2>Biometric unlock &amp; PIN</h2>
      <p>
        Face ID / Touch ID unlock is opt-in and can be turned off anytime
        from Security settings in the app. Your biometric data is never sent
        to Padlok &mdash; it is processed entirely on your device by Apple.
      </p>

      <h2>Two-factor authentication</h2>
      <p>
        Enable or disable TOTP-based two-factor authentication, and
        regenerate your one-time recovery codes, from Security settings in
        the app.
      </p>

      <h2>Marketing communications</h2>
      <p>
        We do not send marketing email on behalf of third parties. If Padlok
        ever introduces optional product update emails, every message will
        include a one-click way to opt out.
      </p>

      <h2>Analytics &amp; advertising</h2>
      <p>
        Padlok does not use third-party analytics or advertising SDKs, and
        does not collect advertising identifiers. Our push-notification
        provider is configured with analytics and ads modules explicitly
        disabled. This website does not use tracking cookies or third-party
        analytics scripts.
      </p>

      <h2>Do not sell or share my personal information</h2>
      <p>
        Padlok does not sell personal information, and does not share
        personal information with third parties for cross-context behavioral
        advertising. This applies to all users regardless of location.
      </p>

      <h2>How to reach us</h2>
      <p>
        For any privacy question or request, email our data protection
        officer at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. If
        you&rsquo;re not satisfied with our response, you may also contact
        Ghana&rsquo;s Data Protection Commission.
      </p>
    </article>
  );
}
