import { primary } from "./utils/logger";
import problem from "./problems/0047";

primary("app.ts is running!");

(async () => {
  await problem();
})();

primary("app.ts finished execution!");
