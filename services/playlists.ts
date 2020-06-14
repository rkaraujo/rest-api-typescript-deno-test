import { Playlist } from "../models/playlist.ts";
import playlistObj from "../db/mongo.ts";

type PlaylistData = Pick<Playlist, "name">;

export const getPlaylist = async (
  playlistId: string,
): Promise<Playlist | undefined> => {
  const playlist = await playlistObj.findOne({ "$oid": playlistId });
  return playlist;
};

export const createPlaylist = async (
  playlistData: PlaylistData,
): Promise<string> => {
  const newPlaylist: Playlist = {
    name: String(playlistData.name),
    createdAt: new Date()
  };

  const id = await playlistObj.insertOne(newPlaylist);
  return id;
};

export const deletePlaylist = async (
  playlistId: string,
): Promise<void> => {
  await playlistObj.deleteOne({ _id: { $oid: playlistId } });
};

export const addUrlToPlaylist = async (
  playlistId: string,  url: string
): Promise<boolean> => {
  const { modifiedCount } = await playlistObj.updateOne({_id: { "$oid": playlistId }}, {$addToSet: {urls: url}});
  return modifiedCount === 1;
}

export const removeUrlFromPlaylist = async (
  playlistId: string,  url: string
): Promise<boolean> => {
  const { modifiedCount } = await playlistObj.updateOne({_id: { "$oid": playlistId }}, {$pull: {urls: url}});
  return modifiedCount === 1;
}
