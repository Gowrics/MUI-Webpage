import { Button, ButtonGroup  } from '@mui/material'

import React from 'react'

const ButtonGroups = () => {
  return (
    <div>
<ButtonGroup variant="outlined" aria-label="Basic button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup><br></br><br></br>
<ButtonGroup variant="text" aria-label="Basic button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup variant="text" aria-label="Basic button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<br></br><br></br>
<ButtonGroup orientation='vertical' variant='contained' aria-label="Vertical button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<br></br>

    </div>
  )
}

export default ButtonGroups