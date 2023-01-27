import React from "react"
import { View,Text, FlatList } from "react-native"
import repositories from "../Data/repositories"
import ItemRepositoris from "./ItemListRepositoris"

const ReposList=()=>{
    return(
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={()=><Text> </Text>}
            renderItem={({item})=>( <ItemRepositoris item={item}/>
            )}/>
    )
}

export default ReposList;