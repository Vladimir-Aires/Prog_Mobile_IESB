import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { Text, Button, Divider } from "react-native-paper";
import Slider from "../../components/Slider";
import { ScrollView } from "react-native-gesture-handler";
import CardSmartphones from "../../components/CardSmartphones";

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            {/* Carrossel improvisado com flatlist | Dados de tablets para teste */}
            <Slider category="laptops" />
            {/* Flatlist horizontal de produtos | Dados de smartphones para teste*/}
            <View
                style={{
                    marginTop: 50,
                    marginHorizontal: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 10,
                }}
            >
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                    Products
                </Text>
                
                <Button mode="contained" style={{ backgroundColor: "#FF0000", width: 120}}>
                    <Text style={{color: '#ffff'}}>See All</Text>
                </Button>
            </View>
            <CardSmartphones category="smartphones" />
            <Divider style={{ marginVertical: 10 }} />
            {/* FlatList horizontal de produtos em promoção | Dados de acessórios mobile para teste*/}
            <View
                style={{
                    marginHorizontal: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 10,
                }}
            >
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                    Promotion
                </Text>
                {/* <Text style={{fontSize: 16}}>See all</Text>  */}
                <Button mode="contained" style={{ backgroundColor: "#FF0000", width: 120 }}>
                    <Text style={{color: '#ffff'}}>See All</Text>
                </Button>
            </View>
            <CardSmartphones category="mobile-accessories" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({});
