// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "d60c746c1d694b5bb68f97563b193f73";

const redirectUri = "http://localhost:3000/";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&show_dialog=true`;

// '%20' is the ASCII KEY of Space

// encodeURIComponent("A") returns "A", it does not encode "A" to "%41"
// decodeURIComponent("%41") returns "A".
// encodeURI("A") returns "A", it does not encode "A" to "%41"
// decodeURI("%41") returns "A".

// encodeURIComponent("&") returns "%26".
// decodeURIComponent("%26") returns "&".
// encodeURI("&") returns "&".
// decodeURI("%26") returns "%26".

// http://localhost:3000/#access_token=BQDpSKxvqSA-9poT_k5Frr0fV1ywP4fRigNVx3EGzPhX7xYNsN9eJUYdF5wHVWP9o7RadbncerpPngpjqPX0sqn1ylB7X9oaW3aEkMz0VFy0B-8hD341Er8CVLQFsPqIQgPjOI0Q_a-VqE_g9aJhSY7lS1hcIQFgueN-nhRA5ux37MD__T2u&token_type=Bearer&expires_in=3600

// CONVERT THE URL TO THIS 👇👇👇👇👇👇👇👇

// {access_token: "BQDBgT3k9X10yxxQSLyxOkExkmXLwQ2oZSnvxID5k0VjI0SIJH…Rj60xuqEeM3IOWEA-TOt-yF0zfsHt3ZwpTKlqJ2uOw8k4a0L5", token_type: "Bearer", expires_in: "3600"}