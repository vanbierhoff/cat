import {Component, OnInit, NgModule, Input, Output} from '@angular/core';


export interface Cats {
    id: string;
    image: string;
    name: string;
    description: string;
    liked: boolean;
}


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    view: 'card'| 'tile' = "card"
    // массив карточек с котоами
    cards: Cats[] = [
        {
            id: 'Shironeko',
            description: 'Самый счастливый и сонный кот в мире',
            name: 'Shironeko',
            image: 'http://html.ftpes.ru/FrontEndTest/Shironeko.jpg',
            liked: false
        },
        {
            id: 'Garfi',
            description: 'Самый злой кот в мире',
            name: 'Garfi',
            image: 'http://html.ftpes.ru/FrontEndTest/Garfi.jpg',
            liked: false
        },
        {
            id: 'Sam',
            description: 'У кота Сэма есть потрясающие брови',
            name: 'Sam',
            image: 'http://html.ftpes.ru/FrontEndTest/Sam.jpg',
            liked: false
        },
        {
            id: 'Snoopy',
            description: 'Самый очаровательный котик',
            name: 'Snoopy',
            image: 'http://html.ftpes.ru/FrontEndTest/Snoopy.jpg',
            liked: false
        },
        {
            id: 'Venus',
            description: 'Кошка с двумя лицами',
            name: 'Venus',
            image: 'http://html.ftpes.ru/FrontEndTest/Venus.jpg',
            liked: false
        },
        {
            id: 'Maru',
            description: 'Повелитель коробок',
            name: 'Maru',
            image: 'http://html.ftpes.ru/FrontEndTest/Maru.jpg',
            liked: false
        },
        {
            id: 'Lil_Bub',
            description: 'Вечный котёнок',
            name: 'Lil Bub',
            image: 'http://html.ftpes.ru/FrontEndTest/Lil_Bub.jpg',
            liked: false
        },
        {
            id: 'Banye',
            description: 'Всегда удивленный кот',
            name: 'Banye',
            image: 'http://html.ftpes.ru/FrontEndTest/Banye.jpg',
            liked: false
        },
        {
            id: 'Grumpy_Cat',
            description: 'Сердитый котик',
            name: 'Grumpy Cat',
            image: 'http://html.ftpes.ru/FrontEndTest/Grumpy_Cat.jpg',
            liked: false
        },
        {
            id: 'Hamilton',
            description: 'Кот-хипстер',
            name: 'Hamilton',
            image: 'http://html.ftpes.ru/FrontEndTest/Hamilton.jpg',
            liked: false
        },
        {
            id: 'Nala',
            description: 'Кошка, которая всегда в шоке',
            name: 'Nala',
            image: 'http://html.ftpes.ru/FrontEndTest/Nala.jpg',
            liked: false
        },
        {
            id: 'Colonel_Meow',
            description: 'Кот с самой длинной шерстью',
            name: 'Colonel Meow',
            image: 'http://html.ftpes.ru/FrontEndTest/Colonel_Meow.jpg',
            liked: false
        },
    ];
    ngOnInit(): void { }
    /**
     * @param vaule : boolean
     * В функцию передается логическое значение которое устанавливается на toogleCard
     * cardActive : boolean  если true активен шаблон card
     */
   
    toggleLike(card): void {
       card.liked = !card.liked;
       console.log( card + 'Clik JOB');
     }
}
