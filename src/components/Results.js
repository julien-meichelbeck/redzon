import React from 'react'
import {
  Card,
  CardContent,
  CardActions,
} from 'material-ui/Card'
import Text from 'material-ui/Text'
import Button from 'material-ui/Button'
import marked from 'marked'

const openThread = (url) => {
  chrome.tabs.create({ url })
}

export default ({
  results,
}) => (
  <div>
    {
      console.log(results) ||
      results.map(({ data: { id, domain, selftext, url } }) => (
        <Card key={id} style={{ marginTop: '14px' }}>
          <CardContent>
            <Text>{domain}</Text>
            <Text type="body1">
              <div dangerouslySetInnerHTML={{ __html: marked(selftext) }} />
            </Text>
          </CardContent>
          <CardActions>
            <Button compact accent onClick={() => openThread(url)}>Open</Button>
          </CardActions>
        </Card>
      ))
    }
  </div>
)
