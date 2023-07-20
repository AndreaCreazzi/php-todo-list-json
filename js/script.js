// Installo Vue
const { createApp } = Vue;

// Vue
const app = createApp({
  data() {
    return {
      lists: [],
      newList: "",
    };
  },
  created() {
    axios.get("http://localhost/php-todo-list-json/api/list/").then((res) => {
      this.lists = res.data;
      console.log(this.list);
    });
  },
});

// Stampa Vue
app.mount("#root");
