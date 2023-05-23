<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close;
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose}>Home</a></li>
		<li><a href="/Movies" on:click={drawerClose}>Movies</a></li>
		<li><a href="/Rate" on:click={drawerClose}>Rate</a></li>
	</ul>
</nav>
