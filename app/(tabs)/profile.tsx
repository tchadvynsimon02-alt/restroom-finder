import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  return <SafeAreaView style={styles.safe}><View style={styles.header}><Text style={styles.title}>Profile</Text></View><View style={styles.avatar}><Ionicons name="person" size={40} color="#215C46" /></View><Text style={styles.name}>Explorer</Text><Text style={styles.caption}>Help keep restroom information accurate</Text>{[['heart','Saved places','0'],['add-circle','Contributions','0'],['star','Reviews','0']].map(([icon,title,value]) => <TouchableOpacity key={title} style={styles.row}><Ionicons name={icon as any} size={22} color="#215C46" /><Text style={styles.rowText}>{title}</Text><Text style={styles.value}>{value}</Text><Ionicons name="chevron-forward" size={20} color="#9CA7A2" /></TouchableOpacity>)}</SafeAreaView>;
}

const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: '#F5F7F6' }, header: { paddingHorizontal: 20, paddingTop: 8 }, title: { fontSize: 28, fontWeight: '800', color: '#18251F' }, avatar: { width: 84, height: 84, borderRadius: 42, backgroundColor: '#E7F1EC', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 28 }, name: { fontSize: 22, fontWeight: '800', textAlign: 'center', marginTop: 12, color: '#18251F' }, caption: { textAlign: 'center', color: '#718078', marginVertical: 8 }, row: { height: 64, backgroundColor: '#FFF', marginHorizontal: 20, marginTop: 10, borderRadius: 14, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', gap: 12 }, rowText: { flex: 1, fontSize: 16, fontWeight: '600' }, value: { color: '#718078' } });
