<script setup lang="ts">
import { ref } from "vue";
import postApp from "./postApp.vue";
const TableHead = [
	"Linux",
	"Nixos",
	"Rust",
	"devenv",
	"Networking",
];
const nameOfCat: String = "Linux";
</script>
<template lang="pug">
//- Top Header [ Type | Name | Status | Speed | Size | Added ]
div( class="relative left-0 w-full h-full flex flex-col bg-[var(--LTheme2)] dark:bg-[var(--Theme2)]")
	ul(v-if="true" class="w-full h-10 mb-4 px-4 flex gap-2 items-center justify-around")
		li(class="uppercase w-full h-full flex justify-center items-center rounded-full font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]") {{TableHead[0]}}
		li(class="uppercase w-full h-full flex justify-center items-center rounded-full font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]") {{TableHead[1]}}
		li(class="uppercase w-full h-full flex justify-center items-center rounded-full font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]") {{TableHead[2]}}
		li(class="uppercase w-full h-full flex justify-center items-center rounded-full font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]") {{TableHead[3]}}
		li(class="uppercase w-full h-full flex justify-center items-center rounded-full font-bold text-[var(--Theme1)] dark:text-[var(--LTheme1)] bg-[var(--LTheme3)] dark:bg-[var(--Theme3)]") {{TableHead[4]}}

	//- Download list
	PerfectScrollbar(class="h-[82%] w-full p-2 py-10")
		ul(class="h-auto w-full flex flex-col items-center justify-start gap-10")
			ul(class="px-2 pt-10 pb-4 w-full relative flex flex-col md:flex-wrap md:flex-row gap-4 rounded-xl border border-[var(--LTheme4)] dark:border-[var(--Theme4)]")
				//- Group head
				li(class="absolute top-[-1.5rem] z-50 w-1/2 left-5 h-12 flex items-center justify-between gap-2 p-2 border border-[var(--LTheme4)] dark:border-[var(--Theme4)] bg-[var(--LTheme2)] dark:bg-[var(--Theme2)] rounded-xl")
					span(class="text-[var(--dark-fav-color)] dark:text-[var(--light-fav-color)]") {{nameOfCat}}
					span(class="text-[var(--dark-fav-color)] dark:text-[var(--light-fav-color)]") 4/4
				<postApp/>
				<postApp/>
				<postApp/>
				<postApp/>
				<postApp/>
</template>
<style scoped lang="scss">
// .PerfectScrollbar {
// 	--tw-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.245);
// 	--tw-shadow-colored: inset 0 2px 10px 0 var(--tw-shadow-color);
// 	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
// 		var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
// }
</style>
