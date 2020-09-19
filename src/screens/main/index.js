import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Headers from '../../components/common/header'
import { Container, Dropdown, Form, Checkbox, Button  } from 'semantic-ui-react'
import car from '../../assets/svgs/car.svg'
import { Radio, Header } from 'semantic-ui-react'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; 
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import TextAreaComp from '../../components/common/textarea'
import axios from 'axios'
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';

import RadioComp from '../../components/common/radio'
import ServiceIcon from '../../components/common/serviceIcon'
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:8080/";


const MainWrapper = styled.div`
    position : absolute;
    min-height : 100vh;
    width : 100% !important;
    /* background-color : green; */
    top : 0px;
    left : ${props => props.mainMargin} !important;
    /* right : ; */
    margin-left : 0px !important;
    margin-right : 0px !important;
    transition: all 0.12s ease-in-out;
`
const UpperWrapper = styled.div`
    width : 100%;
    min-height: 500px;
    padding-left : 40px;
    padding-right : 40px;
    padding-top : 0px;
    /* margin-top : 30px; */
    margin-top : 100px;
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : space-between;
    @media (max-width: 700px) {
        flex-direction: column;
        /* margin-top : 100px; */
        padding-left : 20px;
        padding-right : 20px;
    }
`
const BodyLeftWrapper = styled.div`
    width : 48%;
    display : flex;
    flex-direction : column;
    @media (max-width: 700px) {
        width : 100%
        /* margin-top : 10px; */
    }
`
const BodyRightWrapper = styled.div`
    width : 48%;
    display : flex;
    justify-content : flex-end;
    @media (max-width: 700px) {
        margin-top : 40px;
        width : 100%;
    }
`
const FormWrapper = styled.div`
    width : 400px;
    height : 450px;
    padding-left : 30px;
    padding-right : 30px;
    padding-bottom : 30px;
    padding-top : 30px;
    border : 1px solid rgba(0,0,0,0.1);
    border-radius : 5px;
    @media (max-width: 700px) {
        /* margin-top : 40px; */
        width : 100%;
    }
`

const TitleWrapper = styled.div`
    position : relative;
    top : -20px;
    left : 0px;
`
const CusHeader = styled(Header)`
    margin : 0px;
    color : ${props => props.color};
`
const dataList = [
    {label : "Today", checked : false, value : "1"},
    {label : "Regular", checked : false, value : "2"}
]

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
    {label : "Car Washing", icon : '' }
]

const ImageWrapper = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
`
const ImageSubWrapper = styled.img`
    width : 100%;
    @media (max-width: 700px) {
        width : 50%;
    }
`

const LowerWrapper = styled(UpperWrapper)`
    margin-top : 100px;
    flex-direction : column;
    justify-content : center;
    min-height : 0px;
`

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

// const Main = (props) => {
//     const [ mainMargin , setMainMargin ] = useState("-100%")
//     const [ moveNext, setMoveNext ] = useState(false)

//     useEffect(() => {
//         setMainMargin("0px")
//     }, [])

//     const onClickService = () => {
//         setMainMargin("-100%")
//         props.history.push('/spec_services')
//         // setTimeout(() => {
//         // },1000)
//     }

//     return (
//         <MainWrapper
//             mainMargin={mainMargin}
//         >
//             <Headers />
//             <UpperWrapper>
//                 <BodyLeftWrapper>
//                     <TitleWrapper>
//                         <CusHeader as='h1'>Anytime anywhere</CusHeader>
//                         <CusHeader as='h4' color='rgba(0,0,0,0.4)'>we are here to help you....</CusHeader>
//                     </TitleWrapper>
//                     <ImageWrapper>
//                         <ImageSubWrapper 
//                             src={car } 
//                         />
//                     </ImageWrapper>
//                 </BodyLeftWrapper>
//                 <BodyRightWrapper>
//                     <FormWrapper>
//                         <Form>
//                             <Header as='h1'>Select Our Services</Header>
//                             <Form.Field>
//                                 <Dropdown
//                                     placeholder='Select services...'
//                                     fluid
//                                     multiple
//                                     search
//                                     selection
//                                     // options={stateOptions}
//                                 />
//                             </Form.Field>
//                             <Form.Field>
//                                 Appointment: 
//                                 {/* <b>{this.state.value}</b> */}
//                             </Form.Field>
//                             <Form.Field>
//                                 <RadioComp 
//                                     dataList={dataList}
//                                 />
//                             </Form.Field>
//                             <Form.Field>
//                                 <DateInput
//                                     name="date"
//                                     placeholder="Date"
//                                     // value={this.state.date}
//                                     iconPosition="left"
//                                     // onChange={this.handleChange}
//                                 />
//                                 {/* <DatesRangeInput
//                                     name="datesRange"
//                                     placeholder="From - To"
//                                     // value={this.state.datesRange}
//                                     iconPosition="left"
//                                     // onChange={this.handleChange}
//                                 /> */}
//                                 <TimeInput
//                                     name="dateTime"
//                                     placeholder="Date Time"
//                                     // value={this.state.dateTime}
//                                     iconPosition="left"
//                                     // onChange={this.handleChange}
//                                 />
//                             </Form.Field>
//                             <Form.Field>
//                                 <TextAreaComp />
//                             </Form.Field>
//                             <Button fluid type='submit'>Submit</Button>
//                         </Form>
//                     </FormWrapper>
                    
//                 </BodyRightWrapper>
                
//             </UpperWrapper>
//             <LowerWrapper>
//                 <CusHeader 
//                     as='h1'
//                     style={{
//                         marginBottom : 20
//                     }}
//                 >
//                     Our Services
//                 </CusHeader>
//                 <ServicesWrapper>
//                     <ServiceIcon 
//                         dataList={dataIconList}
//                         onClick={onClickService}
//                     />
//                 </ServicesWrapper>
//             </LowerWrapper>
//             <LowerWrapper>
//                 <CusHeader 
//                     as='h1'
//                     style={{
//                         marginBottom : 20
//                     }}
//                 >
//                     Why Us
//                 </CusHeader>
//                 <ServicesWrapper>
//                     {/* <ServiceIcon 
//                         dataList={dataIconList}
//                         onClick={onClickService}
//                     /> */}
//                 </ServicesWrapper>
                
//             </LowerWrapper>
//             <LowerWrapper>
//                 <ServicesWrapper>
//                     {/* <ServiceIcon 
//                         dataList={dataIconList}
//                         onClick={onClickService}
//                     /> */}
//                 </ServicesWrapper>
                
//             </LowerWrapper>
//         </MainWrapper>
//     )
// }

// export default Main

function App() {
    const [response, setResponse] = useState("");
    const [socket, setSocket] = useState()

    useEffect(() => {
        let sock = socketIOClient(ENDPOINT)
        setSocket(sock)
        sock.emit("notify_you","Hello")
        sock.on("chat_message", data => {
            console.log("Heljncjks",data)
            // setResponse(data);
        });
        sock.on("notify_me",function(data){
            console.log("Main data",data)
        })
    },[]);
    
    const notify = () => {
        axios.get(ENDPOINT+"api/v1/category/").then((res) => {
            console.log("Here is real data",res)
        })
    } 

    return (
      <div>
        It's <time dateTime={response}>{response}</time>
        <button onClick={notify}>Notify</button>
      </div>
    );
  }
  
  export default App;