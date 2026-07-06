import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing use of Padlok's escrow service, including fees, disputes, prohibited items, and account termination.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="legal-page">
      <h1>Terms &amp; Conditions</h1>
      <p className="updated">Effective: 1 September 2025</p>

      <p>
        These Terms &amp; Conditions govern your use of Padlok, a
        peer-to-peer escrow app for buying and selling in Ghana. By creating
        an account or using Padlok, you agree to these terms.
      </p>

      <h2>Escrow Service</h2>
      <p>
        Padlok holds a buyer&rsquo;s funds in escrow until the item is
        delivered and the buyer confirms receipt, at which point funds are
        released to the seller. Funds are not paid out to the seller before
        confirmation, and the buyer cannot recall funds already released.
      </p>

      <h2>Fees</h2>
      <p>
        A platform fee applies to escrow transactions. Deposit and
        withdrawal fees vary by payment method (Paystack or MTN Mobile
        Money) and are shown before you confirm any transaction.
      </p>

      <h2>Disputes</h2>
      <p>
        Either party may raise a dispute within the applicable dispute
        window if an item is not delivered as described. Resolution
        timelines depend on the buyer and seller&rsquo;s verification tier,
        and Padlok may request evidence from either party before releasing
        or refunding escrowed funds.
      </p>

      <h2>Prohibited Items</h2>
      <p>
        Illegal goods, firearms, and counterfeit items are prohibited on
        Padlok. Listing or attempting to transact in prohibited items may
        result in immediate suspension of your account.
      </p>

      <h2>Account Termination</h2>
      <p>
        Padlok may suspend or terminate accounts involved in fraud,
        chargebacks, or other abuse of the platform. Where possible,
        undisputed escrowed funds belonging to the affected user will be
        returned.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these terms as Padlok evolves. Continued use of the
        app after an update constitutes acceptance of the revised terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href="mailto:hello@padlokit.com">hello@padlokit.com</a>.
      </p>
    </article>
  );
}
