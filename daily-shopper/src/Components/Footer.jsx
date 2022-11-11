import { Box,
     
      Text, 
      
       Divider,
        Stack, 
        Input, 
        Button, 
        ButtonGroup, 
        Container, 
        IconButton} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
export const Footer = () => {
    return (
        <>
            <Box bg={"white"}>
                <Container as="footer" role="contentinfo">
                    <Stack
                        spacing="8"
                        direction={{
                            base: 'column',
                            md: 'row',
                        }}
                        justify="space-between"
                        py={{
                            base: '12',
                            md: '16',
                        }}
                    >
                    
                        <Stack
                            direction={{
                                base: 'column-reverse',
                                md: 'column',
                                lg: 'row',
                            }}
                            spacing={{
                                base: '12',
                                md: '8',
                            }}
                        >
                            <Stack direction="row" spacing="8">
                                <Stack spacing="4" minW="36" flex="1">
                                    <Text fontSize="sm" fontWeight="semibold" color="subtle">
                                        Product
                                    </Text>
                                    <Stack spacing="3" shouldWrapChildren>
                                        <Button variant="link">How it works</Button>
                                        <Button variant="link">Pricing</Button>
                                        <Button variant="link">Use Cases</Button>
                                    </Stack>
                                </Stack>
                                <Stack spacing="4" minW="36" flex="1">
                                    <Text fontSize="sm" fontWeight="semibold" color="subtle">
                                        Legal
                                    </Text>
                                    <Stack spacing="3" shouldWrapChildren>
                                        <Button variant="link">Privacy</Button>
                                        <Button variant="link">Terms</Button>
                                        <Button variant="link">License</Button>
                                    </Stack>
                                </Stack>
                                <Stack spacing="4" minW="36" flex="1">
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
                                    <Button variant="primary" type="submit" flexShrink={0} bg='orange' color='white' >
                                        Subscribe
                                    </Button>
                                </Stack>
                            </Stack>
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
                </Container>


            </Box>
        </>
    )
}