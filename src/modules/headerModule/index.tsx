import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react';
import React from 'react';
import { ReactNode } from 'react';
import classes from './header.module.scss';

export const Header = (): ReactNode => {
    return (
        <Box role={'navigation'} width={'100%'}>
            <header className={classes.header}>
                <Flex minWidth="max-content" alignItems="center" gap="2">
                    <Box p="2">
                        <Heading size="md">Header</Heading>
                    </Box>
                    <Spacer />
                    <ButtonGroup gap="2">
                        <Button colorScheme="teal">Sign Up</Button>
                        <Button colorScheme="teal">Log in</Button>
                    </ButtonGroup>
                </Flex>
            </header>
        </Box>
    );
};
