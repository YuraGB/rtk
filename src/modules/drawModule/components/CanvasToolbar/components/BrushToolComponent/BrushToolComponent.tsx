import React, { memo, ReactNode } from 'react';
import { Button, Image } from '@chakra-ui/react';
import { CallbackFunc } from '../../useCanvasToolbar.ts';
import Brush from '../../assets/brush.svg';
type Props = {
    setBrushTool?: CallbackFunc;
};
const BrushToolComponent = ({ setBrushTool = () => {} }: Props): ReactNode => {
    return (
        <Button>
            <Image
                srcSet={Brush}
                loading={'lazy'}
                role={'button'}
                alt={'draw by brush'}
                src={Brush}
                width={42}
                onClick={setBrushTool}
            />
        </Button>
    );
};

export default memo(BrushToolComponent);
