/**
 * Log facility
 * @see https://tools.ietf.org/html/rfc5424#section-6.2.1
 */
export enum Facility {
  /** kernel messages */
  KERN,
  /** user-level messages */
  USER,
  /** mail system */
  MAIL,
  /** system daemons */
  DAEMON,
  /** security/authorization messages */
  AUTH,
  /** messages generated internally by syslogd */
  SYSLOG,
  /** line printer subsystem */
  LPR,
  /** network news subsystem */
  NEWS,
  /** UUCP subsystem */
  UUCP,
  /** clock daemon */
  CRON,
  /** security/authorization messages */
  SECURITY,
  /** FTP daemon */
  FTP,
  /** NTP subsystem */
  NTP,
  /** log audit */
  LOGAUDIT,
  /** log alert */
  LOGALERT,
  /** clock daemon */
  CLOCK,
  /** local use 0 */
  LOCAL0,
  /** local use 1 */
  LOCAL1,
  /** local use 2 */
  LOCAL2,
  /** local use 3 */
  LOCAL3,
  /** local use 4 */
  LOCAL4,
  /** local use 5 */
  LOCAL5,
  /** local use 6 */
  LOCAL6,
  /** local use 7 */
  LOCAL7,
}

/** Union of valid log facility strings */
export type FacilityName = keyof typeof Facility;
