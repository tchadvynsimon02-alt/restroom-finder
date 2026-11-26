import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const RESTROOMS = [
  { id: '1', name: 'Central Park Restroom', address: 'Near 72nd St & 5th Ave', distance: '0.2 mi', rating: '4.8', open: true, accessible: true },
  { id: '2', name: 'Bryant Park Facilities', address: '40th St & 6th Ave', distance: '0.6 mi', rating: '4.5', open: true, accessible: true },
  { id: '3', name: 'Union Square Station', address: 'East 14th St', distance: '1.1 mi', rating: '4.2', open: true, accessible: false },
];

export default function RestroomList() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => RESTROOMS.filter((item) => `${item.name} ${item.address}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}><Text style={styles.title}>Restrooms</Text><TouchableOpacity style={styles.filter}><Ionicons name="options-outline" size={20} /></TouchableOpacity></View>
      <View style={styles.search}><Ionicons name="search" size={20} color="#6D7974" /><TextInput value={query} onChangeText={setQuery} placeholder="Search nearby restrooms" style={styles.input} /></View>
      <FlatList data={results} keyExtractor={(item) => item.id} contentContainerStyle={styles.list} renderItem={({ item }) => (
        <TouchableOpacity style={styles.card}>
          <View style={styles.icon}><Ionicons name="business-outline" size={24} color="#215C46" /></View>
          <View style={styles.info}><View style={styles.row}><Text style={styles.name}>{item.name}</Text><Text style={styles.distance}>{item.distance}</Text></View><Text style={styles.address}>{item.address}</Text><View style={styles.badges}><Text style={styles.badge}>★ {item.rating}</Text>{item.open && <Text style={styles.open}>Open</Text>}{item.accessible && <Text style={styles.badge}>♿ Accessible</Text>}</View></View>
        </TouchableOpacity>
      )} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: '#F5F7F6' }, header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 8 }, title: { fontSize: 28, fontWeight: '800', color: '#18251F' }, filter: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }, search: { height: 52, marginHorizontal: 20, marginTop: 18, borderRadius: 14, backgroundColor: '#FFF', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, gap: 10 }, input: { flex: 1, fontSize: 16 }, list: { padding: 20, gap: 12 }, card: { backgroundColor: '#FFF', borderRadius: 16, padding: 14, flexDirection: 'row', gap: 12 }, icon: { width: 48, height: 48, borderRadius: 12, backgroundColor: '#E7F1EC', alignItems: 'center', justifyContent: 'center' }, info: { flex: 1 }, row: { flexDirection: 'row', justifyContent: 'space-between' }, name: { fontSize: 16, fontWeight: '700', color: '#18251F' }, distance: { color: '#6D7974' }, address: { color: '#6D7974', marginTop: 4 }, badges: { flexDirection: 'row', gap: 6, marginTop: 10 }, badge: { backgroundColor: '#EEF2F0', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, color: '#46534E', overflow: 'hidden' }, open: { backgroundColor: '#DCF0E5', color: '#267153', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, overflow: 'hidden' } });
