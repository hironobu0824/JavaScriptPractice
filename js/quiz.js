const quiz = [
    {
        question: '高橋宏暢の血液型は？',
        answers: [ 'A型', 'B型', 'O型', 'AB型'],
        correct: 'B型',
    }, {
        question: '大学時代の学部は',
        answers: [ '情報学部', '文学部', '工学部', '経済学部'],
        correct: '経済学部'
    }, {
        question: '高橋が以下の中で好きな料理は？',
        answers: [ '中華料理', '和食', 'イタリアン', 'フレンチ'],
        correct: '中華料理'
    }
]

let quizIndex = 0;
let correctNum = 0;
const $button = document.getElementsByTagName('button');

// スタートメッセージ
if (window.confirm('高橋に関するクイズのページです。全部で3問です。クイズを始めますか？')) {
    setTimeout(fadeout,1000);
}

// メッセージが消えてクイズがスタートするアクション
function fadeout() {
    document.getElementById('pop-up').style.display='none';
    document.getElementById('container').style.display='';
}

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < $button.length) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

// クイズの問題文と選択肢を定義
const setupQuiz = (quizIndex) => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < $button.length) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz(quizIndex);

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解');
        correctNum++;
    } else {
        window.alert('不正解');
    }

    quizIndex++;

    if (quizIndex < quiz.length) {
        //問題数がまだあればこちらを実行
        setupQuiz(quizIndex);
    } else {
        //問題数がもうなければこちらを実行
        window.alert('終了!　あなたは、' + quiz.length + '問中' + correctNum + '問正解！');
        location.href = "index.html";
    }
}


