## Руководство по работе с проектом

Данный проект создан с нуля на Webpack. 

## Структура проекта

---

_Не удаляйте и не изменяйте папки и файлы:_
_`.editorconfig`, `.gitattributes`, `.gitignore`, `package.json`._

---

### public

Директория для размещения статичных ресурсов (шрифты, стили, изображения и так далее). Корневая директория проекта.

### src

В директории размещаются исходный код проекта: компоненты, файлы с тестами, модули и так далее. Структура директории `src` может быть произвольной.

### Сборка проекта

```bash
npm run build
```

Запуск сборки приложения.

В процессе сборки приложения, код приложения оптимизируется и минимизируется, для достижения наилучшей производительности.

Во время выполнения инструкций по сборке проекта, в корне проекта создается директория `build`, в которую будут помещены результирующие файлы. После сборки проект готов к публикации.