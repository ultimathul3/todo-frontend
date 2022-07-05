export default {
    methods: {
        getToken() {
            return localStorage.getItem('token')
        },
        getUsername() {
            return localStorage.getItem('username')
        },
        removeToken() {
            localStorage.removeItem('token')
        },
        removeUsername() {
            localStorage.removeItem('username')
        }
    }
}