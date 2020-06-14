import { createPlaylist } from "../services/playlists.ts";

export default async (
  { request, response }: { request: any; response: any },
) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid data" };
    return;
  }

  const {
    value: { name },
  } = await request.body();

  if (!name) {
    response.status = 422;
    response.body = { msg: "Name is required" };
    return;
  }

  await createPlaylist({ name });

  response.status = 201;
};
