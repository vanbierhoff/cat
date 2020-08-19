import {Component, OnInit, NgModule, Input, Output} from '@angular/core';


export interface Cats {
    id: string;
    image: string;
    name: string;
    description: string;
    liked: boolean;
}

interface TestAddForm {
    name: boolean;
    url: boolean;
    description: boolean;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
    view: 'card'| 'tile' = "card"
   
    // массив карточек с котоами
    cards: Cats[] = null;
    Dcards: Cats[] = [
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
    // объект хранит данные для проверки заполнения полей If ('поле'  === true ) - данные введены
    checkForm: TestAddForm = {
        name: false,
        url: false,
        description: false,
    };
    lStorage: Storage = window.localStorage;

    // показывать форму добавления нового кота
    getCard = false;
    // if true - показываем значок добавить кота else значок закрыть форму
    getPlus = true;
    //  if (formReady === false)  - вся форма заполнена верно
    formReady = true;
    // Паттерн проверки имени кота
    patternCat = /^[A-Z](\s?)([Aa-z\s]{2,10})$/;
    patternUrl = /(https?:\/\/)\.?([a-z\S]{1,80})\.(jpg|jpeg)$/ig;
    ngOnInit(): void {
        if (this.lStorage.getItem('cards') !== null ){
            this.cards = JSON.parse(this.lStorage.getItem('cards'));
            console.log('ЛОКАЛ НЕ ПУСТ');
        } else {
            this.cards = [
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
        }
    }
    /**
     * @param vaule : boolean
     * В функцию передается логическое значение которое устанавливается на toogleCard
     * cardActive : boolean  если true активен шаблон card
     */
   

    getAddCard(): void {
        this.getCard = true;
        this.getPlus = false;
    }
     hiddenCard(): void {
        this.getCard = false;
        this.getPlus = true;
    }
    testDataForm(): void {
        const btn: Element = document.querySelector('.addCard__btn');
        if (this.checkForm.url === true && this.checkForm.description === true
        && this.checkForm.name === true){
            this.formReady = false;
        } else {
            this.formReady = true;
        }
    }
    /**
     *  Функиця проверяет введенные данные на соответсвие шаблону
     * @param event - событие  input()
     */
    testInput(event): void {
        const pattern: string = event.target.name;
        switch (pattern) {
            case ('name'):
                if (this.patternCat.test(event.target.value)){
                    event.target.classList.add('input_active');
                    this.checkForm.name = true;
                } else {
                    event.target.classList.remove('input_active');
                    this.checkForm.name = false;
                }
                break;
            case ('url'):
                if (this.patternUrl.test(event.target.value)){
                    event.target.classList.add('input_active');
                    this.checkForm.url = true;
                }else {
                    event.target.classList.remove('input_active');
                    this.checkForm.url = false;
                }
                break;
            case ('description'):
                console.log(event.target.value.length + 'DESCR');
                if (event.target.value.length){
                    event.target.classList.add('input_active');
                    this.checkForm.description = true;
                }else {
                    event.target.classList.remove('input_active');
                    this.checkForm.description = false;
                }
                break;
        }
        this.testDataForm();
    }
    addCat(e): void {
        e.preventDefault();
        const form: any = document.getElementById('form');
        const dataForm = new FormData(form);
        const cat: Cats = {
            id: dataForm.get('name').toString(),
            description: dataForm.get('description').toString(),
            liked: false,
            name: dataForm.get('name').toString(),
            image:  dataForm.get('url').toString()
        };
        this.cards.push(cat);
        this.hiddenCard();
    }
    saveData(): void {
         const jsonData: any = JSON.stringify(this.cards);
         this.lStorage.setItem('cards', jsonData );
         alert('Сохранено');
    }

    toggleLike(card): void {
       card.liked = !card.liked;
       console.log( card + 'Clik JOB');
     }
}
