import { propType } from "../../interfaces/container";

const Containers = ({children}:propType) => {
    return (
        <div className="container">
           {children}
        </div>
    );
};

export default Containers;