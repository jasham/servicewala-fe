import React from 'react'
import styled from 'styled-components'
import { Radio } from 'semantic-ui-react'

const RadioWrapper = styled.div``

const RadioSubWrapper = styled.span`
    margin-right : 10px;
`
const RadioComp = (props) => {
    return(
        <RadioWrapper>
            {
                props.dataList.map((data) => {
                    return(
                        <RadioSubWrapper>
                            <Radio 
                                label={data.label}
                                name='radioGroup'
                                value={data.value}
                                checked={data.checked}
                                onChange={props.radioChange}
                            />
                        </RadioSubWrapper>            
                    )
                })
            }
        </RadioWrapper>
    )
}

export default RadioComp

