<script lang="ts">
	let url = '';
	let simplifiedHTML = '';

	async function gotoPage() {
		const response = await fetch('http://0.0.0.0:8000/api/screen/navigate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ url })
		});

		if (response.ok) {
			console.log(`Success to go to ${url}`);
			url = '';
			const { rawHtml, simpleHtml } = await response.json();
			simplifiedHTML = simpleHtml;
		}
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			gotoPage();
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
		</div>
		<div class="overflow-auto flex-1">
			<div>{@html simplifiedHTML}</div>
		</div>
	</div>
</div>
