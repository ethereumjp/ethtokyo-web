import LogoIcon from "@/components/icons/Logo";
import NewsletterPopover from "@/components/ui/$NewsletterPopover";

export default function Footer() {
  return (
    <div class="max-w-screen-md mx-auto flex justify-between">
      <ul class="inline-flex gap-5 text-sm font-bold [>a]:font-mono [>a]:font-bold">
        <li>
          <a
            href="https://twitter.com/Ethereum_JP"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </li>
        <li>
          <a
            href="https://t.me/ethtokyo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </li>
        <li>
          <NewsletterPopover />
        </li>
      </ul>
      <LogoIcon klass="w-10 h-auto" stroke={32} />
      {/* <p class="text-sm">&copy;2025 ETHTokyo.</p> */}
    </div>
  );
}
