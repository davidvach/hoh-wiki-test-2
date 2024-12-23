import { useLocation } from "react-router-dom";

const useSelectedTab = () => {
    let location = useLocation();
    return "/" + location.pathname.split("/")[2];
}

export default useSelectedTab;