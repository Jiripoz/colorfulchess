<script lang="ts">
  import { updateHighlightConfig } from "src/stores/storage";
  import type { PiecesFilter, UpdateDisplayFirstKey, UpdateDisplaySecondKey } from "src/types/types";
  import Button from "./Button.svelte";
  
  
  export let pieces: PiecesFilter;
  export let color: UpdateDisplayFirstKey;

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

<div>
    <div class="pieces-header" style="--backgroundColor: {backgroundColor}; --borderShade:{borderShade}">
        <h2 style="margin-left: 5px; --fontColor: {textColor}">{color} Pieces</h2>
        <hr style="--borderColor: {borderShade}">
    </div>

    <div class="pieces-body" style="--backgroundColor: {backgroundColor}; --borderShade:{borderShade}">
        <div class="pieces-body-left">
            <div class="pieces-body-header"><h3 style="--fontColor: {textColor}">Piece Influence</h3></div>
            <div class="pieces-body-buttons">
                <div class="button-icon"><Button --button-shade={buttonShade} color={color} piece="King" state={pieces.King}/></div>
                <div class="button-icon"><Button --button-shade={buttonShade} color={color} piece="Queen" state={pieces.Queen}/></div>
                <div class="button-icon"><Button --button-shade={buttonShade} color={color} piece="Rooks" state={pieces.Rooks}/></div>
                <div class="button-icon"><Button --button-shade={buttonShade} color={color} piece="Bishops" state={pieces.Bishops}/></div>
                <div class="button-icon"><Button --button-shade={buttonShade} color={color} piece="Knights" state={pieces.Knights}/></div>
                <div class="button-icon"><Button --button-shade={buttonShade} color={color} piece="Pawns" state={pieces.Pawns}/></div>
            </div>
        </div>
        <div class="vl" style="--verticalLine: {borderShade}"></div>
        <div class="pieces-body-right">
            <div class="pieces-body-header"><h3 style="--fontColor: {textColor}">Tactical</h3></div>
            <div class="pieces-body-tactical">
                <div class="tactical-buttons">
                    <div class="button-icon"><Button --button-shade={buttonShade} color={color} piece="Fork" state={pieces.King}/></div>
                    <div class="button-icon"><Button --button-shade={buttonShade} color={color} piece="Hanging" state={pieces.King}/></div>
                    <div class="button-icon"><Button --button-shade={buttonShade} color={color} piece="Pin" state={pieces.King}/></div>
                </div>
                <div class="tactical-text">
                    <div><h4 style="--fontColorh4: {textColor}">Fork</h4></div>
                    <div><h4 style="--fontColorh4: {textColor}">Hanging</h4></div>
                    <div><h4 style="--fontColorh4: {textColor}">Pin</h4></div>
                </div>
            </div>
        </div>
    </div>

</div>



<style>
    hr {
        margin:0px;
        border-bottom: 1px solid var(--borderColor);
    }
    h2 {
        color: var(--fontColor);
        margin: 0px;
        padding: 0px;
    }

    h3 {
        color: var(--fontColor);
        margin: 0px;
        padding: 0px;
    }
    h4 {
        color: var(--fontColorh4);
        margin: 0px;
        padding: 0px;
    }
    .pieces-header{
        display: flex;
        flex-direction: column;
        width: 280px;
        height: 26px;
        left: 5px;
        top: 12px;

        background: var(--backgroundColor);
        box-shadow: -1px 0px 0px var(--borderShade);
        border-radius: 5px 5px 0px 0px;
    }
    .pieces-body {
        display: flex;
        flex-direction: row;
        width: 280px;
        height: 180px;
        left: 5px;
        top: 37px;
        margin-top: -1px;
        background: var(--backgroundColor);
        box-shadow: -1px 1px 0px var(--borderShade);
        border-radius: 0px 0px 5px 5px;
    }

    .pieces-body-header {
        display: flex;
        align-items: end;
        justify-content: center;
        height: 31px;
    }

    .pieces-body-left {
        display: flex;
        flex-direction: column;
        width: 140px;
        height: 180px;
        left: 0px;
        top: 0px;

    }
    .pieces-body-buttons {
        width:100%;
        height: 100%;
        display: grid;
		grid-template-columns: 65px 65px;
        grid-template-rows: 46px 46px;
        align-items: baseline;
        justify-content: center;
        margin-top: 12px;
    }
    .button-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 12px;
    }
    .pieces-body-right {
        display: flex;
        flex-direction: column;
        width: 140px;
        height: 180px;
        left: 140px;
        top: 0px;
    }

    .pieces-body-tactical {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        margin-left: 20px;
    }

    .tactical-buttons {
        display: flex;
        flex-direction: column;
        margin-top: 12px;
    }

    .tactical-text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-bottom: 6px;
        margin-top: 6px;
        margin-left: 12px;
    }

    .vl {
        border-left: 1px solid var(--verticalLine);
        height: 155px;
        margin-top: 15px;
    }
</style>