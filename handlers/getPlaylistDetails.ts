import { getPlaylist } from "../services/playlists.ts";

export default async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const playlistId = params.id;

  if (!playlistId) {
    response.status = 400;
    response.body = { msg: "Id is required" };
    return;
  }

  const foundPlaylist = await getPlaylist(playlistId);
  if (!foundPlaylist) {
    response.status = 404;
    response.body = { msg: `Playlist not found` };
    return;
  }

  response.body = foundPlaylist;
};
