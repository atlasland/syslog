import { assert } from "./deps.ts";
import { Severity } from "./severity.ts";

const { test } = Deno;

test("severity: EMERGENCY", () => {
  assert(Severity.EMERGENCY === 0);
});

test("severity: ALERT", () => {
  assert(Severity.ALERT === 1);
});

test("severity: CRITICAL", () => {
  assert(Severity.CRITICAL === 2);
});

test("severity: ERROR", () => {
  assert(Severity.ERROR === 3);
});

test("severity: WARN", () => {
  assert(Severity.WARN === 4);
});

test("severity: NOTICE", () => {
  assert(Severity.NOTICE === 5);
});

test("severity: INFO", () => {
  assert(Severity.INFO === 6);
});

test("severity: DEBUG", () => {
  assert(Severity.DEBUG === 7);
});
