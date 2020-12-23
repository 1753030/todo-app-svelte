<script>
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
export let item;

// event forwarding
const btnDelete_Clicked = _ => {
    dispatch("message", {
      id: item.id,
    });
};
</script>

<type>

</type>

<li class={item.is_done ? 'done' : ''}>
    {item.title}
    {#if !item.is_done}
    <button on:click={btnDelete_Clicked} >Delete</button>
    {/if}
</li>