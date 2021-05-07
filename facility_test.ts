import { assert } from "./deps.ts";
import { Facility } from "./facility.ts";

const { test } = Deno;

test("facility: KERN", () => {
  assert(Facility.KERN === 0);
});

test("facility: USER", () => {
  assert(Facility.USER === 1);
});

test("facility: MAIL", () => {
  assert(Facility.MAIL === 2);
});

test("facility: DAEMON", () => {
  assert(Facility.DAEMON === 3);
});

test("facility: AUTH", () => {
  assert(Facility.AUTH === 4);
});

test("facility: SYSLOG", () => {
  assert(Facility.SYSLOG === 5);
});

test("facility: LPR", () => {
  assert(Facility.LPR === 6);
});

test("facility: NEWS", () => {
  assert(Facility.NEWS === 7);
});

test("facility: UUCP", () => {
  assert(Facility.UUCP === 8);
});

test("facility: CRON", () => {
  assert(Facility.CRON === 9);
});

test("facility: SECURITY", () => {
  assert(Facility.SECURITY === 10);
});

test("facility: FTP", () => {
  assert(Facility.FTP === 11);
});

test("facility: NTP", () => {
  assert(Facility.NTP === 12);
});

test("facility: LOGAUDIT", () => {
  assert(Facility.LOGAUDIT === 13);
});

test("facility: LOGALERT", () => {
  assert(Facility.LOGALERT === 14);
});

test("facility: CLOCK", () => {
  assert(Facility.CLOCK === 15);
});

test("facility: LOCAL0", () => {
  assert(Facility.LOCAL0 === 16);
});

test("facility: LOCAL1", () => {
  assert(Facility.LOCAL1 === 17);
});

test("facility: LOCAL2", () => {
  assert(Facility.LOCAL2 === 18);
});

test("facility: LOCAL3", () => {
  assert(Facility.LOCAL3 === 19);
});

test("facility: LOCAL4", () => {
  assert(Facility.LOCAL4 === 20);
});

test("facility: LOCAL5", () => {
  assert(Facility.LOCAL5 === 21);
});

test("facility: LOCAL6", () => {
  assert(Facility.LOCAL6 === 22);
});

test("facility: LOCAL7", () => {
  assert(Facility.LOCAL7 === 23);
});
