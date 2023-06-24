<script lang="ts">
	import ChatHistory from './ChatHistory.svelte';
	import HtmlScreen from './HtmlScreen.svelte';
</script>

<svelte:head>
	<title>TOMAS</title>
	<meta name="description" content="Task-Oriented Multimodal Agent System" />
</svelte:head>

<div class="flex flex-1">
	<HtmlScreen />
	<ChatHistory />
</div>
