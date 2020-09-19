import React from 'react'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import Avtar from '../avtar'
import Icon from '../icons'

const ConstHeader = styled.div`
    height : 60px;
    width : 100%;
    display : flex;
    background-color : #FFFFFF;
    align-items : center;
    justify-content : space-between;
    padding-left : 40px;
    padding-right : 40px;
    position : fixed;
    z-Index : 1000;
    box-shadow : 0px 0px 5px 2px rgba(0,0,0,0.07);
    @media (max-width: 700px) {
        padding-left : 20px;
        padding-right : 20px;
        box-shadow : 0px 0px 5px 2px rgba(0,0,0,0.07);
        /* margin-bottom : 30px; */
    }
`
const LeftWrapper = styled.div`
    width : 100px;
    height : 100%;
`
const RightWrapper = styled.div`
    width : 400px;
    height : 100%;
    display : flex;
    align-items : center;
    justify-content : flex-end;
`

const CusHeader = (props) => {
    console.log("Here is props",props)
    return(
        <ConstHeader>
            <LeftWrapper>
                {
                    props.backIcon ? 
                        <Icon name={"flag"} />
                        :
                        null
                }
            </LeftWrapper>
            {
                props.login ?
                    <RightWrapper>
                        <Avtar 
                            left={true}
                            src={""}
                            username={props.username}
                        />
                    </RightWrapper> 
                    :
                    <RightWrapper>
                        <Button content='Login' primary />
                        <Button content='Sign Up' color={"#59BB47"} />
                    </RightWrapper>       
            }
            
        </ConstHeader>
    )
}

export default CusHeader