import { Link, useLocation } from "react-router-dom";
import { tab } from "./tab.props";
import styled from "./tab.module.scss"

export const Tab = ({titleTab, pathTab}:tab) => {
    const location = useLocation()
    return (
        <li>
            <Link to={pathTab} className={location.pathname.slice(1) === pathTab ? styled.linkActive : styled.link}>
                {titleTab}
            </Link>
        </li>
    );
};

