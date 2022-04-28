<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Job</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="person in people">
          <ShowComponent :person="person" ref="show"></ShowComponent>
          <EditComponent
            :person="person"
            :ref="`edit_${person.id}`"
          ></EditComponent>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import EditComponent from "./EditComponent";
import ShowComponent from './ShowComponent';
export default {
  name: "IndexComponent",
  components: { EditComponent,ShowComponent },
  data() {
    return {
      people: null,
      editePersonId: null,
      name: "",
      age: null,
      job: "",
    };
  },
  mounted() {
    this.getPeople();
  },
  methods: {
    getPeople() {
      axios.get("/api/people").then((result) => {
        this.people = result.data;
      });
    },
    changeEditPersonId(id, name, age, job) {
      this.editePersonId = id;
      let editName = `edit_${id}`
      let fullEditName = this.$refs[editName][0];
      fullEditName.name = name;
      fullEditName.age = age;
      fullEditName.job = job;
    },
    isEdit(id) {
      return this.editePersonId === id;
    },
    updatePerson(id) {
      this.editePersonId = null;
      axios
        .patch(`api/people/${id}`, {
          name: this.name,
          age: this.age,
          job: this.job,
        })
        .then((result) => {
          this.getPeople();
        });
    },
    deletePerson(id) {
      this.editePersonId = null;
      axios.delete(`api/people/${id}`).then((result) => {
        this.getPeople();
      });
    },
    indexLog() {
      return "This is index component";
    },
  },
};
</script>
<style scoped>
</style>