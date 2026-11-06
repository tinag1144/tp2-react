import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="menu/[id]"
        options={{
          title: 'Detalle del producto',
        }}
      />

      <Stack.Screen
        name="confirmar"
        options={{
          title: 'Confirmar pedido',
        }}
      />

      <Stack.Screen
        name="turno/[numero]"
        options={{
          title: 'Tu turno',
        }}
      />

      <Stack.Screen
        name="ayuda/pagos/efectivo"
        options={{
          title: 'Pago en efectivo',
        }}
      />
    </Stack>
  );
}