<template>
  <div>
    <CreateComponent></CreateComponent>
    <IndexComponent ref="index"></IndexComponent>
  </div>
</template>

<script>
import CreateComponent from "./CreateComponent";
import IndexComponent from "./IndexComponent";
export default {
  name: "PostComponent",
  data() {
    return {
    };
  },
  mounted(){
    console.log(this.$refs.index.indexLog());
  },
  methods:{
    parentLog() {
      return 'This is Parent LOG'
    }
  },
  components: {
    CreateComponent,
    IndexComponent,
  },
};
</script>
<style scoped>
</style>