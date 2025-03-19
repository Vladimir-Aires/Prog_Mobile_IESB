import {FontAwesome5} from "@expo/vector-icons";

export const TASK_CATEGORIES = {
    personal:{
        label:"Pessoal",
        icon: (size, color) => <FontAwesome5 name="home" size={size} color={color}/>,
    },
    work:{
        label:"Trabalho",
        icon:(size, color) => <FontAwesome5 name="briefcase" size={size} color={color}/>,
    },
    study:{
        label:"Estudos",
        icon:(size,color) => <FontAwesome5 name="book" size={size} color={color}/>
    },
};