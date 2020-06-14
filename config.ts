const env = Deno.env.toObject();

export const APP_HOST = env.APP_HOST || "127.0.0.1";
export const APP_PORT = env.APP_PORT || 4000;

export const DB_HOST = env.DB_HOST || "127.0.0.1";
export const DB_PORT = env.DB_PORT || 27017;
