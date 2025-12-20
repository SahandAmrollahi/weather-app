import { Check, Clipboard, List, Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import {
  completeTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../../store/todosSlice";
import type { Todo } from "../../store/todosSlice";
import { useTranslation } from "react-i18next";

const TodoList = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch<AppDispatch>();

  const [text, setText] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const { items, loading, error } = useSelector(
    (state: RootState) => state.todos
  );
  const activeTodos = items.filter((todo) => todo.completed === false);
  const completedTodos = items.filter((todo) => todo.completed === true);

  const addTodo = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    dispatch(createTodo(trimmed));
    setText("");
  };
  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditingText(todo.todo);
  };

  const saveEdit = () => {
    if (editingId === null) return;
    const trimmed = editingText.trim();
    if (!trimmed) return;
    dispatch(updateTodo({ editingId, trimmed }));
    setEditingId(null);
    setEditingText("");
  };
  const handleClearCompleted = () => {
    completedTodos.forEach((item) => {
      dispatch(deleteTodo(item.id));
    });
  };

  return (
    <section className="dark:bg-[#44475A] bg-[#AAC4F5] px-28">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Add Item */}
        <div className="dark:bg-[#6272A4] bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-400 rounded-lg p-4 shadow-md">
              <Clipboard className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-gray-400 mt-5">{t("todo.add")}</h2>
          </div>
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <label className="text-blue-400 text-sm mb-2 block">
                {t("todo.what")}
              </label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTodo()}
                className="w-full border-b-2 border-blue-400 pb-2 text-gray-700 outline-none placeholder-gray-400"
                placeholder={t("todo.placeholder")}
              />
            </div>
            <button
              onClick={addTodo}
              className="bg-blue-400 hover:bg-blue-500 text-white rounded-full p-4 shadow-lg transition-colors"
            >
              <Plus className="w-6 h-6" />
            </button>
          </div>
        </div>
        {loading && (
          <p className="text-xs text-gray-500 text-center">
            {t("todo.loading")}
          </p>
        )}
        {error && (
          <p className="text-xs text-red-500 text-center">{t(error)}</p>
        )}
        {/* Todo List */}
        <div className="dark:bg-[#6272A4] bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-yellow-500 rounded-lg p-4 shadow-md">
              <List className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-gray-400 mt-5 whitespace-nowrap">
              {activeTodos.length > 0
                ? `${t("todo.list")} (${activeTodos.length})`
                : t("todo.list")}
            </h2>
          </div>
          <div className="space-y-4">
            {activeTodos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center gap-4 py-3 border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => dispatch(completeTodo(todo.id))}
                  className="bg-blue-400 hover:bg-blue-500 rounded-full p-2 transition-colors shrink-0"
                >
                  <Check className="w-5 h-5 text-white" />
                </button>
                {editingId === todo.id ? (
                  <>
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                      onBlur={saveEdit}
                      className="flex-1 text-gray-600 outline-none border-b border-gray-300 pb-1"
                      autoFocus
                    />
                  </>
                ) : (
                  <>
                    <span className="flex-1 text-gray-600">{todo.todo}</span>
                    <button
                      onClick={() => startEditing(todo)}
                      className="text-green-500 hover:text-green-600 transition-colors"
                    >
                      <Pencil className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => dispatch(deleteTodo(todo.id))}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
            ))}
            {activeTodos.length === 0 && (
              <p className="text-gray-400 text-center py-4">
                {t("todo.noActive")}
              </p>
            )}
          </div>
        </div>
        {/* Completed Section */}
        <div className="dark:bg-[#6272A4] bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-500 rounded-lg p-4 shadow-md">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-gray-400 mt-5 whitespace-nowrap">
              {completedTodos.length > 0
                ? `${t("todo.completed")} (${completedTodos.length})`
                : t("todo.completed")}
            </h2>
          </div>
          <div className="space-y-4">
            {completedTodos.map((todo) => (
              <div key={todo.id} className="flex items-center gap-4 py-3">
                <span className="flex-1 text-gray-400 line">{todo.todo}</span>
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="text-red-500 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
            {completedTodos.length === 0 && (
              <p className="text-gray-400 text-center py-4">
                {t("todo.noCompleted")}
              </p>
            )}
          </div>
          {completedTodos.length > 0 && (
            <div className="flex justify-end mt-4">
              <button
                onClick={handleClearCompleted}
                className="text-sm text-red-500 hover:text-red-600 flex items-center gap-2 border p-[5px] rounded-[5px]"
              >
                {t("todo.clearAll")}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default TodoList;
