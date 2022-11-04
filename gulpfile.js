//Основоной модуль
import gulp from "gulp";
//Импорт путей
import {path} from "./gulp/config/path.js";
//Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js"
// Передаем в глобальную переменнную
global.app = {
    path:path,
    gulp:gulp,
    plugins:plugins
}
// Импорт задач 
import { copy } from "./gulp/task/copy.js";
import { reset } from "./gulp/task/reset.js";
import { html } from "./gulp/task/html.js";
import { server } from "./gulp/task/server.js";
import { scss } from "./gulp/task/scss.js";
import { js } from "./gulp/task/js.js";
import { images } from "./gulp/task/images.js"
// Наблюдатель за изменениями в йалах
function wather(){
    gulp.watch(path.watch.files,copy);
    gulp.watch(path.watch.html,html);
    gulp.watch(path.watch.scss,scss);
    gulp.watch(path.watch.js,js);
    gulp.watch(path.watch.images,images);
}
const mainTask = gulp.parallel(copy,html,scss,js,images);
//Построение сенариев выполнения задач
const dev  = gulp.series(reset,mainTask, gulp.parallel(wather,server)); 

//Выполнение сценаряи по умолчанию
gulp.task('default',dev);