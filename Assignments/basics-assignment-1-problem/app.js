Vue.createApp({
  data() {
    return {
      name: "Serhii",
      age: 29,
      favoriteNumber: Math.random(),
      imageLink:
        "https://lh3.googleusercontent.com/ogw/ADGmqu9e5blPCMLzxu9pmYrIT7XR6U4ahpBpXksmPipJ=s32-c-mo"
    };
  },
  methods: {
    ageInFiveYears() {
      return this.age + 5;
    }
  }
}).mount("#assignment");
