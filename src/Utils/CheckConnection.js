import NetInfo from "@react-native-community/netinfo";
export const CheckConnection = async () => {
  const check = await NetInfo.isConnected.fetch();
  if (check) return true;
  else return false;
};
