import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
  isDeleted?: boolean;
  deletedOn?: string;
}
interface TodosState {
  items: Todo[];
  loading: boolean;
  error: string | null;
}
const initialState: TodosState = {
  items: [],
  loading: false,
  error: null,
};

// Create Todo =>
export const createTodo = createAsyncThunk<Todo, string>(
  "todos/createTodo",
  async (text: string) => {
    const res = await fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: text,
        completed: false,
        userId: Math.floor(Math.random() * 100),
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to create todo");
    }
    const data: Todo = await res.json();
    return {
      id: Math.floor(Math.random() * 100),
      todo: data.todo,
      completed: false,
      userId: Math.floor(Math.random() * 100),
    };
  }
);

// Complete Todo =>
export const completeTodo = createAsyncThunk<Todo, number>(
  "todos/completeTodo",
  async (id: number) => {
    const res = await fetch(`https://dummyjson.com/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: true,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to complete todo");
    }
    const data: Todo = await res.json();
    return data;
  }
);

// Update Todo =>
export const updateTodo = createAsyncThunk<
  Todo,
  { editingId: number; trimmed: string }
>("todos/updateTodo", async ({ editingId, trimmed }) => {
  const res = await fetch(`https://dummyjson.com/todos/${editingId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: trimmed,
    }),
  });
  if (!res.ok) {
    throw new Error("Failed to update todo");
  }
  const data = await res.json();
  return data as Todo;
});

// Delete Todo
export const deleteTodo = createAsyncThunk<number, number>(
  "todos/deleteTodo",
  async (id) => {
    const res = await fetch(`https://dummyjson.com/todos/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed to delete todo");
    }
    const data: Todo = await res.json();
    return data.id;
  }
);
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Create
    builder
      .addCase(createTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(createTodo.rejected, (state) => {
        state.loading = false;
        state.error = "todo.errorCreate";
      });

    // Complete
    builder
      .addCase(completeTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(completeTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.loading = false;
        const todo = state.items.find((t) => t.id === action.payload.id);
        if (todo) {
          todo.completed = true;
        }
      })
      .addCase(completeTodo.rejected, (state) => {
        state.loading = false;
        state.error = "todo.errorComplete";
      });

    // Update
    builder
      .addCase(updateTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.loading = false;
        const item = state.items.find((t) => t.id === action.payload.id);
        if (item) {
          item.todo = action.payload.todo;
        }
      })
      .addCase(updateTodo.rejected, (state) => {
        state.loading = false;
        state.error = "todo.errorUpdate";
      });

    // Delete
    builder
      .addCase(deleteTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<number>) => {
        state.loading = false;
        state.items = state.items.filter((t) => t.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state) => {
        state.loading = false;
        state.error = "todo.errorDelete";
      });
  },
});
export default todosSlice.reducer;
