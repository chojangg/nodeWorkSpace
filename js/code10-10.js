const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.static('public'));
app.use(morgan('combined'));

// request 이벤트 리스너를 설정합니다
app.get('*', (request, response) => {
    response.send('명령 프롬프트를 확인해주세요');
});

// 서버를 실행
app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000');
});