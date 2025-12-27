import { createRoute } from "honox/factory";
import StaticPage from "@/components/pages/StaticPage";

export default createRoute((c) => {
  return c.render(
    <>
      <title>Code of Conduct | ETHTokyo '26</title>
      <StaticPage title="Code of Conduct">
        <div class="px-4 flex flex-col gap-8">
          <p>
            <strong>Last updated:</strong> [2025-12-27]
          </p>
          <section>
            <p>
              We view this event as a temporary autonomous zone dependent on a
              high-trust social contract. This isn't a nanny state; it's a
              framework for preserving the scarcity of attention and the
              sanctity of self-ownership. Without these constraints, the market
              of ideas devolves into a tragedy of the commons. Read this
              protocol layer carefully. Violating it signals you are
              high-entropy noise, and you will be filtered out. These rules
              exist to maintain the emergent order of the event. If you require
              external governance from staff to behave correctly, you have
              already failed the aptitude test for this community. We assume you
              are sovereign agents, capable of self-regulation. Do not force us
              to be the leviathan.
            </p>
          </section>
          <section>
            <h2 class="font-bold text-lg mb-2">1. Harassment & Consent</h2>
            <p class="pb-2">We operate on a strict opt-in protocol.</p>
            <ul class="list-disc px-6 space-y-1.5">
              <li>
                <strong>Respecting boundaries</strong>: If someone says "no,"
                "stop," or physically disengages, the transaction is void.
                Continuing to push—whether for a debate, a pitch, or a chat—is a
                violation of the non-aggression principle..
              </li>
              <li>
                <strong>Assume Zero Consent</strong>: Do not touch anyone
                without explicit permission. Do not photograph anyone wearing a
                "no photo" indicator where we have them.
              </li>
              <li>
                <strong>Scope</strong>: This applies to all venues,
                afterparties, and the official digital channels.
              </li>
            </ul>
          </section>
          <section>
            <h2 class="font-bold text-lg mb-2">2. Shilling & Spam</h2>
            <p class="pb-2">
              Attention is the scarcest resource out here now. Do not steal it.
            </p>
            <ul class="list-disc px-6 space-y-1.5">
              <li>
                <strong>Signal vs noise</strong>: Do not corner people to pitch
                your tokens. Aggressive shilling is taxes on our collective
                cognitive load. Engage on fundamental engineering or philosophy
                and let price talk in the market.
              </li>
              <li>
                <strong>Recruitment</strong>: Headhunting is acceptable;
                pestering builders in the flow state is not. Read the room.
              </li>
            </ul>
          </section>
          <section>
            <h2 class="font-bold text-lg mb-2">3. Property & Commons</h2>
            <p class="pb-2">
              Do not let the space devolve into another tragedy of the commons.
            </p>
            <ul class="list-disc px-6 space-y-1.5">
              <li>
                <strong>Property rights</strong>: Never touch another person's
                keyboard or unlocked laptop (or anything not explicitly yours,
                really). Building trustless systems does not absolve us of the
                need for physical integrity.
              </li>
              <li>
                <strong>The Commons</strong>: Minimize your negative
                externalities. Respect the space(s) that you occupy. Leave the
                environment in a better condition than you found it.
              </li>
            </ul>
          </section>
          <section>
            <h2 class="font-bold text-lg mb-2">4. Physical Security</h2>
            <p class="pb-2">
              The decentralized future requires each of us to be capable of
              self-regulation. Do not force us to be the leviathan.
            </p>
            <ul class="list-disc px-6 space-y-1.5">
              <li>
                <strong>Zero Tolerance</strong>: Any act of harm towards
                participants or staff—violence, doxxing, or harassment—results
                in immediate, permanent exclusion.
              </li>
              <li>
                <strong>Dispute Resolution</strong>: In the event of a dispute,
                resolution will be determined by the sole discretion of the
                event staff team.
              </li>
            </ul>
          </section>
        </div>
      </StaticPage>{" "}
    </>,
  );
});
