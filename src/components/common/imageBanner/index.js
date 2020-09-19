import React from 'react'
import styled from 'styled-components'
import bike from '../../../assets/images/bike.jpg'
import { Breadcrumb, Divider } from 'semantic-ui-react'
import BreadCumb from '../breadCrumb'
import { Button } from 'semantic-ui-react'

const MainWrapper = styled.div`
    width : 100%;
    height : 300px;
    border-radius : 10px;
    ${props => props.bgImage ? `background-image : url(${props.bgImage})` : null};
    background-repeat : no-repeat;
    background-size : cover;
    background-position : center;
    box-shadow : 0px 0px 10px 1px rgba(0,0,0,0.5);
    @media (max-width: 700px) {
        height : 200px;
    }
`

const SubWrapper = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`
const BreadCrumbWrapper = styled.span`
    position: relative;
    top : 20px;
    left : 20px;
    display : flex;
    align-items : center;
`
const ButtonWrapper = styled.span`
    position: relative;
    top : 20px;
    margin-right : 20px;
`
const ImageBanner = (props) => {
    return(
        <MainWrapper
            bgImage={bike}
        >
            <SubWrapper>
                <BreadCrumbWrapper>
                    {
                        props.breadCrumb ? 
                            <BreadCumb 
                                path1={"Home"}
                                path2={"Mechanic(Bike)"}
                            />
                            :
                            null
                    }
                </BreadCrumbWrapper>
                <ButtonWrapper>
                    {
                        props.add ? 
                            <Button content='Add' primary />
                            :
                            null
                    }
                    
                </ButtonWrapper>
            </SubWrapper>
        </MainWrapper>
    )
}

export default ImageBanner