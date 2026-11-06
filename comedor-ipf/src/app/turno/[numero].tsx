import { router, useLocalSearchParams } from 'expo-router';
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function TurnoScreen() {
  const { numero, producto } =
    useLocalSearchParams<{
      numero: string;
      producto?: string;
    }>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.exito}>
          ¡Pedido confirmado!
        </Text>

        <Text style={styles.descripcion}>
          Tu número de turno es:
        </Text>

        <Text style={styles.numero}>
          {numero}
        </Text>

        {producto ? (
          <Text style={styles.producto}>
            Pedido: {producto}
          </Text>
        ) : null}

        <Text style={styles.aviso}>
          Esperá a que tu número sea llamado para retirar tu pedido.
        </Text>
      </View>

      <Pressable
        style={styles.boton}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.botonTexto}>
          Volver al inicio
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    elevation: 4,
  },

  exito: {
    color: '#26734d',
    fontWeight: 'bold',
    fontSize: 24,
  },

  descripcion: {
    color: '#687789',
    marginTop: 25,
  },

  numero: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#1769aa',
    marginVertical: 12,
  },

  producto: {
    color: '#17375e',
    fontSize: 17,
    fontWeight: '600',
  },

  aviso: {
    textAlign: 'center',
    color: '#687789',
    lineHeight: 21,
    marginTop: 22,
  },

  boton: {
    width: '100%',
    backgroundColor: '#1769aa',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },

  botonTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});