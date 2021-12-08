<template>
<div id="wrapper">
     <h1>Phonebook</h1>
    <div id="add">
        <input type="text" placeholder="Enter name" v-model="name">
        <input type="text" placeholder="Enter phone number" v-model="number">
        <button v-on:click="addNew">Add</button>
    </div>
    <added v-bind:contactApk="contactApk"></added>
</div>
</template>


<script>
import Added from "./Added";


export default {
    name: "Add",
    props: ["contactApk"],
    components: {
        "added": Added
    },
    data: function() {
        return {
            name: "",
            number: ""
        };
    },
    methods: {
        addNew: function() {
            this.$emit("item-add", this.name, this.number);
            this.name= "",
            this.number= ""
        }
    }
};
</script>


<style scoped>

#wrapper{ 
    margin:0;
    padding: 0;
    overflow: hidden;
}

h1 {
    font-weight: 400;
    font-size: 43px;
    text-align: center;
    transform: rotate(-90deg);
    float: left;
    width: 20%;
    margin: 240px 100px -240px -100px;
    letter-spacing: 3px;
}

#add {
    width: 20%;
    float: left;
    padding: 30px 0;
}

#add input {
    display: block;
    color: white;
    padding: 12px 20px;
    margin: 15px 0;
    box-sizing: border-box;
    border: 1px solid rgba(0,0,0,0.7);
    -webkit-transition: 0.5s;
    transition: 0.5s;
    background: rgba(255,255,255,0.1);
    outline: none;
    font-size: 17px;
      
}

#add input:focus {
    border: 1px solid #C5B358;
}

#add button {
    display: block;
    background-color:rgba(0,0,0,0.2);
    border: 1px solid rgb(197,179,88);
    color:rgb(197,179,88);
    padding: 14px 32px;
    text-decoration: none;
    margin: 20px 2px; 
    cursor: pointer;
    outline: none;
    font-size: 17px;
}

#add button:hover { 
    background-color:rgba(0,0,0,0.2);
    border: 1px solid rgba(197,179,88,0.6);
    color:rgba(197,179,88,0.6);
}

#add button:active {
    background-color:rgba(0,0,0,0.2);
    border: 1px solid rgba(212,175,55,0.5);
    color:rgba(212,175,55,0.5);
}


</style>