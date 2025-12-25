import { createRoute } from "honox/factory";
import TopPage from "@/components/pages/top/index";

export default createRoute((c) => {
  return c.render(
    <>
      <title>ETHTokyo '26</title>
      <TopPage />
    </>,
  );
});
