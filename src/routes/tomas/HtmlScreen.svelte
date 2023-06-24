<script lang="ts">
	let url = '';
	let simplifiedHTML = '';

	async function gotoPage() {
		const response = await fetch('http://localhost:8000/enter', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ url })
		});

		if (response.ok) {
			console.log(`Success to go to ${url}`);
			url = '';
		}
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			gotoPage();
		}
	}

	async function loadPage() {
		const response = await fetch('http://localhost:8000/html');

		if (response.ok) {
			const html = await response.text();
			simplifiedHTML = html;
		}
	}
</script>

<div class="flex flex-1 w-2/3 bg-black items-center justify-center">
	<div class="flex flex-col bg-white w-3/4 h-3/4">
		<div class="flex">
			<input
				type="text"
				name="url"
				placeholder="URL"
				bind:value={url}
				autocomplete="off"
				class="input input-bordered w-full"
				on:keydown={handleKeyDown}
			/>
			<button class="btn" on:click={() => loadPage()}>Load HTML</button>
		</div>
		<div class="overflow-auto flex-1">
			<div>{@html simplifiedHTML}</div>
		</div>
	</div>
</div>
