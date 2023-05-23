<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell, AppBar, Avatar, Drawer, drawerStore, Toast } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';

	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<Toast
	position="b"
	width="min-w-[350px] max-w-[640px]"
	shadow="shadow-lg"
	class="justify-center align-middle"
/>
<Drawer>
	<Navigation />
</Drawer>

<AppShell slotSidebarLeft="w-0  md:w-52 bg-surface-500/10">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="md:hidden btn btn-icon-sm" on:click={drawerOpen}>
					<i class="fa-solid fa-bars fa-xl" />
				</button>
				<strong class="text-xl uppercase">Dreamteam Movie Reviews (Icon)</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<Avatar
					src="https://media.licdn.com/dms/image/D4D03AQHRUsMBjjLx5w/profile-displayphoto-shrink_200_200/0/1670262924192?e=1690416000&v=beta&t=UwKnjhGCVuekMMko58r0_y3dJbwZkJW7tyyZAeS6vrA"
					width="w-12"
					rounded="rounded-full"
				/>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<div class="container p-10 mx-auto">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
