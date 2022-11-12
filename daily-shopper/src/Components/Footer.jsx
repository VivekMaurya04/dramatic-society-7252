import {
  Box, Center, Heading, Text, Flex, Divider,
  Button,
  ButtonGroup,

  IconButton,
  Input,
  Stack
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
export const Footer = () => {
  return (
    <Box>
      <Box bg={"white"}>
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

        <Stack direction="row" spacing="8" mt='10'>
          <Stack spacing="2" minW="20" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Product
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">How it works</Button>
              <Button variant="link">Pricing</Button>
              <Button variant="link">Use Cases</Button>
            </Stack>
          </Stack>
          <Stack spacing="2" minW="20" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Legal
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Privacy</Button>
              <Button variant="link">Terms</Button>
              <Button variant="link">License</Button>
            </Stack>
          </Stack>

          <Stack spacing="2" minW="20" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Product
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">How it works</Button>
              <Button variant="link">Pricing</Button>
              <Button variant="link">Use Cases</Button>
            </Stack>
          </Stack>
          <Stack spacing="2" minW="20" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Product
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">How it works</Button>
              <Button variant="link">Pricing</Button>
              <Button variant="link">Use Cases</Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing="4">
          <Text fontSize="sm" fontWeight="semibold" color="subtle">
            Stay up to date
          </Text>
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
        </Stack>


        <Divider />
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

          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
          </ButtonGroup>
        </Stack>

      </Box>
    </Box>
  )
}