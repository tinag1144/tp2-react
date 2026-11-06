import { router, useLocalSearchParams } from 'expo-router';
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function DetalleProductoScreen() {
  const { id, nombre, categoria, precio } =
    useLocalSearchParams<{
      id: string;
      nombre?: string;
      categoria?: string;
      precio?: string;
    }>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>
          {nombre ?? `Producto ${id}`}
        </Text>

        <Text style={styles.categoria}>
          {categoria ?? 'Producto'}
        </Text>

        <Text style={styles.precio}>
          ${precio ?? '0'}
        </Text>

        <Text style={styles.descripcion}>
          Producto disponible en el Comedor IPF.
        </Text>

        <Pressable
          style={styles.boton}
          onPress={() =>
            router.push({
              pathname: '/confirmar',
              params: {
                id,
                nombre: nombre ?? 'Producto',
                precio: precio ?? '0',
              },
            })
          }
        >
          <Text style={styles.botonTexto}>
            Agregar y continuar
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    padding: 22,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 24,
    marginTop: 25,
    elevation: 3,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#17375e',
  },

  categoria: {
    color: '#687789',
    marginTop: 5,
    fontSize: 16,
  },

  precio: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1769aa',
    marginTop: 25,
  },

  descripcion: {
    color: '#687789',
    marginTop: 16,
    marginBottom: 28,
  },

  boton: {
    backgroundColor: '#1769aa',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
  },

  botonTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});