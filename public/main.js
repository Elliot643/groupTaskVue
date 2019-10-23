Vue.component("user-card",{
    template:`
        <div class="user-card">
            <div class="user-image">
                <img v-bind:src="userImage">
            </div>
        </div>
    `,
    data(){
        return{
            userImage: "./assets/image.jpg",
        }
    },
    methods:{

    },
    computed:{

    }
});
var app = new Vue({
    el: "#app",
    data:{
        
    },
    methods:{
        
    }
});