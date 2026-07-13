import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Padlok collects, uses, secures, and shares information — including identity verification, payment data, and our no-third-party-sharing commitment.",
  alternates: { canonical: "/policy-and-privacy" },
};

export default function PolicyAndPrivacyPage() {
  return (
    <article className="legal-page">
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: 7 July 2026</p>

      <nav className="toc" aria-label="Table of contents">
        <h2>On this page</h2>
        <ol>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#information-we-collect">Information we collect</a></li>
          <li><a href="#what-we-dont-collect">What we don&rsquo;t collect</a></li>
          <li><a href="#how-we-use-it">How we use your information</a></li>
          <li><a href="#how-we-share-it">How we share your information</a></li>
          <li><a href="#security">How we secure your information</a></li>
          <li><a href="#retention">Data retention</a></li>
          <li><a href="#your-choices">Your rights &amp; choices</a></li>
          <li><a href="#children">Children&rsquo;s privacy</a></li>
          <li><a href="#transfers">International data transfers</a></li>
          <li><a href="#changes">Changes to this policy</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ol>
      </nav>

      <h2 id="overview">Overview</h2>
      <p>
        Padlok is a peer-to-peer escrow app that lets people in Ghana buy and
        sell with confidence: a buyer&rsquo;s payment is held in escrow until
        delivery is confirmed, and the seller is paid the moment the deal is
        done. This Privacy Policy explains what information we collect to run
        that service, how we use and protect it, and who &mdash; if anyone
        &mdash; we share it with.
      </p>

      <div className="legal-callout">
        <p>
          The short version: we do not sell your personal data, and we do not
          share it with third parties for their own marketing or advertising
          purposes. Full detail is in{" "}
          <a href="#how-we-share-it">How we share your information</a> below.
        </p>
      </div>

      <h2 id="information-we-collect">Information we collect</h2>
      <p>We collect information in the following categories:</p>

      <h3>Account &amp; profile information</h3>
      <p>
        Name, email address, phone number, username, password, and optional
        profile details you choose to add such as a bio, a free-text location
        field, and a profile photo. We do not collect precise GPS location
        &mdash; the &ldquo;location&rdquo; field is just text you type in, and
        it is not a structured or verified mailing address. The
        proof-of-address document collected for Tier 2 verification (see
        below) is stored as an image, not parsed into an address record.
      </p>

      <h3>Identity verification (KYC) information</h3>
      <p>
        Padlok uses a tiered verification system to keep the marketplace
        trustworthy and to meet anti-fraud and financial regulatory
        obligations:
      </p>
      <ul>
        <li>
          <strong>Tier 1 &mdash; Identity:</strong> a photo of the front and
          back of your Ghana Card, and a selfie of you holding it.
        </li>
        <li>
          <strong>Tier 2 &mdash; Trusted:</strong> a bank statement and a
          proof-of-address document.
        </li>
        <li>
          <strong>Tier 3 &mdash; Business:</strong> your business name,
          website, and social profiles.
        </li>
      </ul>
      <p>
        These documents are only reviewed by staff with the specific
        <code>verify_kyc</code> permission on our internal admin system, and
        every access is recorded in an audit log.
      </p>

      <h3>Payment &amp; financial information</h3>
      <p>
        To fund escrow, withdraw, or add a payout method, we store the
        provider (e.g. bank or mobile network), account/holder name, and
        either the last four digits of a card or a bank/mobile money account
        number. We never see or store your full card number or PIN &mdash;
        card payments are handled directly by Moolre&rsquo;s secure
        infrastructure. We also keep a record of your wallet balance and
        funding/withdrawal history.
      </p>

      <h3>Transaction &amp; escrow information</h3>
      <p>
        Item details and photos, price, escrow status, delivery milestones
        (e.g. dispatched, out for delivery, delivered), counterparty contact
        details needed to complete the deal, ratings left after a
        transaction, and any evidence submitted if a dispute is raised.
      </p>

      <h3>Security credentials</h3>
      <p>
        Your password and app PIN are stored as one-way hashes and verified
        server-side &mdash; we cannot read them back. If you enable
        two-factor authentication, we store the encrypted TOTP secret and
        one-time recovery codes. Face ID / Touch ID processing happens
        entirely on your device via Apple&rsquo;s Secure Enclave &mdash;
        Padlok only ever receives a &ldquo;biometric enabled&rdquo; flag,
        never your face or fingerprint data.
      </p>

      <h3>Device &amp; technical information</h3>
      <p>
        Device type and OS version, app version, a push-notification token
        (used only to deliver notifications to your device), and security
        audit logs of account activity such as logins and PIN attempts. Your
        IP address is processed transiently for rate-limiting and fraud
        prevention (e.g. blocking repeated failed login/PIN attempts) &mdash;
        it is not linked to your profile for marketing or analytics purposes,
        and is not retained outside of short-lived security logs.
      </p>

      <h3>Communications</h3>
      <p>
        Support requests you send us, in-app notifications, and
        correspondence related to a dispute.
      </p>

      <h2 id="what-we-dont-collect">What we don&rsquo;t collect</h2>
      <p>
        Padlok does not track your precise GPS location &mdash; delivery
        progress is reported through milestones (e.g. dispatched, in transit,
        delivered), not live device tracking. We also do not use any
        third-party analytics or advertising SDKs: our push-notification
        provider (Firebase Cloud Messaging) is configured with Analytics and
        Ads modules explicitly disabled, and no advertising identifiers are
        collected.
      </p>

      <h2 id="how-we-use-it">How we use your information</h2>
      <ul>
        <li>Operate escrow, wallet, and withdrawal functionality</li>
        <li>Verify your identity and prevent fraud</li>
        <li>Process deposits and withdrawals through Moolre or MTN Mobile Money</li>
        <li>Send account, security, and transaction notifications</li>
        <li>Investigate and resolve disputes between buyers and sellers</li>
        <li>Maintain security logs and detect suspicious activity</li>
        <li>Meet legal and financial record-keeping obligations</li>
        <li>Maintain and improve the reliability of the app</li>
      </ul>

      <h2 id="how-we-share-it">How we share your information</h2>
      <p>
        <strong>
          We do not sell your personal data, and we do not share it with
          third parties for their own marketing or advertising purposes.
        </strong>{" "}
        The only circumstances in which information leaves Padlok are:
      </p>
      <ul>
        <li>
          <strong>Payment processors</strong> (Moolre, MTN Mobile Money)
          receive only the data required to complete a specific deposit,
          withdrawal, or payment.
        </li>
        <li>
          <strong>Push-notification delivery</strong> (Firebase Cloud
          Messaging, operated by Google) receives only a device token used
          to deliver notifications &mdash; not your profile or transaction
          data.
        </li>
        <li>
          <strong>Transactional email</strong> (our email delivery provider)
          receives only the email address and content needed to send you
          account and security emails.
        </li>
        <li>
          <strong>Your counterparty in a deal</strong> sees the limited
          contact details needed to complete that specific transaction, the
          same as in any marketplace.
        </li>
        <li>
          <strong>Legal &amp; safety:</strong> if required by law, a valid
          court order, or to protect against fraud, or to enforce our{" "}
          <Link href="/terms">Terms &amp; Conditions</Link>.
        </li>
        <li>
          <strong>Business transfers:</strong> if Padlok is ever involved in
          a merger or acquisition, your information would remain protected
          under the commitments in this policy.
        </li>
      </ul>
      <p>
        Every service provider we use is contractually restricted to
        processing data solely to provide their service to Padlok &mdash;
        never for their own independent purposes.
      </p>

      <h2 id="security">How we secure your information</h2>
      <ul>
        <li>Data is encrypted in transit (TLS) and at rest</li>
        <li>Passwords and PINs are stored as one-way hashes, never in plain text</li>
        <li>Login tokens are stored in your device&rsquo;s secure Keychain, not app storage</li>
        <li>Biometric data never leaves your device</li>
        <li>
          Staff access to identity and financial data is role-based &mdash;
          only permissions like <code>verify_kyc</code> or{" "}
          <code>view_users</code> unlock specific views &mdash; and every
          admin action is written to an audit log
        </li>
      </ul>

      <h2 id="retention">Data retention</h2>
      <p>
        We retain account and transaction data for as long as your account is
        active, and for a further period afterward where needed to meet
        financial record-keeping obligations, resolve disputes, or comply
        with the law. Identity verification documents are retained only as
        long as necessary for these purposes and are then securely deleted.
      </p>

      <h2 id="your-choices">Your rights &amp; choices</h2>
      <p>
        You have rights over your information, including access, correction,
        and deletion. See the dedicated{" "}
        <Link href="/user-privacy-choices">Your Privacy Choices</Link> page
        for how to exercise them.
      </p>

      <h2 id="children">Children&rsquo;s privacy</h2>
      <p>
        Padlok is a financial escrow service and is not directed at, nor
        knowingly used to collect information from, anyone under 18 years of
        age. If we learn that we have collected information from a minor, we
        will delete it.
      </p>

      <h2 id="transfers">International data transfers</h2>
      <p>
        Our infrastructure providers may process or store data outside
        Ghana. Where this happens, we require providers to protect your
        information to a standard consistent with this policy and Ghana&rsquo;s
        Data Protection Act, 2012 (Act 843).
      </p>

      <h2 id="changes">Changes to this policy</h2>
      <p>
        We may update this policy as Padlok evolves. Material changes will be
        reflected here with an updated effective date.
      </p>

      <h2 id="contact">Contact us</h2>
      <p>
        Questions about this policy, or requests relating to your data, can
        be sent to our data protection officer at{" "}
        <a href="mailto:hello@padlokit.com">hello@padlokit.com</a>. If you
        are not satisfied with our response, you may also contact Ghana&rsquo;s
        Data Protection Commission.
      </p>
    </article>
  );
}
