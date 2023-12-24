class Auth {    
    isLoggedIn() {
        if(localStorage.getItem('authToken')){
            return true;
        }
        return false;
    }
}
export default new Auth();