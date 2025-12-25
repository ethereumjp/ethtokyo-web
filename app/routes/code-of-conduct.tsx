import { createRoute } from "honox/factory";
import StaticPage from "@/components/pages/StaticPage";

export default createRoute((c) => {
  return c.render(
    <>
      <title>Code of Conduct | ETHTokyo '26</title>
      <StaticPage title="Code of Conduct">
        <div>WIP</div>
      </StaticPage>{" "}
    </>,
  );
});
