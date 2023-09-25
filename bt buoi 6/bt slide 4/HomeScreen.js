import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {},
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

var i = 0;

const DATA_LISTNV = [
  { name: "Devin", sdt: "098762888" },
  { name: "Dan", sdt: "088299289" },
  // { name: "Dominic", sdt: "090989900" },
  // { name: "Jackson", sdt: "088990088" },
  // { name: "James", sdt: "098779989" },
  // { name: "Joel", sdt: "098787899" },
  // { name: "John", sdt: "078997899" },
];

const HomeScreen = ({ navigation, route }) => {
  const listNV = DATA_LISTNV;
  const [listCM, setListCM] = useState([]);
  // const route = useRoute();

  useEffect(() => {

    const itemCM = {
      ten1: route.params?.ten1,
      tuoi1: route.params?.tuoi1,
      mssv1: route.params?.mssv1,
    };
    console.log(
      "ten1 " + route.params?.ten1,
      "tuoi1:" + route.params?.tuoi1,
      "mssv1" + route.params?.mssv1
    );
    if (itemCM!=null&&itemCM.ten1 != null || itemCM.tuoi1 != null || itemCM.mssv1 != null){
      itemCM.ma = listCM.length;
      setListCM([...listCM, itemCM]);
    }
  }, [route.params]);

  console.log("rerender " + ++i);

  const [rerender, setRerender] = useState(true);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          style={{ height: 200 }}
          data={listNV}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                alert(`${item.name} - ${item.sdt}`);
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "green",
                }}
              >
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.item}>{item.sdt}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <View
          style={{
            flexDirection: "row",

            width: "100%",
            alignItems: "center",
          }}
        >
          <Button
            title="Add"
            onPress={() => {
              listNV.push({ name: "Long", sdt: "0987555889" });

              setRerender(!rerender);
            }}
          />

          <Button
            title="Delete"
            onPress={() => {
              listNV.splice(0, 1);

              setRerender(!rerender);
            }}
          />
        </View>

        <Button
          title="Chuyển màn hình"
          onPress={() => {
            navigation.navigate("Profile", {
              name: "Long",
              tuoi: 20,
              mssv: "PH11131",
            });
          }}
        />

        <SafeAreaView>
          <View>
            <FlatList
              style={{ height: 400,marginTop:20 }}
              data={listCM}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    alert(`${item.ten1} - ${item.tuoi1}- ${item.mssv1}`);
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "center",
                    }}
                  >
                    <Text style={styles.item}>{item.ten1}</Text>
                    <Text style={styles.item}>{item.tuoi1}</Text>
                    <Text style={styles.item}>{item.mssv1}</Text>
                    <Text style={styles.item}>{item.ma}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
