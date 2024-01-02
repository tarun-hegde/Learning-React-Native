import React from 'react'
import { View, Text, TextInput,TouchableOpacity
,Image,FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import {icons,images,SIZES,COLORS,FONTS} from '../../../constants'
const jobTypes = [  "Full-time",  "Part-time",  "Contractor"]
const Welcome = () => {
  const router = useRouter();
  const [activeJobType,setActiveJobType] = React.useState('Full-time')
  return (
    <View>
        <View style={styles.container}>

          <Text style={styles.userName}>Welcome Tarun</Text>
          <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
<TextInput style={styles.searchInput} value="" onChange={()=>{}}
placeholder="Search for jobs" 
/>
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
            <Image source={icons.search}  resizeMode='contain' style={styles.searchBtnImage}/>
          </TouchableOpacity>
        </View>
        <View style={styles.tabsContainer}>
          <Text style={styles.recentSearch}>Recent Search</Text>
        
            <View style={styles.recentSearchItem}>
            <FlatList
          data={jobTypes}
          renderItem={({item})=>(
              <TouchableOpacity style={styles.tab(activeJobType,item)} onPress={()=>{
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}>
              <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
              </TouchableOpacity>
          )}
          keyExtractor={item=>item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
          />
            </View>
        </View>
    </View>
  )
}

export default Welcome