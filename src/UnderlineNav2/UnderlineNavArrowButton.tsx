import React, {useContext} from 'react'
import {IconButton} from '../Button/IconButton'
import {ChevronLeftIcon, ChevronRightIcon} from '@primer/octicons-react'
import {getLeftArrowHiddenBtn, getRightArrowHiddenBtn, getLeftArrowVisibleBtn, getRightArrowVisibleBtn} from './styles'
import {OnScrollWithButtonEventType} from './types'
import {UnderlineNavContext} from './UnderlineNavContext'

const LeftArrowButton = ({
  show,
  onScrollWithButton
}: {
  show: boolean
  onScrollWithButton: OnScrollWithButtonEventType
}) => {
  const {theme} = useContext(UnderlineNavContext)
  return (
    <IconButton
      aria-label="Scroll Left"
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onScrollWithButton(e, -1)}
      icon={ChevronLeftIcon}
      sx={show ? getLeftArrowVisibleBtn(theme) : getLeftArrowHiddenBtn(theme)}
    />
  )
}

const RightArrowButton = ({
  show,
  onScrollWithButton
}: {
  show: boolean
  onScrollWithButton: OnScrollWithButtonEventType
}) => {
  const {theme} = useContext(UnderlineNavContext)
  return (
    <IconButton
      aria-label="Scroll Right"
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onScrollWithButton(e, 1)}
      icon={ChevronRightIcon}
      sx={show ? getRightArrowVisibleBtn(theme) : getRightArrowHiddenBtn(theme)}
    />
  )
}

export {LeftArrowButton, RightArrowButton}