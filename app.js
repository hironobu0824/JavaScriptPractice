const quiz = [
    {
        question: 'ゲーム史上、最も売れたゲーム機はどれ？',
        answers: [ 'スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
        correct: 'ニンテンドーDS'
    }, {
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: [ 'MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
        correct: 'MOTHER2'
    }, {
        question: 'ファイナルファンタジーⅣの主人公の名前は？',
        answers: [ 'フリオニール', 'クラウド', 'ティーダ', 'セシル'],
        correct: 'セシル'
    }
]

let quizIndex = 0;
let correctNum = 0;
const $button = document.getElementsByTagName('button');

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
    }
}


