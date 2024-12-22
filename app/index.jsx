import { View, Text, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
    const [username, setUsername] = useState('');
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
            <TextInput
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
                style={{
                    borderWidth: 1,
                    padding: 10,
                    marginVertical: 20,
                    width: '80%'
                }}
            />
            <Button
                title="Go to Details"
                onPress={() => router.push(`/details?username=${username}`)}
            />
        </View>
    );
}
