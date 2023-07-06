import type { Actions } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

interface Chat {
	role: string;
	content: string;
	createdAt: string;
	id: string;
}

export const load = (async ({ fetch }) => {
	const response = await fetch('http://0.0.0.0:8000/api/chats');
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
		const response = await fetch('http://0.0.0.0:8000/api/chats/human', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ content: message })
		});

		if (response.ok) {
			console.log(`Success to send message '${message}'`);
		}
	}
} satisfies Actions;
