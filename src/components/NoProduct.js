import React from 'react'
import {
  Card,
  CardContent,
} from 'material-ui/Card'
import Text from 'material-ui/Text'


export default () => (
  <Card style={{ marginTop: '14px' }}>
    <CardContent>
      <Text type="subheading" align="center">
        You must be on an Amazon product page to use this extension.
      </Text>
    </CardContent>
  </Card>
)
