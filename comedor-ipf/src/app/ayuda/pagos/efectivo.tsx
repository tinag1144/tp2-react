import { router } from 'expo-router';
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function PagoEfectivoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Pago en efectivo
      </Text>

      <View style={styles.card}>
        <Text style={styles.paso}>
          1. Elegí tu producto.
        </Text>

        <Text style={styles.paso}>
          2. Confirmá el pedido.
        </Text>

        <Text style={styles.paso}>
          3. El sistema te asignará un número de turno.
        </Text>

        <Text style={styles.paso}>
          4. Presentá tu número y realizá el pago en el comedor.
        </Text>

        <Text style={styles.nota}>
          No es necesario realizar ningún pago desde la aplicación.
        </Text>
      </View>

      <Pressable
        style={styles.boton}
        onPress={() => router.back()}
      >
        <Text style={styles.botonTexto}>
          Volver
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    padding: 22,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#17375e',
    marginTop: 20,
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 24,
    elevation: 3,
  },

  paso: {
    color: '#33475b',
    fontSize: 16,
    marginBottom: 18,
    lineHeight: 23,
  },

  nota: {
    backgroundColor: '#eef6fc',
    color: '#1769aa',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    lineHeight: 21,
  },

  boton: {
    backgroundColor: '#1769aa',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 25,
  },

  botonTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});