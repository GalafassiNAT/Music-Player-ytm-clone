
import { Song } from "./Song";

export function totalDuration(songs: Song[]): number{
	let totalDuration = 0;
	songs.forEach(song => {
		totalDuration += song.duration;
	});
	return totalDuration;
}