import { FAQ_ITEMS } from "@/lib/faq";

export default function Faq() {
  return (
    <div className="faq-list">
      {FAQ_ITEMS.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
