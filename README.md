##Чтобы использовать webpack тебе нужен Nodejs
Тут есть [https://yvoloboy.ru/kak-dobavit-node-js-na-openserver/][инструкция]

Так же могут возникнуть проблемы с python 
(гугли (Мне помогло: https://github.com/felixrieseberg/windows-build-tools/issues/56#issuecomment-327419416),
я нашел питон в C:\Users\molde\.windows-build-tools\python27 если что))

[ ] Запускаешь в консоли проекта `npm i`
[ ] Дальше `npm run prod`

И все скомпилится в папку dist и по сохранению файла будет перекомпиливаться

Возможные скрипты для npm прописаны в package.json в разделе script, можешь попробовать запустить prod и посмотреть
Так же написал пример в style.scss внизу)

Файл index.html переименовал в php, для того чтобы подставлять id к файлу стилей и скриптов, 
это нужно для того чтобы стили и скрипты перекешировались и не было такого что они не обновились