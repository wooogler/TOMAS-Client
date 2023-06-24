<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class=" bg-white p-4 w-1/3 flex flex-col h-full">
	<div class="flex flex-1 flex-col h-full overflow-auto">
		{#if data.chatHistory}
			{#each data.chatHistory as chat (chat.timestamp)}
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
		{/if}
	</div>
	<div class="w-full">
		<form method="POST" action="?/send" data-sveltekit-keepfocus>
			<input type="text" name="message" class="input input-bordered w-full" autocomplete="off" />
		</form>
	</div>
</div>
