<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<button class:selected={$selectedTab === tab} on:click={() => {selectTab(tab)}}>
	<slot />
</button>

<style>
	button {
		display: flex;
		width: 120px;
		height: 25px;
		left: 55px;
		top: 0px;
		justify-content: center;
		align-items: center;
		background: #272522;
		border-radius: 5px 5px 0px 0px;
		border: 0px;
	}

	.selected {
		background: #1D1C1A;
		border-radius: 5px 5px 0px 0px;
	}

</style>
