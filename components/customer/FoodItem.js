import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Divider } from "react-native-elements";
import axios from "axios";
import FilterScreen from "../../screens/FilterScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
const FoodItem = ({ navigation, route }) => {
  const [search, setSearch] = useState("");
  const [food, setFood] = useState([]);
  // const token = "9b16e1af13940bf86112340ce0ee3a88e2d5c145";

// *********************************************************
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (error) {
    console.log('Error getting token:', error);
  }
};
// ************************************************************




  const fetchFoodItem = async () => {
    const token = await getToken();

    try {
      const response = await axios.get(
        "https://wixstocle.pythonanywhere.com/api/food/",

        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      setFood(response.data);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  // ********************************************************************************

  const [cart, setCart] = useState([]);

  const addToCart = async (id) => {
    try {
      // console.log(token)
    const token = await getToken();
      
      const response = await axios.post(
        "https://wixstocle.pythonanywhere.com/api/cart/",
        { quantity: 1, food: id },
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setCart(response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  // ***************************************************************
  const [searchTerm, setSearchTerm] = useState([]);

  const fetchData = async (name) => {
    const token = await getToken();
    console.log(token)
    if (route.params?.paramKey1 === undefined || route.params?.paramKey2===undefined || route.params?.paramKey3===undefined) {
      console.log("if condition")
      const category = "";
      const location = "";
      const price = 10000;
      try {
        console.log(category);
        const response = axios.get(
          `https://wixstocle.pythonanywhere.com/api/search?name=${name}&category=${category}&price_low=0&price_high=${price}&location=${location}`,
          {
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setSearchTerm((await response).data);
        console.log((await response).data);
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      console.log("else condition")

      const category = route.params?.paramKey1;
      const location = route.params?.paramKey2;
      const price = route.params?.paramKey3;
      try {
        console.log(category);
        const response = axios.get(
          `https://wixstocle.pythonanywhere.com/api/search?name=${name}&category=${category}&price_low=0&price_high=${price}&location=${location}`,
          {
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setSearchTerm((await response).data);
        console.log((await response).data);
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };
  // ****************************************************************

  useEffect(() => {
    fetchData("");
  }, []);

  const IMAGE_URL =
    "https://wixstocle.pythonanywhere.com/media/food_images/Screenshot_943.png";
  return (
    <>
      <View style={styles.container}>
        <View style={{ marginTop: 50 }}>
          <TextInput
            onChangeText={(text) => {
              fetchData(text);
            }}
            placeholder="Search"
            style={{ height: "100%", width: "100%" }}
          />
        </View>
        {searchTerm?.map((product) => (
          <View style={styles.container}>
            <View style={{ flexDirection: "row", width: "90%" }}>
              <View>
                {/* <Image
                  style={styles.food_img}
                  source={{
                    uri: `https://wixstocle.pythonanywhere.com${product["food_image"].image}`,
                  }}
                /> */}
              </View>

              <View
                style={{ padding: 7, backgroundColor: "#000000", height: 120 }}
              ></View>
              <View
                style={{
                  backgroundColor: "#000000",
                  borderBottomRightRadius: 30,
                  borderTopRightRadius: 30,
                  width: "60%",
                  height: 120,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.location_header}>{product.name}</Text>
                  {/* <Text>{route.params.paramKey1}</Text> */}
                  <TouchableOpacity
                    onPress={() => addToCart(product.id)}
                    style={{ marginLeft: 10, marginTop: 10 }}
                  >
                    <View style={styles.middleicon}>
                      <Text
                        style={{
                          fontWeight: "500",
                          color: "black",
                          textAlign: "center",
                          fontSize: 22,
                          marginTop: -5,
                          
                        }}
                      >
                        +
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={styles.location_inner}
                    source={require("../../assets/location_white.png")}
                  />
                  <Text> </Text>
                  <View style={{}}>
                    <Text style={styles.location_footer}>
                      {product["restaurant"].area}
                    </Text>
                  </View>
                </View>
                <Text style={styles.amount}>Rs. {product.price}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  food_img: {
    height: 120,
    width: 150,
    // marginTop:6,
  },
  middleicon: {
    height: 25,
    width: 25,
    marginRight: 10,
    backgroundColor: "#D1F952",
    borderRadius: 50,
  },

  location_header: {
    fontSize: 22,
    fontWeight: "bold",
    flexDirection: "row",
    color: "#D1F952",
    marginTop: 3,
    // height:'10/0%'
  },
  amount: {
    fontWeight: "bold",
    color: "#F0F0F0",
    marginTop: 10,
    fontSize: 18,
  },
  location_footer: {
    color: "white",
    marginTop: 5,
    width: "100%",
  },
  location_inner: {
    marginTop: 5,
    height: 20,
    width: 20,
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
  },
  back: {
    height: 19,
    width: 19,
    transform: [{ rotate: "270deg" }],
    marginTop: 10,
  },
  // **************************************
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
  },
});

export default FoodItem;
