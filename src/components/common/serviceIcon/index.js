import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
    width : 135px;
    height : 135px;
    /* border-radius : 5px; */
    /* box-shadow : 0px 0px 2px 2px rgba(0,0,0,0.5); */
    display : flex;
    justify-content : center;
    align-items : center;
    /* margin-right : 10px; */
    flex-direction : column;
    margin-bottom : 20px;
    @media (max-width: 700px) {
        width : 100px;
        height : 100px;
    };
`
const SubWrapper = styled.div`
    width : 100px;
    height : 100px;
    border-radius : 5px;
    box-shadow : 0px 0px 2px 2px rgba(0,0,0,0.07);
    margin-bottom : 10px;
    cursor : pointer;
    :hover {
        background-color : rgba(0,0,0,0.07);
    };
    @media (max-width: 700px) {
        width : 90px;
        height : 90px;
    };
    display : flex;
    justify-content : center;
    align-items : center;
`
const IconWrapper = styled.div`
    width : 80px;
    height : 80px;
    background-repeat: no-repeat;
    background-size: 70px;
    background-position : center;
    ${props => props.iconUrl ? `background-image : url(${props.iconUrl});` : null};
`


const ServiceIcon = (props) => {

    return(
        props.dataList.map((data) => {
            return(
                <MainWrapper
                    onClick={props.onClick}
                >   
                    <SubWrapper>
                        <IconWrapper 
                            iconUrl={data.iconUrl}
                        />
                    </SubWrapper>
                    <label>{data.label}</label>
                </MainWrapper>
            )
        })
    )
}   

export default ServiceIcon