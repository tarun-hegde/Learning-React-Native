import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync().catch(() => {

});
const Layout=()=>{
    const [isLoaded]=useFonts({
    DMBold:require("../assets/fonts/DMSans-Bold.ttf"),
    DMRegular:require("../assets/fonts/DMSans-Regular.ttf"),
    DMMedium:require("../assets/fonts/DMSans-Medium.ttf"),
    });
    const onLayoutRootView = useCallback(async () => {
        if (isLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [isLoaded]);
      if (!isLoaded) {
        return null;
      }
    return <Stack onLayout={onLayoutRootView}/>
}
export default Layout;