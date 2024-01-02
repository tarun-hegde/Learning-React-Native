import images from "./images";
import icons from "./icons";
import { COLORS, FONT, SIZES, SHADOWS } from "./theme";

export { images, icons, COLORS, FONT, SIZES, SHADOWS };
import {NearbyJobs,PopularJobs,ScreenHeaderBtn,Welcome}
 from '../components'

 const Home = () => {
    const router = useRouter();
    return (
      <View style={styles.container}>
         <ScreenHeaderBtn />
         <Welcome />
         <PopularJobs />
         <NearbyJobs />
      </View>
    );
     }