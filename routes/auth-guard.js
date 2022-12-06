const authGuard = (to, from, next) => {

    if(localStorage.getItem('authToken')){
        next();
    }else{
        next({name: 'mivistalogin'});
    }

}

export default authGuard;