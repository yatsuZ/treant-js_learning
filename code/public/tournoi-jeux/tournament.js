import { BASE_CHART_CONFIG, NODE_CLASSES } from './treant-config.js';

/**
 * Initialise le tournoi avec les gestionnaires d'événements
 */
export function initializeTournament() {
    const numPlayersInput = document.getElementById('numPlayers');
    const startGameButton = document.getElementById('startGameButton');
    const tournamentContainer = document.getElementById('Tournament');

    // Définir un tournoi par défaut au chargement
    numPlayersInput.value = 5;
    startTournament(5);

    startGameButton.addEventListener('click', () => {
        const numPlayers = parseInt(numPlayersInput.value, 10);

        if (!validatePlayerCount(numPlayers)) {
            alert("Veuillez entrer un nombre de joueurs valide (entre 2 et 64).");
            return;
        }

        tournamentContainer.innerHTML = '';
        startTournament(numPlayers);
    });
}

/**
 * Valide le nombre de joueurs
 * @param {number} numPlayers 
 * @returns {boolean}
 */
function validatePlayerCount(numPlayers) {
    return !isNaN(numPlayers) && numPlayers >= 2 && numPlayers <= 64;
}

/**
 * Lance un nouveau tournoi
 * @param {number} numPlayers 
 */
function startTournament(numPlayers) {
    const nextPowerOf2 = getNextPowerOf2(numPlayers);
    const initialRoundNodes = generateInitialRoundNodes(numPlayers, nextPowerOf2);
    const tournamentStructure = buildTournamentTree(initialRoundNodes);

    const tournamentConfig = {
        ...BASE_CHART_CONFIG,
        nodeStructure: tournamentStructure
    };

    new Treant(tournamentConfig);
}

/**
 * Calcule la plus petite puissance de 2 supérieure ou égale à n
 * @param {number} n 
 * @returns {number}
 */
function getNextPowerOf2(n) {
    if (n <= 1) return 1;
    return Math.pow(2, Math.ceil(Math.log2(n)));
}

/**
 * Génère les nœuds initiaux du tournoi
 * @param {number} actualPlayersCount 
 * @param {number} totalNodesNeeded 
 * @returns {Array<Object>}
 */
function generateInitialRoundNodes(actualPlayersCount, totalNodesNeeded) {
    const players = Array.from({ length: actualPlayersCount }, (_, i) => ({
        text: { name: `J${i + 1}` },
        HTMLclass: NODE_CLASSES.PLAYER_LEAF
    }));

    const byesNeeded = totalNodesNeeded - actualPlayersCount;
    const byes = Array.from({ length: byesNeeded }, () => ({
        text: { name: "Bye" },
        HTMLclass: NODE_CLASSES.BYE_LEAF
    }));

    // Mélanger les "Bye" parmi les joueurs pour une distribution aléatoire
    return ([...players, ...byes]);
}

/**
 * Construit récursivement la structure de l'arbre de tournoi
 * @param {Array<Object>} currentRoundParticipants 
 * @returns {Object}
 */
function buildTournamentTree(currentRoundParticipants) {
    if (currentRoundParticipants.length === 1) {
        return {
            text: { name: "Vainqueur" },
            HTMLclass: NODE_CLASSES.WINNER_NODE,
            children: currentRoundParticipants
        };
    }

    const nextRoundParticipants = [];
    
    for (let i = 0; i < currentRoundParticipants.length; i += 2) {
        const [participant1, participant2] = currentRoundParticipants.slice(i, i + 2);
        const matchNode = createMatchNode(participant1, participant2);
        nextRoundParticipants.push(matchNode);
    }

    return buildTournamentTree(nextRoundParticipants);
}

/**
 * Crée un nœud de match entre deux participants
 * @param {Object} participant1 
 * @param {Object} participant2 
 * @returns {Object}
 */
function createMatchNode(participant1, participant2) {
    const isP1Bye = participant1.text.name === "Bye";
    const isP2Bye = participant2.text.name === "Bye";

    if (isP1Bye && isP2Bye) {
        return {
            text: { name: "Bye" },
            HTMLclass: NODE_CLASSES.BYE_LEAF
        };
    }
    
    if (isP1Bye) return participant2;
    if (isP2Bye) return participant1;
    
    return {
        text: { name: "Match" },
        HTMLclass: NODE_CLASSES.MATCH_NODE,
        children: [participant1, participant2]
    };
}