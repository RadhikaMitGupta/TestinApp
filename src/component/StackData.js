import React, { useState,useEffect }  from "react";
import { Text, View,StyleSheet,ActivityIndicator, TouchableOpacity, Linking } from "react-native";
import { FlatList } from "react-native-gesture-handler";
const StackData=({heading})=>{
   const [stackData,setStackData]=useState([])
   const [loading, setLoading] = useState(true);
   const [offset, setOffset] = useState(1);
  console.log("stackData============",stackData)
    useEffect(()=>{
        fetchingData()
    },[])

    
    
    const fetchingData=async()=>{
        setLoading(true)
         fetch('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow').then(response => response.json())
        .then(responseJson => {
            console.log("hello g",responseJson)
         responseJson = responseJson.items.slice((offset*3),((offset+1)*3)-1)
          console.log("offset Load : ",offset);
          console.log(responseJson);
            setOffset(offset+1)
              setStackData([...stackData, ...responseJson])
              setLoading(false)
            
          })
          .catch(error => {
            console.error(error);
          });
       // var data = await response.json();
       // setStackData(data?.items)
    }
    let no=0
 const renderItem=(item)=>{
    no+=1
    return(
        <View style={{padding:20,backgroundColor:'#FFFFFF',marginVertical:10,marginHorizontal:12,borderRadius:10,shadowOpacity:0.02}}>
            <TouchableOpacity onPress={()=>Linking.openURL(item?.item?.link)}>
        <Text style={{fontSize:20,color:"blue"}}>Q {no}. <Text  style={{fontSize:18, color:"black",opacity:0.8,textDecorationLine:"underline",textDecorationColor:"blue"}}>{item?.item?.title} ? </Text> </Text>
        </TouchableOpacity>
      </View>
    )
 }

 const  renderFooter =() =>{
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={fetchingData}
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Loading...</Text>
          {loading ? (
            <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }

    return(
        <View style={styles.container}>
            <View style={styles.headingView}>
            <Text style={styles.textStyle}>{heading}</Text>
            </View>
            <FlatList 
            data={stackData}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={renderItem}
           // pagingEnabled  
           onEndReached={fetchingData}
           onEndReachedThreshold ={0.1}
          ListFooterComponent={ renderFooter}
            />
            
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        flex:1
    },
    headingView:{
        height:"8%",
        width:"100%",
        backgroundColor:"#7895CB",
        marginTop:"13%",
        justifyContent:"center",
        shadowOpacity:0.1
        
    },
    textStyle:{
        fontWeight:"700",
        textAlign:"center",
        color:"#FFFFFF",
        fontSize:20,
        
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius:20
      },
      loadMoreBtn: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnText: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
      },
})
export default StackData