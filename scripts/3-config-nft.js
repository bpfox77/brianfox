import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xEB48C5daF3F6d0c1A70821d85751CD0Bacc5D2c2"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Now",
        description: "This NFT will give you access to NowDAO!",
        image: readFileSync("scripts/assets/mirror.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
