<template>
    <div id="added">
    <ul>
        <item
        v-for="(item) in contactApk.items"
        v-bind:key="item.id"
        v-bind:item="item"
        v-on:item-delete="onDelete(item)"
        ></item>
    </ul>
    </div>
</template>


<script>
import AddedContact from "./AddedContact";

export default {
  name: "Added",
  props: ["contactApk"],
  components: {
    item: AddedContact
  },
  methods: {
    onDelete: function(item) {
      this.contactApk.delete(item);
    }
  }
};
</script>


<style scoped>
#added {
    padding: 15px 5%;
    width: 40%;
    height: fit-content;
    float: right;
}

#added ul {
    list-style: none;
    font-size: 1.3rem;
    padding: 0;
    margin: 0;
    overflow-y: scroll;
    height: 500px;
    padding-bottom: -15px;
    overflow-x: hidden;
    
}


::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.1);
}

::-webkit-scrollbar-track:hover {
    background: rgba(0,0,0,0.6);
}

::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.2); 
}

::-webkit-scrollbar-thumb:hover {
    background:rgba(197,179,88,0.7); 
}
</style>