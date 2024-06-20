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

// get Api function
const getApi = async () => {
    loading.style.display = "block";
    let valueInp = convertValue(input.value);
    let arrValue = [valueInp, `${valueInp}-f`, `${valueInp}-m`]
    let isCheck = false; //Variable to track if you find Pokémon
    for (const name of arrValue) {
        try {
            const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${name}`)

            const data = await res.json();
            img = [data.sprites]
            covertData(data) //convert data by covertData
            isCheck = true;
            //show  btn back and front
            back.style.display = "block";
            front.style.display = "block";
            loading.style.display = "none";
            return;
        } catch (error) {
            console.log(error)
        }
    }
    if (!isCheck) {
        resetPage()
        alert('Pokémon not found');
    }
    // hiden btn back and front
    loading.style.display = "none";
}