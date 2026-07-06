export const FAQ_ITEMS = [
  {
    question: "What is Padlok?",
    answer:
      "Padlok is a peer-to-peer escrow app built for buying and selling in Ghana. When you buy something, your payment is locked in escrow instead of going straight to the seller. The seller only gets paid once you confirm the item was delivered as agreed, and you get your money back if it wasn't.",
  },
  {
    question: "How does escrow protect me from online scams?",
    answer:
      "Instead of paying a stranger directly and hoping the item arrives, you fund a Padlok escrow. The seller can see the money is secured, which builds trust to ship, and you keep control of the funds until you confirm delivery. Neither side can walk away with both the money and the item.",
  },
  {
    question: "Is Padlok on the App Store or Google Play?",
    answer:
      "Not yet. Padlok is currently in public beta. iOS users can join through Apple's TestFlight app, and Android users can install the APK directly. Official App Store and Google Play listings are on the way.",
  },
  {
    question: "How do I install the iOS beta from TestFlight?",
    answer:
      "Install the free TestFlight app from the App Store, then tap our TestFlight link to join the Padlok beta. TestFlight will install Padlok automatically and notify you of new builds.",
  },
  {
    question: "Is it safe to install the Android APK?",
    answer:
      "Yes. Because Padlok isn't on Google Play yet, Android will ask you to allow installs from your browser the first time. Download the APK from this page only, then open it to install. We publish a new APK here with every release.",
  },
  {
    question: "What payment methods does Padlok support?",
    answer:
      "Padlok supports Paystack (cards and bank transfers) and MTN Mobile Money (MoMo), so both buyers and sellers can fund and withdraw using the payment methods already common in Ghana.",
  },
  {
    question: "How is my account secured?",
    answer:
      "Every session is protected by a PIN, with optional Face ID or Touch ID unlock. Sensitive actions like withdrawals also support two-factor authentication (TOTP), and your login tokens are stored in the device Keychain rather than app storage that other apps could read.",
  },
  {
    question: "Can I track my delivery in real time?",
    answer:
      "Yes. Padlok shows live delivery progress, and on iOS you can follow a delivery from the Lock Screen or Dynamic Island without opening the app.",
  },
] as const;
