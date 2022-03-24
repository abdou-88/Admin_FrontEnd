import * as React from 'react';
import { SVGProps } from 'react';
import { useTheme } from '@material-ui/core/styles';

const Logo = (props: SVGProps<SVGSVGElement>) => {
    const theme = useTheme();
    return (
      
        <img style={{ height: "50px" }} src={require("./GibAdslogo.png")}></img>
     
    );
};

export default Logo;
