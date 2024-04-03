export async function getPokemonList() {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
  )

  const data = await response.json()
  return data.results
}

export async function getPokemon(name: string) {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name)

  const data = await response.json()
  return data
}
