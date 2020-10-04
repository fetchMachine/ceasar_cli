## Консольная утилита шифрования / дешифрования сообщения шифром Цезоря.

### Пример использования:
```bash
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

### Параметры:
1.  **-s, --shift**: Смещение по алфавиту
2.  **-i, --input**: Путь к файлу сообщения. Необязательный параметр, По умолчанию для ввода используется консоль.
3.  **-o, --output**: Путь к результирующему файлу. Необязательный параметр, По умолчанию для вывода используется консоль.
4.  **-a, --action**: Действие. Enum: encode/decode

### Описание задачи
[Task 1: Caesar cipher cli tool](https://github.com/rolling-scopes-school/nodejs-course-template/blob/master/TASKS.md#task-1-caesar-cipher-cli-tool)
