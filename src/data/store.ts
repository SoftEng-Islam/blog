import { defineStore, StoreDefinition } from "pinia";
import { DownloadsList } from "./downloads.json";
export const useSettingsStore = defineStore("settings", {
	state: () => ({
		settings: {
			AppName: "Softeng",
		},
		downloads: DownloadsList,
	}),
	actions: {
		async loadSettings() {
			const path = "./settings.json";
			this.settings = await invoke("read_settings_file", { path });
		},
		async saveSettings() {
			const path = "./settings.json";
			await invoke("write_settings_file", { path, settings: this.settings });
		},
	},
});
