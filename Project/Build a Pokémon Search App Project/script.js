const input = document.getElementById("search-input");
const btn = document.getElementById("search-button");
const namePk = document.getElementById("pokemon-name");
const idPk = document.getElementById("pokemon-id");
const weightPk = document.getElementById("weight");
const heightPk = document.getElementById("height");
const typesPk = document.getElementById("types");
const hpPk = document.getElementById("hp");
const attackPk = document.getElementById("attack");
const defensePk = document.getElementById("defense");
const spAttackPk = document.getElementById("special-attack");
const spDefensePk = document.getElementById("special-defense");
const speedPk = document.getElementById("speed");
const imgPokemon = document.querySelector(".img-pokemon");
const loading = document.getElementById("loading");
const frontAndBack = document.querySelector(".font-back-img");
const front = document.querySelector(".front");
const back = document.querySelector(".back");

let img = [];

// check validate and convert them.
const convertValue = (val) => {
    return val.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim() // Remove leading/trailing whitespace
        .replace(/\s+/g, '-')
        .replace(/^0+/, '');
}