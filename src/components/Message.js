import React from 'react'
import {
  Card,
  CardContent,
} from 'material-ui/Card'
import Text from 'material-ui/Text'


export default ({
  children,
}) => (
  <Card style={{ marginTop: '14px' }}>
    <CardContent>
      <Text type="subheading" align="center">
        { children }
      </Text>
    </CardContent>
  </Card>
)
