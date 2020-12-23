<script>
  import { createEventDispatcher } from "svelte";
  import {todos} from "../store";
  const dispatch = createEventDispatcher();
  let term = "";
  const txtTerm_KeyUp = (e) => {
    if (e.keyCode === 27) {
      btnClear_Clicked();
    }
  };

  $: {
    console.log("Search: " + term);
    console.log($todos);
    dispatch("message", {
      term: term,
    });
  }

//   const txtTerm_Changed = (_) => {
//     console.log(term);
//     dispatch("message", {
//       term: term,
//     });
//   };

  const btnClear_Clicked = (_) => {
    term = "";
  };
</script>

<type />

<div>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label style="font-weight: bold;">
    Filter tasks (by name)
    <div class="fg">
      <input
        bind:value={term}
        on:keyup={txtTerm_KeyUp}
        type="text" />
      <button on:click={btnClear_Clicked} type="button">Clear</button>
    </div>
  </label>
</div>
