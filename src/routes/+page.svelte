<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<div>
    <h1>Lists</h1>
    <main>
        <div>
            {#each data.feed as list}
                <div>
                    <h3>{list.name}</h3>
                    <ul>
                        {#each list.tasks as task}
                            <li>{task.name}</li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </main>
</div>
