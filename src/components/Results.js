import React from 'react'
import {
  Card,
  CardContent,
} from 'material-ui/Card'
import Text from 'material-ui/Text'
import marked from 'marked'

export default ({
  results,
}) => (
  <div>
    {
      results.map((result) => (
        <Card key={result.id} style={{ marginTop: '14px' }}>
          <CardContent>
            <Text primary>{result.data.domain}</Text>
            <Text type="body1">
              <div dangerouslySetInnerHTML={{ __html: marked(result.data.selftext) }} />
            </Text>
          </CardContent>
        </Card>
      ))
    }
  </div>
)
