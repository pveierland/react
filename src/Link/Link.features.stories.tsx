import Link from '../Link'
import {Meta} from '@storybook/react'
import React from 'react'
import {ComponentProps} from '../utils/types'

export default {
  title: 'Components/Link/Features',
  component: Link,
} as Meta<ComponentProps<typeof Link>>

export const Muted = () => (
  <Link href="#" muted>
    Link
  </Link>
)

export const Underline = () => (
  <Link href="#" underline>
    Link
  </Link>
)