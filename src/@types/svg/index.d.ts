declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from 'reaact-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
}