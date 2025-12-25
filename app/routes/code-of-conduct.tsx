import { createRoute } from "honox/factory";
import CodeOfConduct from "@/components/pages/CodeOfConduct";

export default createRoute((c) => {
  return c.render(
    <>
      <title>Code of Conduct | ETHTokyo '26</title>
      <CodeOfConduct />
    </>,
  );
});
