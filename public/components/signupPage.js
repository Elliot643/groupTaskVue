let signupPage=Vue.component("signupPage",{
    props:{

    },
    template:`
        <div class="signupPage">
            <h1>Signup Page</h1>

            <form
                id="app" @submit.prevent="checkForm" method="post">

                <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                    <li v-for="error in errors">{{ error }}</li>
                    </ul>
                </p>

                <p>
                    <label for="username">Username</label>
                    <input
                    id="username"
                    v-model="username"
                    type="text"
                    name="username"
                    >
                </p>

                <p>
                    <label for="password">Password</label>
                    <input
                    id="password"
                    v-model="password"
                    type="password"
                    name="password"
                    >
                </p>

                <p>
                    <input
                    type="submit"
                    value="Submit"
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

            if (!this.errors.length) {
                axios.post("/postUser",{
                    username: this.username,
                    password: this.password,
                });
            }

            return true;
        }
    },
    computed:{
        
    },
    
});