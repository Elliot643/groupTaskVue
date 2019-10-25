let loginpage=Vue.component("loginpage",{
    props:{

    },
    template:`
        <div class="loginpage">
            <h1>Login Page</h1>

            <form
                id="app"
                @submit.prevent="checkForm" 
                method="post"
            >
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
            loggedIn: sessionStorage.getItem('loggedIn')
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
                axios
                .post('/login', {
                    username: e.target.username.value,
                    password: e.target.password.value
                  })
                .then(function (response) {
                    sessionStorage.setItem('username', response.data.username)
                    sessionStorage.setItem('userID', response.data._id)
                    sessionStorage.setItem('loggedIn', true)
                }).catch(function (error) {
                    console.log(error);
                });
            }

            return true;
        }
    },
    computed:{
        
    },
    
});