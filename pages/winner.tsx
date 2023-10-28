import { ListCandyCornGuessesQuery } from '@/src/API'
import { listCandyCornGuesses } from '@/src/graphql/queries'
import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

const WinnerPage = () => {
	const actualCount = 859
	const [guesses, setGuesses] = useState([])
	const winners = findClosestGuesses(actualCount, guesses)

	useEffect(() => {
		API.graphql<GraphQLQuery<ListCandyCornGuessesQuery>>({
			query: listCandyCornGuesses,
		}).then((res) => setGuesses(res.data?.listCandyCornGuesses?.items))
	}, [])
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
			<div className="bg-white p-6 rounded-lg shadow-lg border-t-8 border-orange-500 w-full max-w-md text-center">
				<h1 className="text-3xl font-bold mb-4 text-orange-500">Winner(s)</h1>
				<p className="text-xl mb-6">
					The actual amount of candy corn was{' '}
					<span className="font-bold">{actualCount}</span>
				</p>

				{winners.map((winner) => (
					<div key={winner.name} className="mb-4">
						<h2 className="text-lg font-bold text-orange-500">{winner.name}</h2>
						<p className="text-gray-700">Guessed: {winner.guess}</p>
					</div>
				))}
			</div>
		</div>
	)
}

function findClosestGuesses(actualCount, guesses) {
	// Find the minimum difference between actual count and the guesses
	const minDifference = Math.min(
		...guesses.map((guest) => Math.abs(guest.guess - actualCount))
	)

	// Filter the guests based on this minimum difference or those who guessed exactly right
	const closestGuests = guesses.filter((guest) => {
		return Math.abs(guest.guess - actualCount) === minDifference
	})

	return closestGuests
}

export default function Winner() {
	return <WinnerPage />
}
