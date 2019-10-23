let loginpage=Vue.component("loginpage",{
    props:{

    },
    template:`
        <div class="loginpage">
            <h1>Login Page</h1>

            <form
                id="app"
                @submit="checkForm"
            >
                <p>
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
            
        }
    },
    methods:{
        checkForm: (e) => {
            
        }
    },
    computed:{

    },
    
});