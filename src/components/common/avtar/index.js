import React from 'react'
import { Image } from 'semantic-ui-react'
import usrImage from '../../../assets/images/user.png'

const ImageAvatar = (props) => (
  <div>
        {
            props.left  ? 
                <span>{props.username} </span>
                :
                null
        }
        <Image src={usrImage} avatar />
        {
            props.right  ? 
                <span>{props.username} </span>
                :
                null
        }
  </div>
)

export default ImageAvatar