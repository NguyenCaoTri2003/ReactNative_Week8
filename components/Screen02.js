import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'

const DATA = [
  {
    id: '1',
    img:  require('../assets/bifour_-removebg-preview.png'),
    title: 'Pinarello',
    price: '1800'
  },
  {
    id: '2',
    img:  require('../assets/bione-removebg-preview.png'),
    title: 'Pina Mountai',
    price: '1700'
  },
  {
    id: '3',
    img:  require('../assets/bithree_removebg-preview.png'),
    title: 'Pina Bike',
    price: '1500'
  },
  {
    id: '4',
    img:  require('../assets/bitwo-removebg-preview.png'),
    title: 'Pinarello',
    price: '1900'
  },
  {
    id: '5',
    img:  require('../assets/bithree_removebg-preview.png'),
    title: 'Pinarello',
    price: '2700'
  },
  {
    id: '6',
    img:  require('../assets/bione-removebg-preview.png'),
    title: 'Pinarello',
    price: '1350'
  },
];



const SanPham = ({item}) => {
  return(
  <TouchableOpacity style={styles.sanPham} >
    <TouchableOpacity style={styles.iconFavorite}>
      <Icon name="heart" size={20} color='#54545426' />
    </TouchableOpacity>
    <Image source={item.img} style={styles.imgSP}/>
    <Text style={styles.titleSP}>{item.title}</Text>
    <View style={styles.price}>
      <Icon name= 'dollar' color= '#F7BA83' size={15}/>
      <Text style={styles.textPrice}>{item.price}</Text>
    </View>
  </TouchableOpacity>
  )
}


export default function Screen02({ navigation }) {

  const renderItem = ({item}) => {
    
    return (
      <SanPham item={item}/>
    );
  };

  const [isLoved, setIsLoved] = useState(false); // Trạng thái để quản lý màu sắc

  const toggleHeart = () => {
    setIsLoved(prev => !prev); // Chuyển đổi trạng thái
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textContent}>The world’s Best Bike</Text>
        <View style={styles.menu}>
          <TouchableOpacity style={[styles.menuAll, styles.menuSelect]}>
            <Text style={[styles.textMenuAll, styles.textMenuSelect]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuAll}>
            <Text style={styles.textMenuAll}>Roadbike</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuAll}>
            <Text style={styles.textMenuAll}>Mountain</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    
  },
  header: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-around'
  },
  content: {
    flex: 5,
    paddingHorizontal: 5,
    alignItems: 'center'
  },
  textContent:{
    fontSize: 22,
    fontWeight: 700,
    color: '#E94141',
    
  },
  menu:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, 
  menuAll:{
    width: 80,
    height: 28,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(233, 65, 65, 0.23)',
    justifyContent: 'center'
  },
  textMenuAll:{
    fontSize: 13,
    textAlign: 'center',
    color: '#BEB6B6'
  },
  menuSelect:{
    borderColor: 'rgba(233, 65, 65, 0.53)',
  },
  textMenuSelect:{
    color: '#E94141'
  },
  sanPham:{
    width: 142,
    height: 183,
    backgroundColor: '#F7BA8326',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderRadius: 10,
    position: 'relative',
    marginBottom: 15,
    marginLeft: 10
  }, 
  imgSP:{
    width: 105,
    height: 100
  },
  titleSP:{
    color: '#00000099',
    fontSize: 15
  },
  price:{
    flexDirection: 'row',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textPrice:{
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 2
  },
  iconFavorite:{
    position: 'absolute',
    top: 10,
    left: 10

  },
  
});
