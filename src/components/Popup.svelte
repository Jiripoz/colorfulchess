<script lang="ts">
  import { updateHighlightConfig } from "src/stores/storage";
  import type { HighlightConfig, SettingsType, UpdateDisplaySecondKey } from "src/types/types";
  import Tabs from "./Tabs/Tabs.svelte";
  import TabPanel from "./Tabs/TabPanel.svelte";
  import Tab from "./Tabs/Tab.svelte";
  import TabList from "./Tabs/TabList.svelte";
  import Highlight from "./highlight/Highlight.svelte";
  import SettingsTab from "./Settings/SettingsTab.svelte";

  export let highlight: HighlightConfig;
  export let settings: SettingsType;
  
</script>

<div class="popup-body">

  <Tabs>
    <div class="popup-header">
      <img src="/images/icon.png" alt="app icon">
      <div class="right-header-container">
        <div class=popup-header-text>
          Colorful Chess
        </div>
        <TabList>
            <Tab><h3 style="font-size:14px">Highlights</h3></Tab>
            <Tab><h3 style="font-size:14px">Settings</h3></Tab>
        </TabList>
      </div>
    </div>
      <TabPanel>
        <Highlight highlightStore={highlight}/>
      </TabPanel>

      <TabPanel>
        <div class="settings-container"><SettingsTab settingsStore={settings} /></div>
      </TabPanel>
  </Tabs>
</div>

<style>
  img {
    display:flex;
    width: 51px;
    height: 44px;
    margin-top: 13px;
    margin-left: 4px;
  }
  h3 {
    color: white;
    margin:0px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }
  .popup-body {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 500px;

    margin: 0px;

    background: #312E2B;
  }
  .popup-header {
    display:flex;
    flex-direction: row;
  }
  .right-header-container {
    
  }

  .popup-header-text {
    width: 238px;
    height: 35px;
    left: calc(50% - 238px/2 + 26px);
    top: 0px;

    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    display: flex;
    align-items: flex-end;

    background: conic-gradient(from 180deg at 50% 50%, #6C9D41 0deg, #FF9900 106.88deg, #DA5925 255deg, #1D7AAB 360deg);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .config-tab {

  }
</style>