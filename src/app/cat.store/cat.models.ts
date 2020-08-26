// интерфейс для добавления заметки
export interface Cats {
  id: string;
  image: string;
  name: string;
  description: string;
  liked: boolean;
}
export type Filter = 'all' | 'done' | 'notDone';

// фабричная функция для добавления заметки, разобраться зачем?)
export function createCat (id: string, name: string, image: string, description: string):Cats {
  return {
    id,
    name,
    image,
    description,
    liked: false
  } as Cats;
}
