<script lang="ts">
	import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';

	function helloWorld(): void {
		const toastMesssage: ToastSettings = {
			message: 'Hello World',
			background: 'variant-filled-success'
		};

		toastStore.trigger(toastMesssage);
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<button class="btn variant-filled-secondary" on:click={helloWorld}>Hi</button>
	</div>
</div>
