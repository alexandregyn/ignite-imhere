import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const participants = ['Alexandre', 'Jonas', 'Rodrigo', 'Diego', 'Maria', 'Joana', 'Jorge', 'Feliz', 'João'];

  function handleParticipantAdd() {
    console.log('Adicionou participante');    
  }
  
  function handleParticipantRemove(name: string) {
    console.log(`Removeu participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={item => item}
        renderItem= {({ item }) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)}/>          
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Não há registros...
          </Text>
        )}
      />
    </View>
  );
}