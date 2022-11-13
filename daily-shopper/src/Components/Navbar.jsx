import React from 'react'
import {
  HStack, Input, Image, InputGroup, InputLeftElement,
  Flex, Spacer, ButtonGroup, Button, Menu,
  MenuButton,
  MenuList,
  MenuItem, Text, Box
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import data from "../db.json";
import { useContext } from "react";
import { AppContext } from "../AuthContext/AuthcontextProvider";
import { getProductRequest } from "../AuthContext/ActionCreator";

function Navbar() {
  const { state, dispatch } = useContext(AppContext);

  const handleclick = (da) => {
    da === "hair"
      ? dispatch(getProductRequest(data.hair))
      : dispatch(getProductRequest(data.makeup));
  };

  return (
    <div>

      <Flex bg='black' w='100%' p={4} color='white' justifyContent='center' >
        Up to Rs.500 Off on Prepaid Purchases - Use Coupon <span style={{ color: 'orange' }} >"PREPAID"</span>
      </Flex>
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
              <MenuItem>MEN</MenuItem>
              <MenuItem>WOMEN</MenuItem>
              <MenuItem>ELECTRONICS</MenuItem>
              <MenuItem>ESSENTIALS</MenuItem>
              <MenuItem>FLASH SALE</MenuItem>
              <MenuItem>HPME AND LIVING</MenuItem>
              <MenuItem>KIDS AND MOM</MenuItem>
            </MenuList>
          </HStack>
        </Menu>
        {/* <Text>
          FlashSale
        </Text> */}
        <Box>
          <Link to="/products">
            {" "}
            <Text
              // fontSize="lg"

              onClick={() => handleclick("makeup")}
            >
              {" "}
              FlashSale
            </Text>
          </Link>
        </Box>
        <Box>
          <Link to="/products">
            {" "}
            <Text
              onClick={() => handleclick("hair")}
            // fontSize="lg"

            >
              {" "}
              Best Deal
            </Text>
          </Link>
        </Box>
        {/* <Text >
          Best Deal
        </Text> */}
        <Text>Shop by Brand</Text>
        <Text>Trending</Text>
        <p justifyContent='center'>New Arrivals</p>
      </HStack>
    </div>
  )
}

export default Navbar