// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {

        // Test 1: Check if the function is defined
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        // Test 2: Check if the division works for valid numbers
        it("should return the division of two numbers", () => {
            expect(divide(10, 2)).toBe(5);
            expect(divide(9, 3)).toBe(3);
        });

        // Test 3: Check if the function returns undefined when no arguments are passed
        it("should return undefined if any argument is missing", () => {
            expect(divide()).toBeUndefined();
            expect(divide(10)).toBeUndefined();
        });

        // Test 4: Check if the function returns undefined if arguments are not numbers
        it("should return undefined if any of the arguments are not numbers", () => {
            expect(divide('10', 2)).toBeUndefined();
            expect(divide(10, '2')).toBeUndefined();
        });

        // Test 5: Check if the function handles division by 0 correctly
        it("should return Infinity or -Infinity if divided by 0", () => {
            expect(divide(10, 0)).toBe(Infinity);
            expect(divide(-10, 0)).toBe(-Infinity);
        });
    })    
})
