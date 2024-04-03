import Link from 'next/link'

interface PokemonCardProps {
  name: string
}

export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link
      href={name}
      key={name + 'Card'}
      className=" group rounded-lg border border-transparent dark:border-gray-500 hover:border-gray-100 py-4 text-center"
    >
      <p className="text-gray-100 font-semibold">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
    </Link>
  )
}
