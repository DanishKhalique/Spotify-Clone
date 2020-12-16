/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();
function App() {
    const [{ user, token }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        const _token = hash.access_token;

        //   console.log(" 🚀🚀 👉 ", token);

        if (_token) {
            dispatch({
                type: "SET_TOKEN",
                token: _token,
            });

            spotify.setAccessToken(_token);

            spotify.getMe().then((user) => {
                dispatch({
                    type: "SET_USER",
                    user: user,
                });
            });

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists,
                });
            });

            spotify.getPlaylist('37i9dQZF1EMgoeqez82P66').then(response => {
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: response
                })
            })
        }
        window.location.hash = "";
    }, []);

    return <div className="app"> {token ? <Player /> : <Login />} </div>;
}

export default App;
