const validation = (values) => {
    let error = {};
    if(!values.name){
        error.name="Name is required"
    }
    if(!values.email){
        error.email='email is required'
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        error.email='email is invalid';
    }
    if(!values.contact){
        error.contact="contact is empty"
    }
    if(!values.gender){
        error.gender='Gender is empty'
    }
    if(!values.note){
        error.note="Note is empty"
    }
    return error;
}
export default validation