# ДЗ

## Как делать:

0. Сделать форк этого репозитория в свой аккаунт (только 1 раз в самом начале).

1. Перед выполнением ДЗ сделайте пул мастера этого репозитория себе в форк (чтобы иметь актуальный код);
2. Обновить зависимости `yarn` или `npm i`;
3. Создайте новую ветку от актуального мастера для выполнения ДЗ;
4. Выполните ДЗ в этой ветке;
5. Сделайте Pull Request этой ветки в мастер моего репозитория;
6. Напишите мне (a.koretskiy@javascript.info) письмо со ссылкой на PR.

**Важно! В результате всех этих манипуляций в вашем мастере должны быть только мои комиты, все ваши комиты должны быть в отдельных ветках под каждую домашку.**

Дедлайн – 22:00 по Киеву/23:00 по Москве за день до занятия.

## HT1

1. Создать компонент **Rate**, который принимает рейтинг (число от 1 до 5) и отображает его используя SVG со звездочками. Например `<Rate value={3} />`.
2. Создать компонент **Reviews**, который принимает все ревью по одному ресторану и отображает имена и отзывы про ресторан, а так же рейтинг с помощью компонента **Rate**.
3. Создать компонент **Restaurant** (рендерить там, где сейчас **Menu**). В **Restaurant** показывать **Menu** и **Reviews**. Так же в **Restaurant** посчитать средний рейтинг по этому ресторану и отобразить с помощью компоненты **Rate**.

## HT2

1. Покрыть **PropTypes** все компоненты (только то, что используется в компоненте).
2. Написать тесты на уменьшение блюд (опционально - без клика по increment).
3. Покрыть тестами **Reviews** (теститовать только разметку).

## HT3

1. Сделать компонент **Basket** в котором отображать выбранные товары с их количеством, суммой по каждому товару и общей стоимостью заказа.
2. Сделать у каждой позиции в этом заказе кнопки **+**, **-**, **х** (при нажатии на **х** удаляеься этот товар из корзины)

## HT4

1. Переписать редьюсеры **review** и **restaurant** на key=>value (аналогично **products**)
2. Добавить **users** редьюсер (так же key=>value)
3. Починить отображение **Review** компонента (взять данные из редьюсеров **review** и **users**)
4. Переписать все обращения в к стейту в mapStateToProps на селекторы (аналогично компоненту **Basket**)
5. Написать **middleware** для генерации **[uuid](https://github.com/uuidjs/uuid)**
6. Реализовать добавление нового review и юзера в стор и показывать его (мы считаем, что на каждый новый отзыв у нас добавляется новый пользователь)
