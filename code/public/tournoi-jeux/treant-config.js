export const BASE_CHART_CONFIG = {
    chart: {
        container: "#Tournament",
        levelSeparation: 20,
        siblingSeparation: 15,
        subTeeSeparation: 15,
        rootOrientation: "NORTH",
        node: {
            HTMLclass: "tournament-node",
            drawLineThrough: true
        },
        connectors: {
            type: "straight",
            style: {
                "stroke-width": 2,
                "stroke": "#ccc"
            }
        }
    }
};

export const NODE_CLASSES = {
    PLAYER_LEAF: "player-leaf",
    BYE_LEAF: "bye-leaf",
    MATCH_NODE: "match-node",
    WINNER_NODE: "winner-node"
};