import { createHmac, timingSafeEqual } from "crypto";

export const TEAM_SESSION_COOKIE = "pp_team_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 14; // 14 days

function getSecret(): string {
  const secret = process.env.TEAM_PORTAL_SECRET;
  if (!secret) {
    throw new Error(
      "TEAM_PORTAL_SECRET is not set. Generate one (e.g. `openssl rand -hex 32`) and set it as an env var.",
    );
  }
  return secret;
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

/** Builds a signed, expiring session token: "<expiryUnixSeconds>.<hmac>". */
export function createSessionToken(): string {
  const expires = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = String(expires);
  return `${payload}.${sign(payload)}`;
}

/** Verifies a session token's signature and expiry. */
export function isValidSessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = sign(payload);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;

  const expires = Number(payload);
  if (!Number.isFinite(expires) || expires < Date.now() / 1000) return false;

  return true;
}

/** Constant-time password check against the shared team password. */
export function isCorrectPassword(candidate: string): boolean {
  const actual = process.env.TEAM_PORTAL_PASSWORD;
  if (!actual) {
    throw new Error("TEAM_PORTAL_PASSWORD is not set.");
  }
  const a = Buffer.from(candidate);
  const b = Buffer.from(actual);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
