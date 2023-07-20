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
          this.lists.push(res.data);
          this.newList = "";
        });
    },
  },
  created() {
    axios.get("http://localhost/php-todo-list-json/api/list/").then((res) => {
      this.lists = res.data;
    });
  },
});

// Stampa Vue
app.mount("#root");
