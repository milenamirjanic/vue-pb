<template>
    
            <li>
                <p class="name">{{item.name}}</p>
                <p class="number">{{item.number}}</p>
                <i class="fas fa-backspace" v-on:click.stop="onDelete"></i>
            </li>
		
</template>

<script>
export default {
    name: 'AddedContact',
    props: ["item"],
    methods: {
    onDelete: function() {
      this.$emit("item-delete");
    }
  }
};
</script>

<style scoped>

li {
    margin: 10px 0;
    padding: 3px 5px;
    background: rgba(0,0,0,0.1);
    position: relative;
}

 li:hover {
    background: rgba(255,255,255,0.1);
}

 p {
    padding: 0;
    margin:5px 0;
}

.name {
    font-weight: 300;
}
.number{
    font-size: 1.1rem;
    letter-spacing: 3px;
}

 li:hover .number {
    font-weight: 600;
}

.fas {
    color:rgba(197,179,88,0.7);
    position: absolute;
    right: 30px;
    font-size: xx-large;
    top: 25%;
    bottom: 25%;
    display: none;
}

li:hover .fas{
    display: block;
}

li:hover .fas:hover {
    color: 	rgba(218,165,32,0.7);
}

 li:hover .fas:active {
    color:rgba(212,175,55,1);
}
</style>