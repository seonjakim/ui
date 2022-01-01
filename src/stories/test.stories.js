// ref : https://www.youtube.com/watch?v=hf6Z8OZanec&ab_channel=PortEXE
import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '../index'

const stories = storiesOf('App Test', module)

stories.add('App', () => {
  return <Button>hello</Button>
})
