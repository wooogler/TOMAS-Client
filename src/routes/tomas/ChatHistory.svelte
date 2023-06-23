<script lang="ts">
	let chats = [
		{ id: 0, role: 'human', content: 'request...' },
		{ id: 1, role: 'ai', content: 'response...' }
	];

	let newMessage = '';

	function handleSendNewMessage(message: string) {
		chats = [...chats, { id: chats.length, role: 'human', content: message }];
		newMessage = '';
	}
</script>

<div class="flex-1 bg-white p-4 w-full">
	{#each chats as chat (chat.id)}
		{#if chat.role === 'ai'}
			<div class="chat chat-start">
				<div class="chat-bubble">{chat.content}</div>
			</div>
		{:else if chat.role === 'human'}
			<div class="chat chat-end">
				<div class="chat-bubble">{chat.content}</div>
			</div>
		{/if}
	{/each}
	<div class="w-full">
		<div class="input-group">
			<input
				type="text"
				placeholder="Type your message"
				class="input input-bordered"
				bind:value={newMessage}
				on:keydown={(event) => {
					if (event.key === 'Enter') {
						handleSendNewMessage(newMessage);
					}
				}}
			/>
			<button class="btn btn-square" on:click={() => handleSendNewMessage(newMessage)}>
				send
			</button>
		</div>
	</div>
</div>
