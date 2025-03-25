import AsyncStorage from "@react-native-async-storage/async-storage";

const TASKS_STORAGE_KEY = "@tasks";

export async function saveTasks(tasks) {
 try{
    const jsonTasks = JSON.stringify(tasks);
    await AsyncStorage.setItem(TASKS_STORAGE_KEY, jsonTasks);
 } catch(error){
    console.error("Erro ao salvar tarefas: ",error)
 }
};

export async function loadTasks(){
    try{
        const jsonTasks = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
        const tasks = jsonTasks ? JSON.parse(jsonTasks) : []
        return tasks.map(task => ({
            ...task,
            category: task.category || "personal",
        }))
    }catch(error){
        console.error("Erro ao carregar tarefas: ",error);
        return [];
    }
}
