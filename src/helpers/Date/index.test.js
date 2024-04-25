import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            const januaryDate = new Date("2022-01-01");
            expect(getMonth(januaryDate)).toBe("janvier");
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            const julyDate = new Date("2022-07-08");
            expect(getMonth(julyDate)).toBe("juillet");
        });
    });
})

