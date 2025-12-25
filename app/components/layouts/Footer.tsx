import LogoIcon from "@/components/icons/Logo";
import NewsletterPopover from "@/components/ui/$NewsletterPopover";

export default function Footer() {
  return (
    <div class="max-w-screen-md mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between">
      <ul class="inline-flex gap-4 text-sm font-bold [>a]:font-mono [>a]:font-bold">
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
        <li>
          <a
            href="https://github.com/ethereumjp"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
      <ul class="inline-flex gap-4 text-sm [>a]:font-mono">
        <li>
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
        {/* <li>
          <a href="/code">Code of conduct</a>
        </li> */}
        <li>
          <a href="/">
            <LogoIcon klass="w-8 h-auto" stroke={32} />
          </a>
        </li>
      </ul>
      {/* <p class="text-sm">&copy;2025 ETHTokyo.</p> */}
    </div>
  );
}
