Vue.createApp({
  data() {
    return {
      result: 0
    };
  },
  methods: {
    add(value) {
      this.result += value;
    }
  },
  computed: {
    message() {
      if (!this.result) {
        return;
      } else if (this.result < 37) {
        return "Not there yet";
      } else if (this.result > 37) {
        return "Too much!";
      } else {
        return "it's exactly what I need";
      }
    }
  },
  watch: {
    result() {
      setTimeout(() => (this.result = 0), 5000);
    }
  }
}).mount("#assignment");
