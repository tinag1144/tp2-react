import { router } from 'expo-router';
import {
    FlatList,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const productos = [
  {
    id: '1',
    nombre: 'Café con leche',
    categoria: 'Desayuno',
    precio: 1200,
  },
  {
    id: '2',
    nombre: 'Medialunas',
    categoria: 'Desayuno',
    precio: 1000,
  },
  {
    id: '3',
    nombre: 'Milanesa con puré',
    categoria: 'Almuerzo',
    precio: 4500,
  },
  {
    id: '4',
    nombre: 'Hamburguesa',
    categoria: 'Almuerzo',
    precio: 3800,
  },
  {
    id: '5',
    nombre: 'Agua mineral',
    categoria: 'Bebidas',
    precio: 1000,
  },
  {
    id: '6',
    nombre: 'Gaseosa',
    categoria: 'Bebidas',
    precio: 1500,
  },
];

export default function MenuScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Menú</Text>

      <Text style={styles.subtitulo}>
        Seleccioná un producto para ver su detalle.
      </Text>

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: '/menu/[id]',
                params: {
                  id: item.id,
                  nombre: item.nombre,
                  categoria: item.categoria,
                  precio: String(item.precio),
                },
              })
            }
          >
            <View>
              <Text style={styles.nombre}>
                {item.nombre}
              </Text>

              <Text style={styles.categoria}>
                {item.categoria}
              </Text>
            </View>

            <Text style={styles.precio}>
              ${item.precio}
            </Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#17375e',
    marginHorizontal: 20,
    marginTop: 20,
  },

  subtitulo: {
    marginHorizontal: 20,
    marginTop: 6,
    color: '#687789',
  },

  lista: {
    padding: 20,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },

  nombre: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#17375e',
  },

  categoria: {
    color: '#788896',
    marginTop: 5,
  },

  precio: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1769aa',
  },
});