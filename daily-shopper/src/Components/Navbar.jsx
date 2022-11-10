import React from 'react'
import {
  HStack, Input, Image, InputGroup, InputLeftElement,
  Flex, Spacer, ButtonGroup, Button, Menu,
  MenuButton,
  MenuList,
  MenuItem, Box
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'


function Navbar() {
  return (
    <div>
      <Box bg='black' w='100%' p={4} color='white' justifyContent='center' >
      Up to Rs.500 Off on Prepaid Purchases - Use Coupon <span style={{color: 'orange'}} >"PREPAID"</span>
</Box>
      <Flex minWidth='max-content' alignItems='center' gap='2'>

        <Image src='https://i.postimg.cc/8PRPLB7m/daily-shopper.png' alt='logo' w='10%' h='auto' />
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon color='gray.300' />}
          />
          <Input type='tel' placeholder='Search' w='60%' />
        </InputGroup>
        <Spacer />
        <ButtonGroup gap='2' marginRight='30px'>
          <Button border='none' bg='white' _hover={{ bg: 'white' }}>WELCOME GUEST</Button>
          <Button  >Log in/Sign Up</Button>
        </ButtonGroup>
      </Flex>
      <HStack spacing='30px' style={{ justifyContent: "center" }}>
        <Menu>
          <MenuButton
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px solid white'
            _hover={{ bg: 'white' }}
          >
            Categories
          </MenuButton>
          <HStack >
          <MenuList>
            <MenuItem>New File</MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open...</MenuItem>
            <MenuItem>Save File</MenuItem>
          </MenuList>
          </HStack>
        </Menu>
        <p w='40px' h='40px' bg='tomato'>
          FlashSale
        </p>
        <p w='40px' h='40px' bg='pink.100'>
          Best Deal
        </p>
        <p>Shop by Brand</p>
        <p>Trending</p>
        <p justifyContent='center'>New Arrivals</p>
      </HStack>
    </div>
  )
}

export default Navbar