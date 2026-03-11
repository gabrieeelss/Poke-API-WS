process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
async function fnConsultaPokemon() {

    const id = '133'

    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await resposta.json()

    const respostaEspecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const species = await respostaEspecies.json()

    const respostaEvo = await fetch(species.evolution_chain.url)
    const evo = await respostaEvo.json()

    console.log('============================')
    console.log(`ID: ${data.id}`)
    console.log(`Nome: ${data.name}`)


    console.log(`Tipo:`)
    data.types.forEach(t => console.log("-", t.type.name))

    console.log(`Habilidades:`)
    data.abilities.forEach(a => console.log("-", a.ability.name))

    console.log(`Jogos:`)
    data.game_indices.forEach(j => console.log("-", j.version.name))

    console.log(`Evoluções:`)

    let etapa = evo.chain

    while (etapa) {
        evolucoes.push(etapa.species.name)
        etapa = etapa.evolves_to[0]
    }

    console.log('============================')
}

fnConsultaPokemon()

