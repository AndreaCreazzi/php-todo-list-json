// Installo Vue
const { createApp } = Vue;

// Vue
const app = createApp({
  data() {
    return {
      // array lista
      lists: [],
      //   input aggiunta nella lista
      newList: "",
    };
  },
  methods: {
    // funzione per aggiungere un task nella lista
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
    // funzione per aggiungere il segno al task nella lista
    toggleCompleted(index) {
      this.lists[index].completed = !this.lists[index].completed;
    },
    // funzione per eliminare un task
    deleteList(index) {
      this.lists.splice(index, 1);
    },
  },
  // recupero axios
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
