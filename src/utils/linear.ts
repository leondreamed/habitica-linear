import { LinearClient } from '@linear/sdk'

// Api key authentication
const linear = new LinearClient({
	apiKey: process.env.LINEAR_API_KEY,
})

export async function getLinearTasks() {
	const me = await linear.viewer
	const myIssues = await me.assignedIssues()

	return myIssues.nodes
}
