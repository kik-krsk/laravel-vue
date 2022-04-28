<template>
  <div class="col-md-4">
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        v-model="person.name"
        placeholder="Name"
      />
    </div>
    <div class="mb-3">
      <input
        type="number"
        class="form-control"
        v-model="person.age"
        placeholder="Age"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        v-model="person.job"
        placeholder="Job"
      />
    </div>
    <div class="mb-3">
      <input
        :disabled="!isDisabled"
        class="btn btn-primary"
        value="Добавить"
        @click.prevent="
          $store.dispatch('store', {
            name: person.name,
            age: person.age,
            job: person.job,
          })
        "
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Create",
  mounted() {
    this.$store.commit("setPerson", { name: null, age: null, job: null });
  },
  computed: {
    ...mapGetters({
      isDisabled: "isDisabled",
      person: "person",
    }),
  },
};
</script>
<style scoped>
</style>