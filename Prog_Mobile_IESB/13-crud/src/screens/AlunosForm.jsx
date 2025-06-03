import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { TextInput, Text, Button } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";
import AlunosService from "../../service/AlunosService";

export default function AlunosForm({ navigation, route }) {
    const alunoAntigo = route.params;

    const [nome, setNome] = useState("");
    const [dataNasc, setDataNasc] = useState("");

    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    async function salvar() {
        let aluno = {
            nome,
            cpf,
            email,
            dataNasc,
            telefone,
        };

        // Validação de campos
        if (
            !aluno.nome ||
            !aluno.cpf ||
            !aluno.email ||
            !aluno.dataNasc ||
            !aluno.telefone
        ) {
            alert("Preencha todos os campos!");
            return;
        }

        await AlunosService.salvar(aluno);
        alert("Aluno cadastrado com sucesso!");
        navigation.reset({
            index: 0,
            routes: [{ name: "AlunoLista" }],
        });
    }

    return (
        <View style={styles.container}>
            <Text variant="titleLarge">Informe os dados</Text>
            <TextInput
                style={styles.input}
                mode="outlined"
                label="Nome"
                placeholder="Nome Completo"
                value={nome}
                onChangeText={(nome) => setNome(nome)}
            />
            <TextInput
                style={styles.input}
                mode="outlined"
                label="CPF"
                placeholder="Seu CPF"
                value={cpf}
                onChangeText={(cpf) => setCpf(cpf)}
                keyboardType="decimal-pad"
                render={(props) => <TextInputMask {...props} type={"cpf"} />}
            />
            <TextInput
                style={styles.input}
                mode="outlined"
                label="Email"
                placeholder="exemplo@gmail.com"
                value={email}
                onChangeText={(email) => setEmail(email)}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                mode="outlined"
                label="Telefone"
                placeholder="00 00000-0000"
                value={telefone}
                onChangeText={(telefone) => setTelefone(telefone)}
                keyboardType="decimal-pad"
                render={(props) => (
                    <TextInputMask
                        {...props}
                        type={"cel-phone"}
                        options={{
                            maskType: "BRL",
                            withDDD: true,
                            dddMask: "(99)",
                        }}
                    />
                )}
            />
            <TextInput
                style={styles.input}
                mode="outlined"
                label="Data de Nascimento"
                placeholder="00/00/0000"
                value={dataNasc}
                onChangeText={(dataNasc) => setDataNasc(dataNasc)}
                keyboardType="decimal-pad"
                render={(props) => (
                    <TextInputMask
                        {...props}
                        type={"datetime"}
                        options={{
                            format: "DD/MM/YYYY",
                        }}
                    />
                )}
            />

            <Button mode="contained" onPress={salvar} style={styles.input}>
                Salvar
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",

        marginTop: 10,
    },
    input: {
        width: "90%",
        marginTop: 10,
    },
});
