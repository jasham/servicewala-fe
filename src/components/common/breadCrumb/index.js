import React from 'react'
import { Breadcrumb, Divider } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
// const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

const BreadCrumb = (props) => (
  <>
      <React.Fragment key={props.size}>
        <Breadcrumb size={props.size}>
          <Breadcrumb.Section onClick={() => props.history.push("/services")} style={{color:"#FFFFFF"}} link>{props.path1}</Breadcrumb.Section>
          <Breadcrumb.Divider style={{color:"#FFFFFF"}} icon='right chevron' />
          <Breadcrumb.Section style={{color:"#FFFFFF"}} link>{props.path2}</Breadcrumb.Section>
        </Breadcrumb>
        <Divider hidden />
      </React.Fragment>
  </>
)

export default withRouter(BreadCrumb)