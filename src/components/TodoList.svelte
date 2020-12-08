<script>
import TodoItem from "./TodoItem.svelte";
export let items;

</script>

<type></type>

<div>
  <h3>Todo</h3>
  <ul>
    {#each items as item (item.id)}
        <TodoItem on:message item={item}></TodoItem>
    {/each}
  </ul>
</div>
