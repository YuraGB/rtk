import { ReactNode } from "react";
import {Button} from "@chakra-ui/react";

const HomePage = (): ReactNode => {

  return (<><h1>HomePage</h1>
    <Button aria-label={'button'} role={'button'} colorScheme={'blue'} variant={'solid'}>Button 1</Button></>)
}

export default HomePage
