import {useState, useEffect} from 'react';

export default function formulario(){
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [tipo, setTipo] = useState('');
    const [monto, setMonto] = useState('');
    const [fecha, setFecha] = useState('');
}
const guardarEnLocalStorage = () => {
  const objForm = {
    descripcion,
    categoria,
    tipo,
    monto,
    fecha,
  };

  
  localStorage.setItem('formData', JSON.stringify(objForm));

  console.log('Datos guardados:', objForm);
  alert('Datos guardados correctamente');

return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Descripción:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe la descripción"
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <Text style={styles.label}>Categoría:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe la categoría"
        value={categoria}
        onChangeText={setCategoria}
      />

      <Text style={styles.label}>Tipo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe el tipo"
        value={tipo}
        onChangeText={setTipo}
      />

      <Text style={styles.label}>Monto:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe el monto"
        keyboardType="numeric"
        value={monto}
        onChangeText={setMonto}
      />

      <Text style={styles.label}>Fecha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe la fecha (ej: 2025-10-17)"
        value={fecha}
        onChangeText={setFecha}
      />

      <Button title="Guardar" onPress={handleSubmit} />
    </ScrollView>
  );
}
