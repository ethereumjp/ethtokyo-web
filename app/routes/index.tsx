import { createRoute } from "honox/factory";
import TopPage from "@/components/pages/Top";

export default createRoute((c) => {
  return c.render(
    <>
      <title>ETHTokyo '26</title>
      <TopPage />
    </>,
  );
});
