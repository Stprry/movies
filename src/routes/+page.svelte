<script lang="ts">
	import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { supabase } from '$lib/supabaseClient';

	async function signInWithDiscord() {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'discord'
		});
	}

	async function signout() {
		const { error } = await supabase.auth.signOut();
	}

	// function helloWorld(): void {
	// 	const toastMesssage: ToastSettings = {
	// 		message: 'Hello World',
	// 		background: 'variant-filled-success'
	// 	};

	// 	toastStore.trigger(toastMesssage);
	// }
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<button class="btn variant-filled-secondary" on:click={signInWithDiscord}
			>Sign in with discord</button
		>
	</div>
	<div class="m-5">
		<button class="btn variant-filled-primary" on:click={signout}>Sign out with discord</button>
	</div>
</div>
