import { API_URL } from "~/const/consts";
import type { IKitchen } from "~/types/types";

export const createNewKitchen = async (
  kitchen: IKitchen
): Promise<Record<string, string | number>[] | null> => {
  // Добавить Валидатор
  // newKitechen отправить запрос на бэк
  try {
    const response = await fetch(`${API_URL}/api/kitchens/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(kitchen),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Ответ с сервера Ошибка:", errorText);
      throw new Error(`Статус ошибки ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Произошла ошибка в создании кухни:", error);
    return null;
  }
};

export const deleteKitchen = async (
  id: number
): Promise<Record<string, string | number> | null> => {
  try {
    const response = await fetch(`${API_URL}/api/kitchens/delete/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Ответ с сервера Ошибка:", errorText);
      throw new Error(`Статус ошибки ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Произошла ошибка в теле запроса:", error);
    return null;
  }
  // Удалить кухню с бэка
};
