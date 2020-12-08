<script>
export let item;
</script>

<type>

</type>

<li class={item.is_done ? 'done' : ''}>
    {item.title}
    {#if !item.is_done}
    <button>Delete</button>
    {/if}
</li>