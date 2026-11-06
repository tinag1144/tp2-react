import { router } from 'expo-router';
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function InicioScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Comedor IPF</Text>

        <Text style={styles.subtitulo}>
          Pedí tu comida de forma rápida y sencilla.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>¿Qué querés pedir?</Text>

        <Text style={styles.descripcion}>
          Consultá el menú disponible y seleccioná un producto.
        </Text>

        <Pressable
          style={styles.boton}
          onPress={() => router.push('/menu')}
        >
          <Text style={styles.botonTexto}>Ver menú</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.ayuda}
        onPress={() => router.push('/ayuda/pagos/efectivo')}
      >
        <Text style={styles.ayudaTexto}>
          ¿Cómo pago en efectivo?
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    padding: 24,
  },

  encabezado: {
    marginTop: 30,
    marginBottom: 30,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#17375e',
  },

  subtitulo: {
    fontSize: 16,
    color: '#687789',
    marginTop: 8,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 24,
    elevation: 3,
  },

  cardTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#17375e',
  },

  descripcion: {
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 22,
    color: '#606f7b',
  },

  boton: {
    backgroundColor: '#1769aa',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  botonTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  ayuda: {
    alignItems: 'center',
    marginTop: 25,
  },

  ayudaTexto: {
    color: '#1769aa',
    fontWeight: '600',
  },
});