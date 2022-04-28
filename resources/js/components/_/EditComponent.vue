<template>
    <tr :class="this.$parent.isEdit(person.id) ? '' : 'd-none'">
      <th scope="row">{{ person.id }}</th>
      <td><input type="text" class="form-control" v-model="name" /></td>
      <td><input type="number" class="form-control" v-model="age" /></td>
      <td><input type="text" class="form-control" v-model="job" /></td>
      <td colspan="2">
        <a
          href="#"
          @click.prevent="updatePerson(person.id)"
          class="btn btn-success"
          >Update</a
        >
      </td>
    </tr>
</template>

<script>
export default {
  name: "EditComponent",
  data() {
    return {
      name: null,
      age: null,
      job: null,
    };
  },
  props: ["person"],
  mounted() {},
  methods: {
    updatePerson(id) {
      this.$parent.editePersonId = null;
      axios
        .patch(`api/people/${id}`, {
          name: this.name,
          age: this.age,
          job: this.job,
        })
        .then((result) => {
          this.$parent.getPeople();
        });
    },
  },
};
</script>
<style scoped>
</style>