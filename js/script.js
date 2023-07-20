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
  methods: {
    addList() {
      const data = { list: this.newList };
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      axios
        .post("http://localhost/php-todo-list-json/api/list/", data, config)
        .then((res) => {
          axios
            .get("http://localhost/php-todo-list-json/api/list/")
            .then((res) => {
              this.lists = res.data.map((task) => {
                return { task: task, completed: false };
              });
            });
          this.newList = "";
        });
    },
    toggleCompleted(index) {
      this.lists[index].completed = !this.lists[index].completed;
    },
  },
  created() {
    axios.get("http://localhost/php-todo-list-json/api/list/").then((res) => {
      this.lists = res.data.map((task) => {
        return { task: task, completed: false };
      });
    });
  },
});

// Stampa Vue
app.mount("#root");
