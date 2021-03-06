# `React` + `Redux` + `localStorage` (Calendar + tasks creator)

Данный пример представляет собой отображение данных с сервера с возможностью их редактирования и сохранения в localStorage. Данные тянутся из соседнего репозитория. Если вы скачаете проект из [репозитория][repo], и запустите из консоли команды `npm install` а потом `npm start`, у вас откроется браузер с проектом.

`Живой пример` доступен по [ссылке][link01].

## Основные моменты и возможности

- Отображение наличия событий на календаре ввиде закрашенной даты
- Локализация библиотеки календаря (react-day-picker)
- Сохранение события по нажатию Enter (в локальное хранилище браузера)
- Eсли поле не заполнено, событие не сохранится
- Удаление события
- После первой загрузки и сохранения чего-либо есть возможность работать без интернета, так как данные берутся из хранилища

![preview]

[repo]: <https://github.com/topus009/regeora2>
[link01]: <https://topus009.github.io/regeora2/>
[preview]: <https://github.com/topus009/ets/blob/master/Screenshot.png>