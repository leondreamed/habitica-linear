import { got } from 'got'

export async function addHabiticaTask({ text }: { text: string }) {
	const { HABITICA_USER_ID, HABITICA_API_TOKEN } = process.env

	await got.post('https://habitica.com/api/v3/tasks/user', {
		json: {
			text,
			type: 'todo',
		},
		headers: {
			'Content-Type': 'application/json',
			'x-api-user': HABITICA_USER_ID!,
			'x-api-key': HABITICA_API_TOKEN!,
			'x-client': `${HABITICA_USER_ID!}-HabiticaLinear`,
		},
	})
}
