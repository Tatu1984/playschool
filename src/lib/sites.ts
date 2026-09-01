/**
 * Cross-property links.
 *
 * Climb Kiddo (climbkiddo.com) and Beats (beats.climbkiddo.com) are one
 * Next.js app served on two hosts — the proxy rewrites the Beats host onto
 * the /beats route. These constants let each site link to the other with an
 * absolute URL in production while staying on relative paths in local dev,
 * where both live under localhost:3000.
 */
export const MAIN_SITE_URL = process.env.NEXT_PUBLIC_MAIN_SITE_URL || "/";
export const BEATS_SITE_URL = process.env.NEXT_PUBLIC_BEATS_URL || "/beats";

/** Absolute URLs must bypass the client router. */
export const isExternalUrl = (url: string) => /^https?:\/\//i.test(url);
