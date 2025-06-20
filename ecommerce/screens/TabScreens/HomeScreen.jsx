import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import Slider from "../../components/Slider";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
   

    return (
        <View style={styles.container}>
            {/* Carrossel improvisado com flatlist | Dados de tablets para teste */}
            <Slider category="laptops"/>
            {/* Flatlist horizontal de produtos | Dados de smartphones para teste*/}
           

            {/* FlatList horizontal de produtos em promoção | Dados de acessórios mobile para teste*/}
            
        </View>
    );
}

const styles = StyleSheet.create({

});
