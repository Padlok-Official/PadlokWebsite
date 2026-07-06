import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, SOCIAL } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <Image src="/icons/icon-48.png" alt="" width={30} height={30} />
              <span>Padlok</span>
            </div>
            <p>
              Secure escrow payments for buying and selling in Ghana. Your
              money stays locked until the deal is done.
            </p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#how-it-works">How it works</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#security">Security</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="/privacy">Privacy policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} Padlok. All rights reserved.</span>
          <div className="footer-socials">
            <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer">
              Twitter / X
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
