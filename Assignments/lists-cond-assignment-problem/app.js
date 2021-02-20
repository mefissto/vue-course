const app = Vue.createApp({
  data() {
    return { taskName: "", taskList: [], showList: true };
  },
  computed: {
    buttonCaption() {
      return this.showList ? "Hide List" : "Show List";
    }
  },
  methods: {
    addTask() {
      this.taskList.push(this.taskName);
      this.taskName = "";
    },
    toggleListVisibility() {
      this.showList = !this.showList;
    }
  }
});

app.mount("#assignment");
