import { useEffect, useState } from "react";
import { MENU_API } from "../utils/Constants";

const useRestaurantMenu = (resId) => {
  console.log(resId, 'resid')
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = data.json();
    setResInfo(json.data);
    console.log(json , 'json')
  };
  return resInfo;
};

export default useRestaurantMenu;
