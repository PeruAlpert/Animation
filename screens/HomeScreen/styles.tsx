import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";

const styles = StyleSheet.create({
    container:{flex:1, backgroundColor:'#fff'},
    adsContainer:{width:Layout.width*.9,alignSelf:'center',marginTop:20,gap:20},
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginVertical: 10,
      },
      hackerTextStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00FF00', // Bright green for hacker text
        // Add any other text styling you want here
      },
});
export default styles;