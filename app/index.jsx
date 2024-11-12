import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

// Import the local image
import foodDeliveryIcon from "../assets/icons/food-delivery.png"; // Adjust the path as necessary

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
      <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#000000', marginBottom: 8 }}>
        OLALA
      </Text>
      <Text style={{ fontSize: 20, fontStyle: 'italic', color: '#888888', marginBottom: 8 }}>
        The fastest food delivery service
      </Text>
      <Image 
        source={foodDeliveryIcon} 
        style={{ width: 100, height: 100, marginBottom: 20 }} 
      />
      <Link
        href="/home"
        style={{
          backgroundColor: '#FFD700', // Yellow color
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5,
          textAlign: 'center',
        }}
      >
        <Text style={{ fontSize: 18, color: '#000000' }}>
          Get Started
        </Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
