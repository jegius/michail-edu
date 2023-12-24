const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

// Использование CORS middleware для разрешения кросс-доменных запросов
app.use(cors());

// Загрузка документации Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Функция для генерации случайных сообщений
function generateMessages(chatId, numMessages = 5) {
    const messages = [];
    for (let i = 0; i < numMessages; i++) {
        messages.push({
            id: `${chatId}-${i}`,
            author: `Author ${Math.floor(Math.random() * 10)}`,
            message: `Message ${Math.random().toString(36).substring(7)}`,
        });
    }
    return messages;
}

// Метод GET возвращает массив случайных сообщений для chatId
app.get('/messages/:chatId', (req, res) => {
    const { chatId } = req.params;
    const messages = generateMessages(chatId);
    res.json(messages);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});