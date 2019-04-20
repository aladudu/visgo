import immutable from 'immutable';


const defaultState = immutable.fromJS({
    getCartdatas:[],
    getOutdatas:[]

})



export default ( state=defaultState,action)=>{

    switch(action.type){
        case 'CARTDATA':
        //console.log( state.updateIn(['getCartdatas'],x=>x.concat(action.value)))
            return state.updateIn(['getCartdatas'],x=>x.concat(action.value))
        case'CARTDATA_OUT':
            return state.updateIn(['getOutdatas'],x=>x.concat(action.value))
           

    }




    return state;
}

