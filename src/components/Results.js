import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from 'material-ui/Card'
import Text from 'material-ui/Text'
import Button from 'material-ui/Button'
import Avatar from 'material-ui/Avatar';
import marked from 'marked'

const openThread = (url) => {
  chrome.tabs.create({ url })
}

export default ({
  results,
}) => (
  <div>
    {
      results.map(({ data: { id, domain, selftext, url, title } }) => (
        <Card key={id} style={{ marginTop: '14px' }}>
          <CardContent>
            <CardHeader
              avatar={<Avatar>{title[0]}</Avatar>}
              title={title}
              subhead={domain}
            />
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
