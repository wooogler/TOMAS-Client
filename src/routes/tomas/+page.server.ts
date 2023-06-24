import type { PageLoad } from '../$types';

interface Chat {
	role: string;
	content: string;
	timestamp: string;
}

export const load = (async ({ fetch }) => {
	const response = await fetch('http://localhost:8000/chat');
	const chatHistory: Chat[] = await response.json();

	if (response.ok) {
		return {
			chatHistory
		};
	}
}) satisfies PageLoad;

export const actions = {
	send: async ({ request }) => {
		const data = await request.formData();
		const message = data.get('message');
		const response = await fetch('http://localhost:8000/chat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ role: 'human', content: message })
		});

		if (response.ok) {
			console.log(`Success to send message '${message}'`);
		}
	}
};
