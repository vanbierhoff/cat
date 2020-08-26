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
<<<<<<< HEAD
export function createCat(id: string, name: string, image: string, description: string) {
=======
export function createCat (id: string, name: string, image: string, description: string):Cats {
>>>>>>> af29fb247e3400dcebb0c1be1ed0ee5d2d9ffac7
  return {
    id,
    name,
    image,
    description,
    liked: false
  } as Cats;
}
