import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Favorites() {
  return <SafeAreaView style={styles.safe}><View style={styles.header}><Text style={styles.title}>Saved</Text></View><View style={styles.empty}><View style={styles.icon}><Ionicons name="heart-outline" size={36} color="#215C46" /></View><Text style={styles.emptyTitle}>No saved restrooms</Text><Text style={styles.emptyText}>Tap the heart on a restroom to save it here.</Text></View></SafeAreaView>;
}

const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: '#F5F7F6' }, header: { paddingHorizontal: 20, paddingTop: 8 }, title: { fontSize: 28, fontWeight: '800', color: '#18251F' }, empty: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 40 }, icon: { width: 72, height: 72, borderRadius: 36, backgroundColor: '#E7F1EC', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }, emptyTitle: { fontSize: 20, fontWeight: '700', color: '#18251F' }, emptyText: { color: '#718078', textAlign: 'center', marginTop: 8, lineHeight: 21 } });
