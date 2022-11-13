import {
  Box, Center, Heading, Text, Flex, Divider,
  Button,
  ButtonGroup,

  IconButton,
  Input,
  Stack
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
export const Footer = () => {
  return (
    <Box>
      <Box bg="#E5E5E5">
        <Center>
          <Box bg={"black"} color="white" p={5} mt='10' >
            <Flex gap={40}>
              <Box>
                <Heading as='h6' size='xs'>Find a Store</Heading>
                <Text fontSize='sm'> Choose Your Store</Text>
              </Box>
              <Box>
                <Heading as='h6' size='xs'>Live Beauty Help</Heading>
                <Text fontSize='sm'> Available</Text>
              </Box>
              <Box>
                <Heading as='h6' size='xs'>Get The App</Heading>
                <Text fontSize='sm'>Text "APP" to 36611</Text>
              </Box>
              <Box>
                <Heading as='h6' size='xs'>Get Sephora Text Alerts</Heading>
                <Text fontSize='sm'> Sign Up Now</Text>
              </Box>
              <Box>
                <Heading as='h6' size='xs'>Daily Shopper Credit Card Program</Heading>
                <Text fontSize='sm'> Want 25% off your shopping</Text>
              </Box>
            </Flex>
            <Divider borderColor="white" mt={5}
              orientation="horizontal" />
          </Box>

        </Center>

        <Stack direction="row" spacing="8" mt='10'  >
          <Stack spacing="2" minW="20" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="#F97316" >
              OUR POLICIES
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Covid-19 Precautions</Button>
              <Button variant="link">Our Promise</Button>
              <Button variant="link">Terms & Conditions</Button>
              <Button variant="link">Customs tariffs and fees</Button>
              <Button variant="link">Privacy Policy</Button>

            </Stack>
          </Stack>
          <Stack spacing="2" minW="20" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="#F97316">
              CORPORATE
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Sell With Us</Button>
              <Button variant="link">Our Blog</Button>
              <Button variant="link">Career Opportunities</Button>
              <Button variant="link">Sitemap</Button>

            </Stack>
          </Stack>

          <Stack spacing="2" minW="20" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="#F97316">
              HELP
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">How MeanBuy Works</Button>
              <Button variant="link">My Orders</Button>
              <Button variant="link">Exchanges, Returns and Refunds</Button>
              <Button variant="link">Contact Us</Button>
              <Button variant="link">FAQ</Button>

            </Stack>
          </Stack>
          <Stack spacing="2" minW="20" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="#F97316">
              SELL WITH US
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">General Information</Button>
              <Button variant="link">Signup</Button>
            </Stack>
          </Stack>
          <Stack spacing="4">
            <Stack
              spacing="4"
              direction={{
                base: 'column',
                sm: 'row',
              }}
              maxW={{
                lg: '360px',
              }}
            >
              <Input placeholder="Enter your email" type="email" w='200px' required />
              <Button variant="primary" bg='#EA580C' color='white' type="submit" flexShrink={0}>
                Subscribe
              </Button>
            </Stack>
            <Stack
          pt="8"
          pb="12"
          justify="space-between"
          direction={{
            base: 'column-reverse',
            md: 'row',
          }}
          align="center"
        >

          <ButtonGroup variant="ghost" justifyContent='center' >
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton as="a" href="#" aria-label="GitHub" icon={<FaInstagram fontSize="1.5rem" />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.5rem" />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaFacebook fontSize="1.5rem" />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaYoutube fontSize="1.5rem" />} />
            
          </ButtonGroup>
        </Stack>
          </Stack>


        </Stack>

        <Divider />
      
        <Stack>
          <Text mr='850' color='#F97316' fontWeight='bold' >Meanbuy Is Your One Stop Destination For Online Shopping</Text>
          <Text>Meanbuy is a comprehensive platform for you to choose how you shop, whether it is buying instantly, waiting to save or to pick up your order from the store after freezing it.

            Everyone will agree that it is not easy to go down to the market in massive traffic, driving through crowds, all striving for the same trendy clothing, expecting in line to try on the picked up items in the trial rooms, and finally deciding on the product you buy. Some people like to personally analyze the product before purchasing it in the store. Although some people do not like to shop online, others beg to differ by using the internet to do things. For all you internet enthusiasts who like online shopping,</Text>
        </Stack>
        <Stack>
          <Text mr='950' color='#F97316' fontWeight='bold' >Get The Best Of Your Online Shopping Experience</Text>
          <Text>Keeping mind the fact that everything is just a tap away in today's world, fashion and clothing have no escape from the cyberspace. Online shopping is made easier with various categories and filters that let you get the best result of what you're looking for. At Meanbuy.com we specialize in categorizing the required fields as per your convenience to provide you the best online shopping experience. Categories like Online shopping for kids, online shopping for men, online shopping for women, online shopping for accessories, etc. is curated to make this experience even more convenient. Find the Best Online Shopping in Hyderabad only at Meanbuy.</Text>
        </Stack>
        <Stack>
          <Text mr='990' color='#F97316' fontWeight='bold' >Meanbuy Let You choose At Your Convenience</Text>
          <Text>What if you belong to the former kind, where you like to buy the product from the shop after analyzing it personally? But don't want to miss out on a fantastic product in the process? We got your back! At Meanbuy.com, you can freeze the product and pick up from your neighboring store without the worry of missing the product. Another additional feature of this website is, you can wait and save on the products you like.</Text>
        </Stack>
      </Box>


    </Box>
  )
}