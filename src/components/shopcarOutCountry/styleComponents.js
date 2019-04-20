import styled from 'styled-components';


export const GoodsList = styled.div `
    
    height:max-height;
    overflow:auto;
    padding-bottom:1.5rem;
    
    ul{
        height:max-height;
         font-size:.12rem;
          
        li{
            margin: 0 auto;
            width: 3.06rem;
            margin-top: 0.08rem;
            display:flex;
            height: 1.08rem;
            justify-content:center;
            align-items:center;
            background: rgba(255,255,255,1);
            box-shadow: 0px 0.06rem 0.2rem 0px rgba(121,152,215,0.2);
            border-radius: 0.08rem;
        }
    }
    .goodLeft{
        width:.86rem;
        height:.86rem;
        margin-right:5px;
        img{
            width:100%;
            height:100%;
        }
       
    }

    .goodRight{
            display:flex;
            height:100%;
            flex-direction:column;
            p{
                &:nth-child(1){
                    width:1.8rem;
                    display:flex;
                    justify-content:space-between;
                    font-size:.12rem;
                    padding-top:10px;
                    color:#000;
                    span{
                        &:nth-child(1){
                        display:block;
                        width:1.48rem;
                        height:.37rem; 
                        margin-bottom:5px;                       
                        }
                        &:nth-child(2){

                            font-size:.2rem;
                            color:#ccc;
                        }
                }
               
            }
            
            &:nth-child(2){
                width:1.16rem;
                height:.2rem;
                background:#eee;
                color:#bbb;
                display:flex;
                justify-content:space-around;
                align-items:center;
                .more{
                    width:.08rem;
                    height:.08rem;
                    display:inline-block;
                }
            }

            &:nth-child(3){
                width:1.8rem;
                height:.21rem;
                display:flex;
                justify-content:space-between;
                padding-top:.1rem;

                span{
                    &:nth-child(1){
                        color: #FC3B72;
                        font-size:.14rem;
                    }
                    &:nth-child(2){
                        display:flex;
                        width:.7rem;
                        justify-content:space-between;
                        i{
                            display:block;
                            width:.21rem;
                            height:.21rem;
                            background:#eee;
                            line-height:.21rem;
                            text-align:center;
                            
                        }
                    }
                }
               
            }
        }
    }

`


export const Container = styled.div`
    width:100%;
    height:100%;
    overflow:auto;

`