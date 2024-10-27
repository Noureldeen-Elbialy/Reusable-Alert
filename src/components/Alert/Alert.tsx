// style
import { ReactNode } from "react";
import "./Alert.scss";
// Icons
import { X } from "lucide-react";
import { AlertTypes } from "../../types";
// interface
interface IAlert{
    type: AlertTypes;
    title: string;
    icon: ReactNode;
    description?: string;
    children?: ReactNode;
}
// component
const Alert = ({type,title,icon,children,description}:IAlert) => {
    return (<>
        <div className={type}>
            <div className="alert-head">
                <div className="title">
                    <span>{icon}</span>
                    <h3>{title}</h3>
                </div>
                <div className="colse">
                    <span><X/></span>
                </div>
            </div>
            {children ? children : <p>{description}</p>}
        </div>
    </>)
}
export default Alert;
