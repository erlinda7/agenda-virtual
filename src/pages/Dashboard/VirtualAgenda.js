import React from "react";
import NavBarVirtual from "./NavBarVirtual";
import ContainerVirtual from "./ContainerVirtual";

class Page extends React.Component {
    render() {
        console.log('props virtual', this.props);
        
        return (
            <div>
                <NavBarVirtual />
                <ContainerVirtual />
            </div>
        )
    }
}

export default Page;