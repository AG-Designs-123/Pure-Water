# Private enquiry access

The public quote form remains available. The enquiry list is accessible only at `/admin` after sign-in. Each administrator has a separate username and password. The server stores sessions in PostgreSQL and sends a secure, HTTP-only cookie. There are no browser-held bearer tokens.

Before deployment, set these server environment variables:

- `DATABASE_URL`: PostgreSQL connection string. The session table is created automatically.
- `SESSION_SECRET`: a new, unpredictable secret of at least 32 bytes (for example, generated with `node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"`).
- `ADMIN_USERS_JSON`: JSON array of administrator usernames and password hashes, for example `[{"username":"andy","passwordHash":"scrypt:...:..."},{"username":"lucy","passwordHash":"scrypt:...:..."}]`.

Run `node script/hash-admin-password.mjs` separately for each account and paste each resulting hash into the JSON. Do not put passwords, hashes, the session secret, or the JSON value in GitHub. Set them in the deployment's secret/environment settings. Keep the credentials private and use different passwords for Andy and Lucy.

If any required setting is missing, login is unavailable and the enquiry-list API still denies unauthenticated requests. In production, serve the site over HTTPS so the secure cookie works. After deployment, check that a signed-out request to `GET /api/enquiries` returns 401, then sign in at `/admin`, view enquiries, and sign out.

The existing `users` database table is unused by this login implementation; do not populate it with plaintext passwords. `server/stripeClient.ts` has separate Replit/Stripe connector credentials and is not used by this admin sign-in or the current SumUp payment link.
