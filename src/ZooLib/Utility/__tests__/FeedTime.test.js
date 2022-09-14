import { describe, expect, it } from "@jest/globals";
// import ZooKeeper from "../../Employees/ZooKeeper";
import FeedTime from "../FeedTime";

describe("FeedTime", () => {
  it("should be able to create feedtime", () => {
    let dateTime = Date.now();
    // let zooKeeper = new ZooKeeper();
    let feedTime = new FeedTime(dateTime /*, zooKeeper*/);

    expect(feedTime).toBeDefined();
    expect(feedTime).not.toBeNull();
    expect(feedTime.dateTime).toEqual(dateTime);
    // expect(feedTime.zooKeeper).toEqual(zooKeeper);
  });
});
