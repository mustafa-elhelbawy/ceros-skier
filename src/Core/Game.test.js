import "babel-polyfill";
import { Skier } from "../Entities/Skier";
import * as Constants from "../Constants";

const skier = new Skier(0, 0);

describe("Skier movement", () => {
  beforeEach(() => {
    skier.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
  });

  test("test skier direction left", () => {
    expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.CRASH);
    skier.turnLeft();
    expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT);
  });

  test("test skier continue after crash", () => {
    expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.CRASH);
    skier.turnDown();
    expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.DOWN);
  });
  describe("test skier direction up", () => {
    test("Move up", () => {
      const directions = [
        Constants.SKIER_DIRECTIONS.RIGHT,
        Constants.SKIER_DIRECTIONS.LEFT
      ];
      for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        skier.setDirection(direction);
        skier.turnUp();
        expect(skier.direction).toBe(direction);
        expect(skier.assetName).toBe(Constants.SKIER_DIRECTION_ASSET[direction]);
      }
    });
    test("test jump", () => {
      skier.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
      skier.moveSkierJump();
      expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.JUMP);
      expect(skier.direction).not.toBe(Constants.SKIER_DIRECTIONS.LEFT);
      expect(skier.direction).not.toBe(Constants.SKIER_DIRECTIONS.RIGHT);
      expect(skier.assetName).toBe(Constants.SKIER_JUMP_1);
    });
  });

});