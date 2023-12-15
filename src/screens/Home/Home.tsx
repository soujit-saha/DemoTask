import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFeedRequest} from '../../redux/reducer/DataReducer';
import {COLORS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import Loader from '../../utils/helpers/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const DataReducer = useSelector((i: any) => i.DataReducer);
  const [list, setList] = useState<Array<any>>([]);

  useMemo(() => {
    setList(DataReducer?.FeedResponse);
  }, [DataReducer]);

  useEffect(() => {
    dispatch(fetchFeedRequest({}));
  }, []);

  return (
    <SafeAreaView style={styles.maincon}>
      <Loader visible={DataReducer.status == 'Data/fetchFeedRequest'} />
      <View style={styles.headercon}>
        <Text style={styles.headertitle}>Home</Text>
      </View>

      <View
        style={{
          marginVertical: normalize(10),
        }}>
        <FlatList
          data={list}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <View style={{height: normalize(100)}} />}
          renderItem={({item, index}) => {
            return (
              <View style={styles.itemcontainer}>
                <Image source={{uri: item?.image}} style={styles.listIcon} />

                <View
                  style={{
                    width: Dimensions.get('window').width * 0.5,
                    marginLeft: normalize(10),
                  }}>
                  <Text numberOfLines={1} style={styles.itemtitle}>
                    {item?.title}
                  </Text>
                  <Text numberOfLines={3} style={styles.itemdes}>
                    {item?.description}
                  </Text>
                  <Text style={styles.itemdes}>
                    Price:{' '}
                    <Text
                      style={{
                        ...styles.itemdes,
                        color: '#6600cc',
                        fontWeight: '700',
                      }}>
                      ₹{Number(item?.price).toFixed(2)}
                    </Text>
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  maincon: {flex: 1, backgroundColor: COLORS.White},
  headercon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    paddingTop: normalize(10),
  },
  headertitle: {
    color: COLORS.Black,
    fontSize: normalize(24),
    fontFamily: 'cursive',
    fontWeight: '700',
  },

  itemcontainer: {
    width: Dimensions.get('window').width * 0.9,
    elevation: 10,
    shadowColor: COLORS.Primary,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0.9,
    borderRadius: normalize(10),
    padding: normalize(10),
    backgroundColor: COLORS.White,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: normalize(15),
  },
  itemtitle: {
    color: COLORS.Black,
    fontWeight: '700',
    fontFamily: 'arial',
    fontSize: normalize(14),
    textTransform: 'capitalize',
  },
  itemdes: {
    color: COLORS.Black,
    fontWeight: '500',
    fontFamily: 'arial',
    fontSize: normalize(12),
    marginTop: normalize(6),
  },
  btntxt: {
    color: COLORS.White,
    fontWeight: '500',
    fontSize: normalize(12),
  },
  listIcon: {
    height: normalize(90),
    width: normalize(80),
    resizeMode: 'contain',
  },
});
