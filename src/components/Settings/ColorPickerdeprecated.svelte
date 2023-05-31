<script lang="ts">
  import ColorPicker from 'svelte-awesome-color-picker';
  import { updateSettingsStorage } from 'src/stores/storage';
  import type { ChessColor, HEXColor, TactitcalType, UpdateDisplayFirstKey, UpdateDisplaySecondKey } from 'src/types/types';

	
	import { writable } from 'svelte/store';

	export let storedHex: HEXColor;
	export let color: ChessColor;
	export let tactical: TactitcalType;

	const colorState = writable(storedHex);
	
	let hex: HEXColor = validadeHex(storedHex) ? storedHex: "#000000";


	const updateColor: (key1: UpdateDisplayFirstKey, key2: UpdateDisplaySecondKey, hexValue: HEXColor) => Promise<void> = async (key1, key2, hexValue) => {
		await updateSettingsStorage(key1, key2, hexValue);
		await colorState.update(value => value = hexValue);
	}
	function validadeHex(value:HEXColor): boolean {
		return typeof value==="string" && /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})([A-Fa-f0-9]{2})?$/.test(value);;
	}
</script>

<div class="color-picker">
	<div class="img-container"><img src={`/images/${color}${tactical}.png`} alt={`${color}${tactical}`} /></div>
	<div class="color-wheel"><ColorPicker bind:hex label="" on:input={() => updateColor(color, tactical, hex)}/></div>
</div>

<style>
	.img-container {
		display: flex;
		width: 50%;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
	img {
		display:flex;
        width: 24px;
        height: 24px;
        left: 5px;
        top: 5px;
        margin: 0px;
        padding: 0px;
		justify-content: center;
		align-items: center;
	}
	.color-picker {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 59px;
		height: 34px;
		left: 6px;
		top: 14px;

		background: #FFFFFF;
		box-shadow: -2px 2px 0px #FF0000;
		border-radius: 5px;
	}

	.color-wheel {
		display: flex;
		height: 100%;
		width: 50%;
		justify-content: center;
		align-items: center;
	}
</style>