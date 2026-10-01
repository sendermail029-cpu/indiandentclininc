/**
 * Admin session = a cookie holding a hash of ADMIN_PASSWORD.
 * Uses Web Crypto so it runs in both middleware (edge) and route handlers.
 */
export const ADMIN_COOKIE = "clinic_admin";

export async function adminToken(): Promise<string | null> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return null;
  const secret = process.env.ADMIN_SECRET ?? "indian-dental-admin";
  const data = new TextEncoder().encode(`${secret}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function isValidAdminCookie(value: string | undefined) {
  const token = await adminToken();
  return Boolean(token && value && value === token);
}
