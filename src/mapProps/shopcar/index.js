import {cartdatasActions,cartdataActions} from '@actions/actionCreator';

export const mapStateToProps = (state) =>({
    getCartdatas:state.getIn(['Shopcar']),
    getOutdatas:state.getIn(['Shopcar'],['getOutdatas'])

})


export const mapDispatchToProps = (dispatch)=>({

    in_cartdatas(){
        dispatch(cartdatasActions())
    },

    out_cartdatas(){
        dispatch(cartdataActions())
    }
})