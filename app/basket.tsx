import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import useBasketStore from '@/store/basketStore';
import Colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import ConfettiCannon from 'react-native-confetti-cannon';
import { Link } from 'expo-router';
import SwipeableRow from '@/Components/SwipeableRow';

const Basket = () => {
  const { products, total, clearCart, reduceProduct } = useBasketStore();
  const [order, setOrder] = useState(false);

  const FEES = {
    service: 5000,
    delivery: 15000,
  };

  const startCheckout = () => {
    setOrder(true);
    clearCart();
  };

  return (
    <>
      {order && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fallSpeed={2500} fadeOut={true} autoStart={true} />}
      {order && (
        <View style={{ marginTop: '50%', padding: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Đặt hàng thành công!!!</Text>
          <Link href={'/'} asChild>
            <TouchableOpacity style={styles.orderBtn}>
              <Text style={styles.footerText}>Tiếp tục đặt hàng</Text>
            </TouchableOpacity>
          </Link>
        </View>
      )}
      {!order && (
        <>
          <FlatList
            data={products}
            ListHeaderComponent={<Text style={styles.section}>Sản phẩm</Text>}
            ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: Colors.grey }} />}
            renderItem={({ item }) => (
              <SwipeableRow onDelete={() => reduceProduct(item)}>
                <View style={styles.row}>
                  <Text style={{ color: Colors.primary, fontSize: 18 }}>{item.quantity}x</Text>
                  <Text style={{ flex: 1, fontSize: 18 }}>{item.name}</Text>
                  <Text style={{ fontSize: 18 }}>đ{item.price * item.quantity}</Text>
                </View>
              </SwipeableRow>
            )}
            ListFooterComponent={
              <View>
                <View style={{ height: 1, backgroundColor: Colors.grey }}></View>
                <View style={styles.totalRow}>
                  <Text style={styles.total}>Tổng tiền hàng</Text>
                  <Text style={{ fontSize: 18 }}>đ{total}</Text>
                </View>

                <View style={styles.totalRow}>
                  <Text style={styles.total}>Phí phục vụ</Text>
                  <Text style={{ fontSize: 18 }}>đ{FEES.service}</Text>
                </View>

                <View style={styles.totalRow}>
                  <Text style={styles.total}>Phí vận chuyển</Text>
                  <Text style={{ fontSize: 18 }}>đ{FEES.delivery}</Text>
                </View>

                <View style={styles.totalRow}>
                  <Text style={styles.total}>Tổng thanh toán</Text>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>đ{(total + FEES.service + FEES.delivery)}</Text>
                </View>
              </View>
            }
          />

          <View style={styles.footer}>
            <SafeAreaView edges={['bottom']} style={{ backgroundColor: '#fff' }}>
              <TouchableOpacity style={styles.fullButton} onPress={startCheckout}>
                <Text style={styles.footerText}>Đặt hàng</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    gap: 20,
    alignItems: 'center',
  },
  section: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  total: {
    fontSize: 18,
    color: Colors.medium,
  },
  footer: {
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingTop: 20,
  },
  fullButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 50,
  },
  footerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orderBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: 250,
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default Basket;
