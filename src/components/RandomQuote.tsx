import { quotes } from "../constants"

const RandomQuote = () => {
    const random = Math.floor(Math.random() * quotes.length)
    const quote = quotes[random]

  return (
    <div className="text-center text-neutral-300 italic mt-6">
      <p className="text-lg">“{quote.text}”</p>
      <p className="text-sm mt-2 text-neutral-500">— {quote.author}</p>
    </div>
  )
}
export default RandomQuote