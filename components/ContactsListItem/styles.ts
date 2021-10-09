import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    avatar:{
        width:60,
        height:60,
        backgroundColor: 'green',
        marginRight:10,
        borderRadius:50
    },
    container:{
        flexDirection:'row',
        width: '100%',
        justifyContent: 'space-between',
        padding:10,
        flex:1
    },
    lefContainer: {
        flexDirection: 'row'
    },
    username:{
        fontWeight: 'bold',
        fontSize:16
    },
    midContainer:{
        justifyContent: 'space-around'
    },
})

export default styles