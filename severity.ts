/**
 * Log severity levels
 * @see https://tools.ietf.org/html/rfc5424#section-6.2.1
 */
export enum Severity {
  /** Emergency: system is unusable */
  EMERGENCY,
  /** Alert: action must be taken immediately */
  ALERT,
  /** Critical: critical conditions */
  CRITICAL,
  /** Error: error conditions */
  ERROR,
  /** Warning: warning conditions */
  WARN,
  /** Notice: normal but significant condition */
  NOTICE,
  /** Informational: informational messages */
  INFO,
  /** Debug: debug-level messages */
  DEBUG,
}

/** Union of valid log severity level strings */
export type SeverityName = keyof typeof Severity;
