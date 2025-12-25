import { createRoute } from "honox/factory";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy";

export default createRoute((c) => {
  return c.render(
    <>
      <title>Privacy Policy | ETHTokyo '26</title>
      <PrivacyPolicy />
    </>,
  );
});
