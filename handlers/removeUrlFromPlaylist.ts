import { removeUrlFromPlaylist } from "../services/playlists.ts";

export default async (
  { params, request, response }: { params: { id: string }, request: any; response: any },
) => {
  if (!request.hasBody || !params.id) {
    response.status = 400;
    response.body = { msg: "Invalid data" };
    return;
  }

  const {
    value: { url },
  } = await request.body();

  if (!url) {
    response.status = 422;
    response.body = { msg: "Url is required" };
    return;
  }

  const removed = await removeUrlFromPlaylist(params.id, url);
  if (!removed) {
      response.status = 500;
      response.body = { msg: "Error" };
      return;
  }

  response.status = 200;
};
