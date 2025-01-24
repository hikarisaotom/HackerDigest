import { StyleSheet } from 'react-native';

const newsItemStyle = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 5, //!@# change to default
    },
    descriptionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },

});

export default newsItemStyle;
