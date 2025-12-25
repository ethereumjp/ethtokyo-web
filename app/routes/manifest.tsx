import { createRoute } from "honox/factory";
import StaticPage from "@/components/pages/StaticPage";

export default createRoute((c) => {
  return c.render(
    <>
      <title>Manifest | ETHTokyo '26</title>
      <StaticPage title="Manifest">
        <div class="px-4 flex flex-col gap-8">
          <p>
            2026 is the first major year where the{" "}
            <strong>full Ethereum stack</strong> is live. We now have cheap data
            (Dencun), cheap bandwidth (Fusaka), programmable accounts (Pectra),
            and the hardware roadmap (the Verge).
          </p>

          <section>
            <h2 class="font-bold text-lg mb-2">
              01. Intent-centric economy (AI Agents & DeFi)
            </h2>
            <p class="mb-4">
              With Pectra killing the passive wallet in EIP-7702, we are
              transitioning from a user-centric economy to an{" "}
              <em>intent-centric economy</em>. We are no longer limited to{" "}
              <em>users</em> signing wallet transactions; we have <em>auths</em>{" "}
              delegating to <em>logic</em>.
            </p>
            <p class="mb-4">
              In 2026, the primary role of the human is to set the objective
              function, while the machine handles the rest. The next billion
              users of Ethereum won’t be people with wallets; they will be
              autonomous agents with API keys. Solvers, arbitragers, and
              resource allocators that operate at the speed of the block. We
              stop building interfaces for thumbs and start building protocols
              for logic.
            </p>
            <ul class="list-disc list-outside pl-5 space-y-1">
              <li>
                <strong>stack:</strong> EIP-7702, solver auctions, CoWswap
                hooks, AI execution layers.
              </li>
              <li>
                <strong>thesis:</strong> the wallet is a shell. the agent is the
                user.
              </li>
              <li>
                <strong>build:</strong>
                <ul class="list-[circle] list-outside pl-5 mt-1 space-y-1">
                  <li>automated treasury managers using 7702 delegation.</li>
                  <li>AI-driven arbitrage bots that settle via CoW-AMMs.</li>
                  <li>
                    "headless" dapps that interact only via solver intents.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="font-bold text-lg mb-2">
              02. Physical Verification (DePIN)
            </h2>
            <p class="mb-4">
              Fusaka just shipped <em>PeerDAS</em> (EIP-7594), and the data
              availability bottleneck is effectively gone. Ethereum is now
              entering <em>the verge</em>: the era of statelessness where
              verification becomes cheap enough for any device.
            </p>
            <p class="mb-4">
              We are taking this literally. Crypto can no longer afford to be
              self-referential. We must now move from tracking tokens to{" "}
              <em>verifying physics</em>. If your ledger does not touch reality,
              it becomes only a game. Proof of energy, proof of compute, proof
              of bandwidth; we build the bridge between the merkle root and the
              power grid, anchoring the ledger to the laws of thermodynamics.
            </p>
            <ul class="list-disc list-outside pl-5 space-y-1">
              <li>
                <strong>the stack:</strong> PeerDAS (EIP-7594), EigenLayer AVS,
                hardware sensors.
              </li>
              <li>
                <strong>thesis:</strong> blobs for sensor data, not just jpegs.
              </li>
              <li>
                <strong>build:</strong>
                <ul class="list-[circle] list-outside pl-5 mt-1 space-y-1">
                  <li>
                    high-frequency sensor networks posting da proofs via
                    PeerDAS.
                  </li>
                  <li>GPU compute markets verified on-chain.</li>
                  <li>
                    energy grid arbitration using light-client verification.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="font-bold text-lg mb-2">
              03. Privacy by default (anti-surveillance)
            </h2>
            <p class="mb-4">
              We are answering the call to{" "}
              <em>"Make Ethereum Cypherpunk Again,"</em> but not for nostalgia;
              for <em>survival</em>. If an AI can model your behavior, it will
              farm you. In an age of adversarial AI,{" "}
              <strong>visibility is liability</strong>.
            </p>
            <p class="mb-4">
              We treat privacy not as a feature, but as an{" "}
              <strong>economic default</strong>. A tool for survival in a
              hyper-efficient and predatory, surveillance-heavy market.
            </p>
            <ul class="list-disc list-outside pl-5 space-y-1">
              <li>
                <strong>stack:</strong> privacy pools, BLS precompiles,
                encrypted mempools.
              </li>
              <li>
                <strong>thesis:</strong> transparency is an attack vector.
              </li>
              <li>
                <strong>build:</strong>
                <ul class="list-[circle] list-outside pl-5 mt-1 space-y-1">
                  <li>Anti-MEV transaction bundlers.</li>
                  <li>ZK-identity proofs governance without doxxing.</li>
                  <li>
                    Stealth compliance tools to prove you are not a criminal,
                    without revealing who you are.
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </StaticPage>
    </>,
  );
});
