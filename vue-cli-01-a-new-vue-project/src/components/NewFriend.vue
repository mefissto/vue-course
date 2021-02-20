<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="phone" v-model="enteredPhone" />
    </div>
    <div>
      <label>E-Mail</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
    };
  },
  methods: {
    submitData() {
      const newContact = {
        name: this.enteredName,
        phone: this.enteredPhone,
        email: this.enteredEmail,
        isFavorite: false,
        id: new Date().toISOString(),
      };
      this.$emit('add-contact', newContact);
    },
  },
};
</script>