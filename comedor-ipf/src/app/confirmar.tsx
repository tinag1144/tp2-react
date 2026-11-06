import { router, useLocalSearchParams } from 'expo-router';
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function ConfirmarScreen() {
  const { nombre, precio } =
    useLocalSearchParams<{
      nombre?: string;
      precio?: string;
    }>();

  function confirmarPedido() {
    const numeroTurno =
      Math.floor(Math.random() * 90) + 10;

    router.replace({
      pathname: '/turno/[numero]',
      params: {
        numero: String(numeroTurno),
        producto: nombre ?? 'Pedido',
      },
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Confirmar pedido
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Producto
        </Text>

        <Text style={styles.valor}>
          {nombre ?? 'Producto'}
        </Text>

        <View style={styles.separador} />

        <Text style={styles.label}>
          Total
        </Text>

        <Text style={styles.precio}>
          ${precio ?? '0'}
        </Text>
      </View>

      <Pressable
        style={styles.boton}
        onPress={confirmarPedido}
      >
        <Text style={styles.botonTexto}>
          Confirmar pedido
        </Text>
      </Pressable>

      <Pressable
        style={styles.ayuda}
        onPress={() =>
          router.push('/ayuda/pagos/efectivo')
        }
      >
        <Text style={styles.ayudaTexto}>
          Información sobre pago en efectivo
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
    borderRadius: 16,
    padding: 22,
    elevation: 3,
  },

  label: {
    color: '#687789',
    fontSize: 14,
  },

  valor: {
    color: '#17375e',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
  },

  separador: {
    height: 1,
    backgroundColor: '#e5e9ed',
    marginVertical: 20,
  },

  precio: {
    color: '#1769aa',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
  },

  boton: {
    backgroundColor: '#1769aa',
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 25,
    alignItems: 'center',
  },

  botonTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  ayuda: {
    alignItems: 'center',
    padding: 20,
  },

  ayudaTexto: {
    color: '#1769aa',
  },
});