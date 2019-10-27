let signuppage=Vue.component("signuppage",{
    props:{

    },
    template:`
        <div class="signuppage">
            <h1><font color="white">Signup Page</font></h1>

            <form
                id="app" @submit.prevent="checkForm" method="post">

                <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                    <li v-for="error in errors">{{ error }}</li>
                    </ul>
                </p>

                <p>
                    <label for="username"><font color="white">Username</font></label>
                    <input
                    id="username"
                    v-model="username"
                    type="text"
                    name="username"
                    maxlength="30"
                    >
                </p>

                <p>
                    <label for="password"><font color="white">Password</font></label>
                    <input
                    id="password"
                    v-model="password"
                    type="password"
                    name="password"
                    >
                </p>

                <p>
                    <label for="profilePic"><font color="white">Link to a profile picture</font></label>
                    <input
                    id="profilePic"
                    v-model="profilePic"
                    type="profilePic"
                    name="profilePic"
                    >
                </p>

                <div v-if="profilePic.length">
                    <h3><font color="white">Choosen Picture</font></h3>
                    <img v-bind:src="profilePic" style="width: 100px">  
                </div>
                

                <p>
                    <input
                    type="submit"
                    value="Register"
                    >
                </p>
            </form>

        </div>
    `,
    data(){
        return{
            username: "",
            password: "",
            errors: [],
            profilePic: "",
        }
        
    },
    methods:{
        checkForm: function(e) {
            this.errors = [];
            if (!e.target.username.value) {
                this.errors.push("Username required");
            }

            if (!e.target.password.value) {
                this.errors.push("Password required");
            }
            if (!e.target.profilePic.value) {
                this.errors.push("Profile picture required");
            }

            if (!this.errors.length) {
                axios.post("/postUser",{
                    username: this.username,
                    password: this.password,
                    profilePic: this.profilePic,
                }).then(()=>{
                    this.$emit("user-signed-up");
                });
            }

            return true;
        }
    },
    computed:{
        
    },
    
});