import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Bookings', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Attendance', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
]

const Tabs = () => <Tab panes={panes} />

export default Tabs