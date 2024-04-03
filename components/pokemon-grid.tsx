'use client'
import { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { PokemonCard } from './pokemon-card'

interface PokemonGridProps {
  pokemonList: any
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState('')

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }

  const filteredPokemonList = searchFilter(pokemonList)

  return (
    <>
      <div className="w-full min-h-full flex items-center justify-center flex-col gap-14">
        <div className="w-full max-w-sm">
          <h3 className="text-2xl py-6 text-center flex items-center justify-center">
            Search for pokemons!
          </h3>
          <Label htmlFor="pokemonName">Pokemon Name</Label>
          <Input
            type="text"
            value={searchText}
            id="pokemonName"
            placeholder="type something..."
            autoComplete="off"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-5 gap-10 w-full max-w-3xl">
          {filteredPokemonList.map((pokemon: any) => {
            return <PokemonCard name={pokemon.name} key={pokemon.name} />
          })}
        </div>
      </div>
    </>
  )
}
