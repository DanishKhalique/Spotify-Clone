export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token:
    //  "BQDN3mMg-C4aH7FJ24S4XGa888w2epDiSlxonKapiInmFOVUyJsyzrJQpPNIrhqfT2ACYHVA2_2s80JTfnEABFQmDvt0DFGKNCbU4ofb-v7UX9eaGI1jNhHkAVnhq3sUCL0o1JzKPfxznuIN_VhGt48FOfGO_zEj7m_opf1q3aN5b59xaLsU",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
};

export default reducer;
