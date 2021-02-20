Vue.createApp({
  data() {
    return {
      enteredValue1: null,
      enteredValue2: null
    };
  },
  methods: {
    showMessage(message) {
      alert(message);
    },
    outputValue1(event) {
      this.enteredValue1 = event.target.value;
    },
    outputValue2(event) {
      this.enteredValue2 = event.target.value;
    }
  }
}).mount("#assignment");
