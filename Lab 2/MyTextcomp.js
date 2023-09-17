import { View,Text } from "react-native";
import  {StyleSheet} from "react-native";

const MyTextComp = (props) => {
    return (<View>
    <Text style={StyleSheet.create(
        {
            fontSize: 30,
            color: '#A0522D'
        }
    )}> {props.noidungText}
    </Text>
        {/* <Text>
            {props.noidungText}
        </Text> */}
    </View>);
}
export default MyTextComp;
