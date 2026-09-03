import { Redis } from "@upstash/redis";

export type Update = {
  id: string;
  date: string;
  author: string;
  body: string;
};

const UPDATES_KEY = "team:updates";
const MAX_ENTRIES = 200;
export const AUTHOR_MAX_LENGTH = 60;
export const BODY_MAX_LENGTH = 500;

let cachedClient: Redis | null = null;

function getClient(): Redis {
  if (cachedClient) return cachedClient;
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    throw new Error(
      "Redis is not configured. Add a Redis (Upstash) store to the Vercel project — see README.",
    );
  }
  cachedClient = new Redis({ url, token });
  return cachedClient;
}

export async function listUpdates(): Promise<Update[]> {
  const raw = await getClient().lrange<Update>(UPDATES_KEY, 0, MAX_ENTRIES - 1);
  return raw;
}

export async function addUpdate(author: string, body: string): Promise<Update> {
  const entry: Update = {
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    author,
    body,
  };
  const client = getClient();
  await client.lpush(UPDATES_KEY, entry);
  await client.ltrim(UPDATES_KEY, 0, MAX_ENTRIES - 1);
  return entry;
}
