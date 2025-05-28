import { createStackNavigator } from "@react-navigation/stack";
import AlunoLista from "../screens/AlunoLista";
import AlunosForm from "../screens/AlunosForm";

const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
           
            <Stack.Screen
                name="AlunoLista"
                component={AlunoLista}
                options={{
                    title: "Lista de Alunos",
                    headerTitleAlign: "center",
                   
                }}
            />

             <Stack.Screen
                name="AlunosForm"
                component={AlunosForm}
                options={{
                    title: "Cadastro de Aluno",
                    headerTitleAlign: "center",
                   
                }}
            />
        </Stack.Navigator>
    );
}
