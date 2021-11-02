class Actions{
    constructor(dispatch){
        this.dispatch = dispatch
    }
    loading(payLoad){
        this.dispatch({
            type: 'loading',
            payLoad
        })
        return this
    }
    alerts(payLoad){
        this.dispatch({
            type: 'alerts',
            payLoad
        })
        return this
    }
    loggedIn(payLoad){
        this.dispatch({
            type: 'loggedIn',
            payLoad
        })
        return this
    }
    id(payLoad){
        this.dispatch({
            type: 'id',
            payLoad
        })
        return this
    }
    name(payLoad){
        this.dispatch({
            type: 'name',
            payLoad
        })
        return this
    }
    email(payLoad){
        this.dispatch({
            type: 'email',
            payLoad
        })
        return this
    }
    notes(payLoad){
        this.dispatch({
            type: 'notes',
            payLoad
        })
        return this
    }
}
export default Actions