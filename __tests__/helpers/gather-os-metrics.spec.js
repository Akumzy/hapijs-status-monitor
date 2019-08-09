const pidusage = require("pidusage");
const gatherOsMetrics = require("../../src/helpers/gather-os-metrics");

jest.mock("pidusage");

describe("helpers", () => {
  describe("gather-os-metrics", () => {
    describe("when invoked", () => {
      it("then pidusage should be called", () => {
        gatherOsMetrics({}, { os: [], responses: [] });
        expect(pidusage).toHaveBeenCalled();
      });
    });
  });
});
