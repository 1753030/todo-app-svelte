<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let taskName = "";
  $: console.log(taskName);

  const btnAdd_Clicked = (_) => {
    if (taskName !== "") {
      const item = {
        id: Math.floor(Math.random() * 100) + 7,
        title: taskName,
        is_done: false,
      };
      dispatch("message", {
        item: item,
      });
      taskName = "";
    }
  };

  const txtTaskName_KeyUp = (e) => {
    if (e.keyCode === 13) {
      btnAdd_Clicked();
    }
  };
</script>

<type />

<div>
  <h3>Add Item</h3>
  <div class="fg">
    <input bind:value={taskName} type="text" on:keyup={txtTaskName_KeyUp} />
    <button on:click={btnAdd_Clicked} type="button">Add</button>
  </div>
</div>
