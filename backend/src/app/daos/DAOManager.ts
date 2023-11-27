import { AlbumDAO } from "./AlbumDAO.ts";
import { ArtistDAO } from "./ArtistDAO.ts";
import { SongDAO } from "./SongDAO.ts";
import { UserDAO } from "./UserDAO.ts";
import { PlaylistDAO } from "./PlaylistDAO.ts";
import { PlaylistSongDAO } from "./PlaylistSongDAO.ts";
import { UserPlaylistDAO } from "./UserPlaylistDAO.ts";
import { UserAlbumDAO } from "./UserAlbumDAO.ts";
import { ArtistSongDAO } from "./ArtistSongDAO.ts";
import { FollowersDAO } from "./FollowersDAO.ts";
import { GenreDAO } from "./GenreDAO.ts";
import { SongGenreDAO } from "./SongGenreDAO.ts";
import { HistoryDAO } from "./HistoryDAO.ts";
import { LikesDAO } from "./LikesDAO.ts";
import { MoodDAO } from "./MoodDAO.ts";
import { SongMoodDAO } from "./SongMoodDAO.ts";




export class DAOManager {

	private static _instance: DAOManager;

	private _albumDAO: AlbumDAO;
	private _artistDAO: ArtistDAO;
	private _songDAO: SongDAO;
	private _userDAO: UserDAO;
	private _playlistDAO: PlaylistDAO;
	private _playlistSongDAO: PlaylistSongDAO;
	private _userPlaylistDAO: UserPlaylistDAO;
	private _userAlbumDAO: UserAlbumDAO;
	private _artistSongDAO: ArtistSongDAO;
	private _followersDAO: FollowersDAO;
	private _genreDAO: GenreDAO;
	private _songGenreDAO: SongGenreDAO;
	private _historyDAO: HistoryDAO;
	private _likesDAO: LikesDAO;
	private _moodDAO: MoodDAO;
	private _songMoodDAO: SongMoodDAO;

	private constructor() {
		this._albumDAO = new AlbumDAO();
		this._artistDAO = new ArtistDAO();
		this._songDAO = new SongDAO();
		this._userDAO = new UserDAO();
		this._playlistDAO = new PlaylistDAO();
		this._playlistSongDAO = new PlaylistSongDAO();
		this._userPlaylistDAO = new UserPlaylistDAO();
		this._userAlbumDAO = new UserAlbumDAO();
		this._artistSongDAO = new ArtistSongDAO();
		this._followersDAO = new FollowersDAO();
		this._genreDAO = new GenreDAO();
		this._songGenreDAO = new SongGenreDAO();
		this._historyDAO = new HistoryDAO();
		this._likesDAO = new LikesDAO();
		this._moodDAO = new MoodDAO();
		this._songMoodDAO = new SongMoodDAO();
	}

	public static getInstance(): DAOManager {
		if (!DAOManager._instance) {
			DAOManager._instance = new DAOManager();
		}
		return DAOManager._instance;
	}

	public get albumDAO(): AlbumDAO {
		return this._albumDAO;
	}

	public get artistDAO(): ArtistDAO {
		return this._artistDAO;
	}

	public get songDAO(): SongDAO {
		return this._songDAO;
	}

	public get userDAO(): UserDAO {
		return this._userDAO;
	}

	public get playlistDAO(): PlaylistDAO {
		return this._playlistDAO;
	}

	public get playlistSongDAO(): PlaylistSongDAO {
		return this._playlistSongDAO;
	}
}