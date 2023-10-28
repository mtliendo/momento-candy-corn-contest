import {
	CreateCandyCornGuessMutation,
	ListCandyCornGuessesQuery,
} from '@/src/API'
import { createCandyCornGuess } from '@/src/graphql/mutations'
import { listCandyCornGuesses } from '@/src/graphql/queries'
import { GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

function GuessForm() {
	const [name, setName] = useState<any>('')
	const [guess, setGuess] = useState<any>('')

	const [guesses, setGuesses] = useState<any>([])

	useEffect(() => {
		API.graphql<GraphQLQuery<ListCandyCornGuessesQuery>>({
			query: listCandyCornGuesses,
		}).then((res) => setGuesses(res.data?.listCandyCornGuesses?.items))
	}, [])

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		setGuesses([...guesses, { name, guess: Number(guess) }])

		API.graphql<GraphQLQuery<CreateCandyCornGuessMutation>>({
			query: createCandyCornGuess,
			variables: { input: { name, guess: Number(guess) } },
		}).then((response) => {
			console.log(response)
			console.log({ name, guess })
			setName('')
			setGuess('')
		})
	}

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
			<form
				onSubmit={handleSubmit}
				className="bg-white p-6 rounded-lg shadow-lg border-t-8 border-orange-500 w-full max-w-md"
			>
				<h1 className="text-2xl font-bold mb-4 text-orange-500 text-center">
					🎃 Liendo Halloween Bash 🎃
				</h1>
				<h2 className="text-lg font-bold mb-4 text-gray-700 text-center">
					Try and guess the candy corn...
				</h2>
				<div className="mb-4">
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="mt-1 p-2 w-full border rounded-md focus:border-orange-500"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="guess"
						className="block text-sm font-medium text-gray-700"
					>
						Your Guess
					</label>
					<input
						type="number"
						id="guess"
						value={guess}
						onChange={(e) => setGuess(e.target.value)}
						className="mt-1 p-2 w-full border rounded-md focus:border-orange-500"
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 focus:ring focus:ring-orange-200"
				>
					Submit Guess
				</button>
			</form>

			{/* Guesses Table */}
			<div className="mt-8 w-full max-w-md">
				<h2 className="text-xl font-bold mb-4 text-orange-500">
					Guests' Guesses
				</h2>
				<table className="min-w-full bg-white rounded-lg overflow-hidden">
					<thead className="bg-orange-500 text-white">
						<tr>
							<th className="p-3">Name</th>
							<th className="p-3">Guess</th>
						</tr>
					</thead>
					<tbody>
						{guesses.map((entry: any, index: any) => (
							<tr
								key={`${entry.name}-${entry.guess}`}
								className={index % 2 ? 'bg-gray-100' : 'bg-white'}
							>
								<td className="p-3">{entry.name}</td>
								<td className="p-3">{entry.guess}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default GuessForm
