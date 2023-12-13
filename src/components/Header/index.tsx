import React from 'react'
import { HeaderProps } from '../../interfaces/header'
import { Box, EmptyBox, FlexBox } from './styles'

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <FlexBox>
      <EmptyBox />
      <Box>{title}</Box>
    </FlexBox>
  )
}

export default Header