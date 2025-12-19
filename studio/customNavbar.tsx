import type {NavbarProps} from 'sanity'
import {Flex, Box, Button} from '@sanity/ui'
import {Home} from 'lucide-react'

export const CustomNavbar = (props: NavbarProps) => {
  const siteUrl = 'http://localhost:3000/'

  return (
    <Flex paddingX={3} align="center" gap={2}>
      <Button
        as="a"
        href={siteUrl}
        target="_blank"
        rel="noreferrer"
        mode="bleed"
        padding={2}
        radius={2}
        icon={Home}
        aria-label="Ir para a home do site"
      />

      <Box flex={1}>{props.renderDefault(props)}</Box>
    </Flex>
  )
}
