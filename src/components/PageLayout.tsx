import {PropsWithChildren} from "react";
import Header from "./header";
import Footer from "./footer";

export default function PageLayout(props: PropsWithChildren) {
    return <>
        <main id="content" role="main" className={"w-full"} style={{contain:"paint"}}>
            <div className=""><Header/>{props.children}
            </div>
        </main>
        <Footer/></>


}