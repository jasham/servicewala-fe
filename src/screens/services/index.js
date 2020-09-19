import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Headers from '../../components/common/header'
import ImageBanner from '../../components/common/imageBanner'
import Tab from '../../components/common/tabs'
import ServiceIcon from '../../components/common/serviceIcon'


const MainWrapper = styled.div`
    width : 100%;
    position : absolute;
    right : ${props => props.mainRight};
    transition: all 0.12s ease-in-out;
`
const BodyWrapper  = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    padding-left : 40px;
    padding-right : 40px;
    margin-top : 100px;
    @media (max-width: 700px) {
        padding-left : 20px;
        padding-right : 20px;
        /* margin-top : 100px; */
    }
    flex-direction : column;
`
const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabWrapper = styled.div`
    margin-top : 20px;
`
const dataIconList = [
    {label : "Mechanic(Car)", icon : ''},
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Plumber", icon : '' },
    {label : "Gardening", icon : '' },
    {label : "Water Filter", icon : ''},
    {label : "Electritian", icon : '' },
    {label : "Laundry & Iron", icon : '' },
    {label : "Printer", icon : '' },
    {label : "Painter", icon : ''},
    {label : "Geaser", icon : '' },
    {label : "Washing Machine", icon : '' },
    {label : "Gas & Stove", icon : '' },
    {label : "General labour", icon : ''},
    {label : "Car Washing", icon : '' },
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Car)", icon : ''},
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Car)", icon : ''},
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Car)", icon : ''},
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Car)", icon : ''},
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Car)", icon : ''},
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Car)", icon : ''},
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Bike)", icon : '' },
    {label : "Mechanic(Bike)", icon : '' },
]

const ServicesWrapper = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : row;
    flex-wrap : wrap;
    margin-top : 30px;
    @media (max-width: 700px) {
        justify-content : space-between;
    }
`


const Services = (props) => {
    const [ mainRight, setMainRight ] = useState("-100%")

    const onClickService = () => {
        // setMainMargin("-100%")
        props.history.push('/spec_services')
        // setTimeout(() => {
            
        // },1000)
    }

    useEffect(() => {
        setMainRight("0px")
    }, [])
    return(
        <MainWrapper
            mainRight={mainRight}
        >
            <Headers 
                login={true}
                username={"Jasham"}
            />
            <BodyWrapper>
                <ImageBanner 
                    breadCrumb={false}
                />
                {/* <TabWrapper>
                    <Tab 
                        panes={panes}
                    />
                </TabWrapper> */}
                <ServicesWrapper>
                    <ServiceIcon 
                        dataList={dataIconList}
                        onClick={onClickService}
                    />
                </ServicesWrapper>
            </BodyWrapper>
            
        </MainWrapper>
    )
}

export default Services