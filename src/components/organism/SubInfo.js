import { StyleSheet, View, Text } from 'react-native';
import SubInfoBlock from '../molecules/SubInfoBlock';
export default function SubInfo({ days, handleLocation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.girdContainer}>
          <SubInfoBlock days={days} handleLocation={handleLocation} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '100%',
    height: '100%',
  },

  girdContainer: {
    flexDirection: 'row',
  },
});
