import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function DetailsScreen({ route }) {
    const { username } = route.params || {};
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details Screen</Text>
            {username && <Text>Welcome, {username}!</Text>}
            <Button title="Go Back" onPress={() => router.back()} />
        </View>
    );
}
