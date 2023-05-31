<script lang="ts">
  import type { ChessColor, TacticalFilter } from "src/types/types";
  import ColorPicker from "./ColorPicker.svelte";

  export let tactical: TacticalFilter;
  export let color: ChessColor;

  let unpressedButton: string;
  let textColor: string;
  let buttonShade: string;
  let backgroundColor: string;
  let borderShade: string;

  $: {
    if(color=="White"){
        unpressedButton = "#FFFFFF";
        textColor = "#1D1C1A";
        buttonShade = "#6C9D41";
        backgroundColor = "#D9D9D9";
        borderShade = "#A7C56A";
    } else {
        unpressedButton = "#FFFFFF";
        textColor = "#FFFFFF";
        buttonShade = "#1D7AAB";
        backgroundColor = "#1D1C1A";
        borderShade = "#5EA0C3";
    }
  }


</script>

<div class="color-picker-body" style="--backgroundColor: {backgroundColor}; ">
    <div class="picker-header">
        <h2 style="--fontColor: {textColor}">Set {color} Colors</h2>
    </div>
    <div class="picker-body">
        <div class="picker-body-left">
            <div class="picker-row">
                <ColorPicker storedHex={tactical.Influence} color={color} tactical="Influence"/>
                <h3 style="margin-left: 6px; --fontColorh3: {textColor}">Influence</h3>
            </div>
            <div class="picker-row">
                <ColorPicker storedHex={tactical.Fork} color={color} tactical="Fork"/>
                <h3 style="margin-left: 6px; --fontColorh3: {textColor}">Fork</h3>
            </div>
        </div>
        <div class="picker-body-right">
            <div class="picker-row">
                <ColorPicker storedHex={tactical.Hanging} color={color} tactical="Hanging"/>
                <h3 style="margin-left: 6px; --fontColorh3: {textColor}">Hanging</h3>
            </div>
            <div class="picker-row">
                <ColorPicker storedHex={tactical.Pin} color={color} tactical="Pin"/>
                <h3 style="margin-left: 6px; --fontColorh3: {textColor}">Pin</h3>
            </div>
        </div>
    </div>
</div>

<style>
    h2 {
        color: var(--fontColor);
        margin: 0px;
        padding: 0px;
    }
    h3 {
        color: var(--fontColorh3);
        margin: 0px;
        padding: 0px;
    }
    .color-picker-body {
        display: flex;
        flex-direction: column;
        width: 280px;
        height: 130px;
        left: 5px;
        top: -1px;
        background: var(--backgroundColor);
        box-shadow: -2px 2px 0px var(--borderShade);
        border-radius: 5px 5px 5px 5px;

        margin-top: 6px;
        margin-left: 12px;
    }
    .picker-header {
        display: flex;
        width: 100%;
        justify-content: center;
        height: 26px;
    }
    .picker-body {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .picker-body-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        padding-top: 12px;
    }
    .picker-body-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        padding-top: 12px;
    }
    .picker-row {
        display: flex;
        width: 130px;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        margin-bottom: 10px;
        margin-left: 6px;   

    }
</style>