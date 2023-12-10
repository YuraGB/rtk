import React, { memo, ReactNode } from 'react';
import { Button, Image } from '@chakra-ui/react';
import Pencil from '../../assets/pencil.svg';
import { CallbackFunc } from '../../useCanvasToolbar.ts';

type Props = {
    setPencilTool: CallbackFunc;
};
const PencilToolComponent = ({ setPencilTool }: Props): ReactNode => {
    return (
        <Button onClick={setPencilTool}>
            <Image srcSet={Pencil} loading={'lazy'} role={'button'} alt={'draw by pencil'} src={Pencil} width={30} />
        </Button>
    );
};

export default memo(PencilToolComponent);
