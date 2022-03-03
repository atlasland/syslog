import { assertEquals } from "./deps.ts";
import { Severity } from "./severity.ts";

Deno.test("severity: EMERGENCY", () => {
  assertEquals(Severity.EMERGENCY, 0);
});

Deno.test("severity: ALERT", () => {
  assertEquals(Severity.ALERT, 1);
});

Deno.test("severity: CRITICAL", () => {
  assertEquals(Severity.CRITICAL, 2);
});

Deno.test("severity: ERROR", () => {
  assertEquals(Severity.ERROR, 3);
});

Deno.test("severity: WARN", () => {
  assertEquals(Severity.WARN, 4);
});

Deno.test("severity: NOTICE", () => {
  assertEquals(Severity.NOTICE, 5);
});

Deno.test("severity: INFO", () => {
  assertEquals(Severity.INFO, 6);
});

Deno.test("severity: DEBUG", () => {
  assertEquals(Severity.DEBUG, 7);
});
