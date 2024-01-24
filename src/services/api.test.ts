import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getLadingData } from "./api";

const mock = new MockAdapter(axios);

describe("getLadingData", () => {
  afterEach(() => {
    mock.reset();
  });

  it("should fetch landing data successfully", async () => {
    const responseData = {
      fakeData: 'test'
    };
    mock
      .onGet("https://api-us.exoticca.com/api/landing/v2/country/botswana")
      .reply(200, responseData);

    const result = await getLadingData();

    expect(result).toEqual(responseData);
  });

  it("should handle errors", async () => {
    mock
      .onGet("https://api-us.exoticca.com/api/landing/v2/country/botswana")
      .reply(500, { error: "Internal Server Error" });

    await expect(getLadingData()).rejects.toThrowError(
      "Request failed with status code 500"
    );
  });
});
