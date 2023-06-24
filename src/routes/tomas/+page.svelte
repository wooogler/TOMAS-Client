<script lang="ts">
	import type { PageData } from './$types';
	import ChatHistory from './ChatHistory.svelte';
	import HtmlScreen from './HtmlScreen.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>TOMAS</title>
	<meta name="description" content="Task-Oriented Multimodal Agent System" />
</svelte:head>

<div class="flex h-full">
	<HtmlScreen />
	<ChatHistory {data} />
</div>
