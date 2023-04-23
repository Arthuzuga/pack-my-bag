import {
  basicOptions,
  accessoriesOptions,
  clothOptions,
  hygienicOptions,
} from "../src/app/form/constants";
import { calculateLuggage } from "../src/app/form/utils";

describe("calculateLuggage", () => {
  it("should return equal on basic options", () => {
    const response = calculateLuggage(basicOptions, 1);

    expect(response).toStrictEqual({
      accessoriesItems: [],
      basicItems: basicOptions,
      clothItems: [],
      hygienicItems: [],
      total: 5272,
    });
  });
  it.skip("should return equal on cloth options", () => {
    const response = calculateLuggage(clothOptions, 1);

    expect(response).toStrictEqual({
      accessoriesItems: [],
      basicItems: [],
      clothItems: clothOptions,
      hygienicItems: [],
      total: 7600,
    });
  });
  it("should return equal on hygienic options", () => {
    const response = calculateLuggage(hygienicOptions, 1);

    expect(response).toStrictEqual({
      accessoriesItems: [],
      basicItems: [],
      clothItems: [],
      hygienicItems: hygienicOptions,
      total: 2350,
    });
  });
  it("should return equal on accessories options", () => {
    const response = calculateLuggage(accessoriesOptions, 1);

    expect(response).toStrictEqual({
      accessoriesItems: accessoriesOptions,
      basicItems: [],
      clothItems: [],
      hygienicItems: [],
      total: 4100,
    });
  });

  it("should return equal on two options", () => {
    const response = calculateLuggage(
      [...accessoriesOptions, ...basicOptions],
      1
    );

    expect(response).toStrictEqual({
      accessoriesItems: accessoriesOptions,
      basicItems: basicOptions,
      clothItems: [],
      hygienicItems: [],
      total: 9372,
    });
  });
});
