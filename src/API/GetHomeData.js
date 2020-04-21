// import { HOME_ROUTE } from "../Values/Strings";
import AxiosConfigue from "../API/AxiosConfigue";
export const GetHomeData = async () => {
  const resHomeRoute = await AxiosConfigue("/home", { timeout: 10000 })
    .then(res => res.data)
    .catch(e => e);
  return resHomeRoute;
};
