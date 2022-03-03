import { assertEquals } from "./deps.ts";
import { Facility } from "./facility.ts";

Deno.test("facility: KERN", () => {
  assertEquals(Facility.KERN, 0);
});

Deno.test("facility: USER", () => {
  assertEquals(Facility.USER, 1);
});

Deno.test("facility: MAIL", () => {
  assertEquals(Facility.MAIL, 2);
});

Deno.test("facility: DAEMON", () => {
  assertEquals(Facility.DAEMON, 3);
});

Deno.test("facility: AUTH", () => {
  assertEquals(Facility.AUTH, 4);
});

Deno.test("facility: SYSLOG", () => {
  assertEquals(Facility.SYSLOG, 5);
});

Deno.test("facility: LPR", () => {
  assertEquals(Facility.LPR, 6);
});

Deno.test("facility: NEWS", () => {
  assertEquals(Facility.NEWS, 7);
});

Deno.test("facility: UUCP", () => {
  assertEquals(Facility.UUCP, 8);
});

Deno.test("facility: CRON", () => {
  assertEquals(Facility.CRON, 9);
});

Deno.test("facility: SECURITY", () => {
  assertEquals(Facility.SECURITY, 0);
});

Deno.test("facility: FTP", () => {
  assertEquals(Facility.FTP, 1);
});

Deno.test("facility: NTP", () => {
  assertEquals(Facility.NTP, 2);
});

Deno.test("facility: LOGAUDIT", () => {
  assertEquals(Facility.LOGAUDIT, 3);
});

Deno.test("facility: LOGALERT", () => {
  assertEquals(Facility.LOGALERT, 4);
});

Deno.test("facility: CLOCK", () => {
  assertEquals(Facility.CLOCK, 5);
});

Deno.test("facility: LOCAL0", () => {
  assertEquals(Facility.LOCAL0, 6);
});

Deno.test("facility: LOCAL1", () => {
  assertEquals(Facility.LOCAL1, 7);
});

Deno.test("facility: LOCAL2", () => {
  assertEquals(Facility.LOCAL2, 8);
});

Deno.test("facility: LOCAL3", () => {
  assertEquals(Facility.LOCAL3, 9);
});

Deno.test("facility: LOCAL4", () => {
  assertEquals(Facility.LOCAL4, 0);
});

Deno.test("facility: LOCAL5", () => {
  assertEquals(Facility.LOCAL5, 1);
});

Deno.test("facility: LOCAL6", () => {
  assertEquals(Facility.LOCAL6, 2);
});

Deno.test("facility: LOCAL7", () => {
  assertEquals(Facility.LOCAL7, 3);
});
