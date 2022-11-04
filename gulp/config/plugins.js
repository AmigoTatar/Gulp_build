import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber";//Обработка ошибок
import notify from "gulp-notify";//Сообщения подсказки
import browsersync from "browser-sync";//Локальнйы сервер
import newer from "gulp-newer";//Проверка обновления

export const plugins = {
    replace:replace,
    plumber:plumber,
    notify:notify,
    browsersync:browsersync,
    newer:newer
}