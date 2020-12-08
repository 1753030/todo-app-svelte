<script>
  import { onMount } from "svelte";
  import SearchBar from "./components/SearchBar.svelte";
  import TodoList from "./components/TodoList.svelte";
  import NewItem from "./components/NewItem.svelte";
  export let name;

  let search = {is_searching: false, term: ""};
  let items = [];
  let visibleItems = [];
  onMount(async () => {
    setTimeout((_) => {
      items = [
        { id: 1, title: "Pay Bills", is_done: true },
        { id: 2, title: "Learn ReactJS", is_done: false },
        { id: 3, title: "Learn NodeJS Express", is_done: false },
        { id: 4, title: "Learn PassportJS", is_done: false },
        { id: 5, title: "Complete Final Project", is_done: false },
        { id: 6, title: "Have Dinner", is_done: true },
      ];
      visibleItems = items.map((a) => ({ ...a }));
    }, 500);
  });

  const onItemAddedHandler = (event) => {
    items.push(event.detail.item);
	visibleItems = items.map((a) => ({ ...a }));
	searchTask(search.term);
    visibleItems = visibleItems;
  };

  const onItemDeleteHanlder = (event) => {
    let index = items.findIndex((item) => item.id == event.detail.id);
    items[index].is_done = true;
	visibleItems = items.map((a) => ({ ...a }));
	searchTask(search.term);
    visibleItems = visibleItems;
    console.log(visibleItems[index]);
  };

  const searchTask = term => {
	let termLowerCase = term.toLowerCase();
	visibleItems = items.filter(item => item.title.toLowerCase().includes(termLowerCase))
  };

  const onSearchTermChangedHandler = (event) => {
    if (event.detail.term.length === 0) {
	  visibleItems = items.map((a) => ({ ...a }));
	  visibleItems = visibleItems;
	  search.is_searching = false;
	  search.term = "";
      return;
	}
	let termLowerCase = event.detail.term.toLowerCase();
	searchTask(event.detail.term);
	search.is_searching = true;
	search.term = event.detail.term;
  };
</script>

<style type="text/scss">
  $color: #ff3e00;
  $color1: #2e69e7;

  main {
    // text-align: center;
    padding: 1em;
    max-width: 240px;
    width: 400px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    color: $color1;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>{name}!</h1>

  <SearchBar on:message={onSearchTermChangedHandler} />
  <TodoList on:message={onItemDeleteHanlder} items={visibleItems} />
  <NewItem on:message={onItemAddedHandler} />
</main>
