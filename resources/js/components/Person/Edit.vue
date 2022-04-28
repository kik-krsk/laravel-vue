<template>
  <div class="col-md-4" v-if="person">
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
        value="Изменить"
        @click.prevent="
          $store.dispatch('update', {
            id: data.id,
            name: data.name,
            age: data.age,
            job: data.job,
          })
        "
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Edit",
  mounted() {
    this.$store.dispatch("getPerson", this.$route.params.id);
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