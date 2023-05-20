import NotFound from "../pages/NotFound";
import { TodoPageId } from "../pages/TodoPageId";
import { Todos } from "../pages/Todos";

export const routes = [
    {
        path: '/todos',
        component: Todos,
        name: 'Todos',
        index: true
    },
    {
        path: 'todos/todo/:id',
        component: TodoPageId,
        name: 'TodoPageId'
    },
    {
        path: 'notFound',
        component: NotFound
    }
]