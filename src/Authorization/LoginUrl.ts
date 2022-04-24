const scopes = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-private',
    'user-read-email',
    'user-follow-modify',
    'user-follow-read',
    'user-library-modify',
    'user-library-read',
    'streaming',
    'app-remote-control',
    'user-read-playback-position',
    'user-top-read',
    'user-read-recently-played',
    'playlist-modify-private',
    'playlist-read-collaborative',
    'playlist-read-private',
    'playlist-modify-public',
];

const queryParams = new URLSearchParams({
    response_type: 'code',
    client_id: process.env.REACT_APP_CLIENT_ID as string,
    scope: scopes.join(' '),
    redirect_uri: process.env.REACT_APP_REDIRECT_URL as string,
    show_dialog: true.toString()
});

export const loginUrl = process.env.REACT_APP_BACKEND_URL as string
    + `/authorize?${queryParams}`;