<template>
  <div class="col-md-4">
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        v-model="name"
        placeholder="Name"
      />
    </div>
    <div class="mb-3">
      <input
        type="number"
        class="form-control"
        v-model="age"
        placeholder="Age"
      />
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" v-model="job" placeholder="Job" />
    </div>
    <div class="mb-3">
      <input
        class="btn btn-primary"
        value="Добавить"
        @click.prevent="addPerson"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateComponent",
  data() {
    return {
      name: null,
      age: null,
      job: null,
    };
  },
  mounted()
  {
    console.log(this.$parent.$refs.index.indexLog());
  },
  methods: {
    addPerson() {
      axios
        .post("/api/people", {
          name: this.name,
          age: this.age,
          job: this.job,
        })
        .then((res) => {
          this.name = null;
          this.age = null;
          this.job = null;
          this.$parent.$refs.index.getPeople();
        });
    },
  },
};
</script>
<style scoped>
</style>