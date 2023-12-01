import {PropsWithChildren, useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function Providers(props:PropsWithChildren){
    const location = useLocation();

    useEffect(() => {
        require('preline/preline');
    }, []);

    useEffect(() => {
        // @ts-ignore
        HSStaticMethods.autoInit();
    }, [location.pathname]);
    return <>{props.children}</>
}