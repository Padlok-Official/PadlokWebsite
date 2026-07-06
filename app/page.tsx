import type { Metadata } from "next";
import Image from "next/image";
import DownloadButtons from "@/components/DownloadButtons";
import Faq from "@/components/Faq";
import { FAQ_ITEMS } from "@/lib/faq";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const FEATURES = [
  {
    title: "Escrow-locked payments",
    description:
      "Funds move into escrow the moment a deal is made and stay locked until the buyer confirms delivery — so no one can walk away with both the money and the item.",
  },
  {
    title: "Live delivery tracking",
    description:
      "Follow every step of a delivery in real time, right down to a live countdown on your iOS Lock Screen and Dynamic Island.",
  },
  {
    title: "Ghanaian payment rails",
    description:
      "Fund and withdraw with Paystack (cards, bank transfer) or MTN Mobile Money — the payment methods people in Ghana already use.",
  },
  {
    title: "PIN, Face ID & 2FA",
    description:
      "Every session is protected by a PIN with optional biometric unlock, and sensitive actions like withdrawals require a fresh two-factor code.",
  },
  {
    title: "Real-time status updates",
    description:
      "Wallet balances, transaction status, and escrow lifecycle events update instantly over a live connection — no refreshing, no guessing.",
  },
  {
    title: "Verified identities",
    description:
      "Escrow creation and completion require identity verification, adding a layer of accountability on both sides of a deal.",
  },
];

const STEPS = [
  {
    title: "Agree & fund escrow",
    description:
      "Buyer and seller agree on an item and price. The buyer funds the deal through Padlok using Paystack or MTN MoMo — the money is locked, not sent to the seller yet.",
  },
  {
    title: "Track the delivery",
    description:
      "The seller ships or hands over the item while the buyer follows progress live, right from the Lock Screen on iOS.",
  },
  {
    title: "Confirm & release funds",
    description:
      "Once the buyer confirms the item arrived as described, Padlok releases the escrowed funds to the seller instantly.",
  },
];

const SECURITY_ROWS = [
  "PIN lock on every launch",
  "Face ID / Touch ID unlock",
  "Two-factor authentication (TOTP)",
  "Keychain-secured tokens",
  "Tiered identity verification",
];

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Padlok",
  operatingSystem: "iOS, Android",
  applicationCategory: "FinanceApplication",
  url: SITE_URL,
  description:
    "Padlok is a peer-to-peer escrow app for Ghana. Buyers lock funds until delivery is confirmed, sellers get paid the moment the deal is done.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GHS",
  },
  countriesSupported: "GH",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div>
            <span className="hero-badge">
              <span className="dot" aria-hidden="true" />
              Public beta &middot; iOS &amp; Android
            </span>
            <h1>
              Buy and sell online in Ghana <span className="accent">without getting scammed.</span>
            </h1>
            <p className="lead">
              Padlok locks a buyer&rsquo;s payment in escrow until delivery is
              confirmed, so sellers ship with confidence and buyers never pay
              for something that never shows up.
            </p>
            <DownloadButtons variant="inline" />
            <p className="hero-note">
              Free to download &middot; Available now on TestFlight and as a direct APK
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <b>100%</b>
                <span>Funds held in escrow</span>
              </div>
              <div className="hero-stat">
                <b>2</b>
                <span>Local payment rails</span>
              </div>
              <div className="hero-stat">
                <b>24/7</b>
                <span>Live delivery tracking</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="phone-frame">
              <div className="glow-logo">
                <Image
                  src="/app_logo.png"
                  alt="Padlok app logo"
                  width={240}
                  height={240}
                  priority
                />
              </div>
              <div className="phone-card">
                <div className="row">
                  <span>Escrow &middot; Camera &amp; lens</span>
                  <span className="status-pill">Funded</span>
                </div>
                <div className="amount">GHS 850.00</div>
              </div>
              <div className="phone-card">
                <div className="row">
                  <span>Delivery status</span>
                  <span className="status-pill">Step 3 of 5</span>
                </div>
                <div className="amount" style={{ fontSize: "1rem" }}>
                  Out for delivery &middot; ETA today
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="trust-strip">
        <div className="container">
          <span>Paystack</span>
          <span>MTN Mobile Money</span>
          <span>Built for Ghana</span>
          <span>Secure by design</span>
        </div>
      </div>

      {/* How it works */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section-head centered">
            <span className="eyebrow">How it works</span>
            <h2>Three steps to a scam-proof deal</h2>
            <p>
              Padlok sits between buyer and seller so money only moves when
              both sides have held up their end.
            </p>
          </div>
          <div className="steps">
            {STEPS.map((step, index) => (
              <div className="step-card" key={step.title}>
                <span className="step-number">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section section-alt" id="features">
        <div className="container">
          <div className="section-head centered">
            <span className="eyebrow">Features</span>
            <h2>Everything a safe transaction needs</h2>
            <p>
              Built natively for iOS with real-time updates, so every party
              always knows exactly where a deal stands.
            </p>
          </div>
          <div className="features-grid">
            {FEATURES.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section" id="security">
        <div className="container">
          <div className="security-wrap">
            <div>
              <span className="eyebrow">Security</span>
              <h2>Your money and your identity, locked down</h2>
              <p style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                Padlok handles real money, so security isn&rsquo;t an
                afterthought &mdash; it&rsquo;s layered into every screen.
              </p>
              <div className="security-list">
                <div className="security-item">
                  <span className="dot-icon">1</span>
                  <div>
                    <h3>Device-bound Keychain storage</h3>
                    <p>
                      Login tokens live in the iOS Keychain, never in app
                      storage, and never leave your device.
                    </p>
                  </div>
                </div>
                <div className="security-item">
                  <span className="dot-icon">2</span>
                  <div>
                    <h3>Biometric unlock with drift detection</h3>
                    <p>
                      Face ID and Touch ID unlock the app, and access is
                      automatically revoked if your enrolled biometrics
                      change.
                    </p>
                  </div>
                </div>
                <div className="security-item">
                  <span className="dot-icon">3</span>
                  <div>
                    <h3>Two-factor authentication</h3>
                    <p>
                      Enable TOTP-based 2FA for an extra layer of protection
                      on withdrawals and other sensitive actions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="security-panel">
              <h4>Security checklist</h4>
              {SECURITY_ROWS.map((row) => (
                <div className="security-row" key={row}>
                  <span className="check">&#10003;</span>
                  <span>{row}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="section" id="download">
        <div className="download-section">
          <div>
            <span className="eyebrow" style={{ color: "#FF9A56" }}>
              Get the app
            </span>
            <h2>Download Padlok today</h2>
            <p>
              Padlok is in public beta ahead of its official App Store and
              Google Play launch. Join now on TestFlight, or grab the Android
              APK directly &mdash; both are free.
            </p>
          </div>
          <DownloadButtons variant="panel" />
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt" id="faq">
        <div className="container">
          <div className="section-head centered">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions</h2>
          </div>
          <Faq />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section cta-band">
        <div className="container">
          <h2>Stop hoping. Start locking.</h2>
          <p>
            Join the Padlok beta today and make your next online deal in
            Ghana a safe one.
          </p>
          <DownloadButtons variant="inline" />
        </div>
      </section>
    </>
  );
}
