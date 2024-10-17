import { fizzBuzz } from "./fizz-buzz.js";
import {test, expect, it} from "vitest";


test("returns 'FizzBuzz'", ()=>{
    expect(fizzBuzz(15)).toBe("FizzBuzz")
})

it('returns "Buzz" for mulitples of 5 ', ()=>{
    expect(fizzBuzz(5)).toBe("Buzz");
})

it('returns "Fizz" for mulitples of 3 ', ()=>{
    expect(fizzBuzz(9)).toBe("Fizz");
})