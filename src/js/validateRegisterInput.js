import validator from "validator";

const validateRegisterInput = (data) => {
    let errors = {};

    const{username, email, password, password2} = data;
    if(localStorage.users){
        let IsUsers = localStorage.users;
        IsUsers = JSON.parse(IsUsers);
        let index = IsUsers.findIndex((user) => user.username === username);
        if(index > -1) {
            errors.username = "Username already exists !"
        }
    }
    if(validator.isEmpty(username)){
        errors.username = "username field is required";
    }
    if(!validator.isEmail(email)){
        errors.email = "please enter a valid email address.";
    }
    if(validator.isEmpty(email)){
        errors.email = "email field is required";
    }
    if(validator.isEmpty(password)){
        errors.password = "password field is required";
    }
    if(!validator.equals(password, password2)){
        errors.password2 = "Password should match!";
    }
    if(validator.isEmpty(password2)){
        errors.password2 = "Comfirm password field is required";
    }
    return {
        isInvalid: Object.keys(errors).length > 0,
        errors:errors
    }
}
export default validateRegisterInput;