import {getcCartdatas,getCartdatas} from '@apis/shopcar'
export const cartdatasActions = ()=>{
    let action = (data) =>({
        type:'CARTDATA',
        value:data

    })

    return async (dispatch)=>{
        let data = await getcCartdatas()
        dispatch(action(data.result.data.product))
        //console.log(data.result.data.product)

    }
}


export const cartdataActions = ()=>{
    let action = (data) =>({
        type:'CARTDATA_OUT',
        value:data

    })

    return async (dispatch)=>{
        let data = await getCartdatas()
        dispatch(action(data.result.data.product))
        

    }
}