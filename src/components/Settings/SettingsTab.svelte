<script lang="ts">
	import SettingsConfig from './SettingsConfig.svelte';
	import type { HEXColor, SettingsType } from './../../types/types';

	const hexKing: HEXColor = "#eb6150";
	export let settingsStore: SettingsType;

</script>

<div class="settings-body">
	<SettingsConfig tactical={settingsStore.White} color="White"/>
	<SettingsConfig tactical={settingsStore.Black} color="Black"/>
</div>

<style>
	.settings-body {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}


</style>