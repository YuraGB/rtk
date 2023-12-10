import React, { memo, ReactNode } from 'react';
import { Button, Image } from '@chakra-ui/react';
import { CallbackFunc } from '../../useCanvasToolbar.ts';
import Rect from '../../assets/rect.svg';

type Props = {
    setRectTool?: CallbackFunc;
};
const RectToolComponent = ({ setRectTool = () => {} }: Props): ReactNode => {
    return (
        <Button onClick={setRectTool}>
            <Image srcSet={Rect} loading={'lazy'} role={'button'} alt={'draw Rect'} src={Rect} width={42} />
        </Button>
    );
};

export default memo(RectToolComponent);
