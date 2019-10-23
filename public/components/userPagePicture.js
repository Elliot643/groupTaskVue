let userPagePicture=Vue.component("userpage-picture",{
    props:{
        //imageSrc: "",
    },
    template:`
        <div class="user-card" @click="">
            <div class="picture">
                <img v-bind:src="imageSrc">
            </div>
            <div>
                <ul>
                    <li v-for="comment in comments">
                        <p>{{ comment.commenter }} says: {{ comment.comment }}</p>
                        <p><img v-bind:src="'../assets/thumbsup.jpg'" v-if="comment.thumbsUp"></p>
                        <p><img v-bind:src="'../assets/thumbsdown.jpg'" v-if="!comment.thumbsUp"></p>  
                    </li>
                </ul>
                <p>
                    <label for="name">Comment:</label>
                    <input id="name" v-model="name"></input> 
                </p>
            </div>
        </div>
    `,
    data(){
        return{
            imageSrc: "../assets/cat.jpg",
            name: "",
            comments:[
                {
                    pictureId: 1,
                    comment: "doesnt care",
                    thumbsUp: false,
                    commenter: "Karen"
                },
                {
                    pictureId: 1,
                    comment: "nice",
                    thumbsUp: true,
                    commenter: "Joe"
                }
            ],
        }
    },
    mount:{

    },
    methods:{
        
    },
    computed:{

    },
    
});