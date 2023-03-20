import 'dotenv/config'

import { addHabiticaTask } from '~/utils/habitica.js'
import { getLinearTasks } from '~/utils/linear.js'

const linearTasks = await getLinearTasks()
for (const linearTask of linearTasks) {
	// eslint-disable-next-line no-await-in-loop -- bruh
	console.info('Adding task to Habitica:', linearTask.title)
	await addHabiticaTask({ text: linearTask.title })
}
