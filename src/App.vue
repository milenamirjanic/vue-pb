<template>
  <div id="app-container">
    <app-add v-on:item-add="addContact" v-bind:contactApk="Contacts"></app-add>
  </div>
</template>

<script>
import Add from "./components/Add";

import Contacts from "./model/Contacts";
import ContactItem from "./model/ContactItem";

export default {
  name: 'App',
  components: {
    "app-add": Add
  },
  data: function() {
    return {
      currentRoute: window.location.pathname,
      Contacts: new Contacts()
    };
  },
  methods: {
    addContact: function(name, number) {
      let contact= new ContactItem(name, number);
      this.Contacts.add(contact);
    }
  }
  
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');
body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    height: 100%;
    width: 100%;
    background-color: black;
    background-image: url(~@/assets/b1.jpg);
    background-size: cover;
    background-position: top -50px left 0;
    background-repeat: no-repeat;
}

#app-container {
    color: #fff;
    margin: 0;
    padding: 100px 35px 20px;
}


</style>
