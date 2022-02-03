import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

type Props = {
  guesses: string[]
  currentGuess: string
  dead?: boolean
}

export const Grid = ({ dead = false, guesses, currentGuess }: Props) => {
  const empties =
    guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : []

  return (
    <div className="w-3/4 sm:w-[80%] max-w-sm mx-auto flex flex-col">
      {guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guess} />
      ))}
      {guesses.length < 6 && <CurrentRow dead={dead} guess={currentGuess} />}
      {empties.map((_, i) => (
        <EmptyRow dead={dead} key={i} />
      ))}
    </div>
  )
}
