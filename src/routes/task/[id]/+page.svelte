<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

{#if data.task}
    <h1>{data.task.name}</h1>
    <p>{data.task.description}</p>
{:else}
    <h1>Task not found</h1>
{/if}
