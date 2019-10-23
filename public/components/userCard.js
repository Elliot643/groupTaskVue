let userCard=Vue.component("user-card",{
    props:{
        user: Object,
        username: String,
        imageSrc: String 
    },
    template:`
        <div class="user-card" @click="">
            <div class="user-image">
                <img v-bind:src="imageSrc">
            </div>
            <div>
                <h1>{{ username }}</h1>
            </div>
        </div>
    `,
    data(){
        return{
            
        }
    },
    methods:{

    },
    computed:{

    },
    
});