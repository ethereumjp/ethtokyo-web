const target = "newsletter";

export default function NewsletterDialog() {
  return (
    <>
      <button popovertarget={target} popovertargetAction="show" type="button">
        Newsletter
      </button>
      <div
        id={target}
        popover="auto"
        class="fixed bg-transparent bottom-18 left-6 top-auto z-50"
      >
        <div class="w-screen-sm block mx-auto rounded-lg py-8 px-6 border style-base flex flex-col gap-4 shadow-lg">
          <h5 class="font-bold font-mono">Newsletter</h5>
          <p class="text-sm font-normal">
            Stay updated with the latest news and announcements
          </p>
          <input type="email" class="w-full" placeholder="your@email" />
          <button
            class="absolute top-2 right-2 cursor-pointer w-6 h-6"
            popovertarget={target}
            popovertargetAction="hidden"
            type="button"
          >
            x
          </button>
        </div>
      </div>
    </>
  );
}
