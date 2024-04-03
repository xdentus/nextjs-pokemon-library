import { PokemonGrid } from '@/components/pokemon-grid'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <PokemonGrid />
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-6 lg:text-left gap-4">
        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 hover:border-gray-200"
        >
          <p>POKEMON</p>
        </a>
      </div>
    </>
  )
}
