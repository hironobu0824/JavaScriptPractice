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
let result = [];
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

setupQuiz(0);

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解');
        correctNum++;
        result[quizIndex] = true;
    } else {
        window.alert('不正解');
        result[quizIndex] = false;
    }

    quizIndex++;

    if (quizIndex < quiz.length) {
        //問題数がまだあればこちらを実行
        setupQuiz(quizIndex);
    } else {
        //問題数がもうなければこちらを実行
        document.getElementById('container').style.display='none';
        document.getElementById('quiz-result').style.display='';
        document.getElementById('quiz-result-text').textContent = getResult(correctNum);
        generate_table(quiz, result)
    }
}

const getResult = (correctNum) => {
    if (correctNum === 3) {
        return "「高橋の理解者」レベル"
    } else if (correctNum === 2) {
        return "「高橋宏暢の友人」レベル"
    } else if (correctNum === 1) {
        return "「高橋宏暢の知り合い」レベル"
    } else {
        return "「赤の他人」レベル"
    }
}

function generate_table(quiz, result) {
    // body の参照を取得
    let body = document.getElementsByTagName("body")[0];
  
    // <table> 要素と <tbody> 要素を作成
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
  
    // すべてのセルを作成
    for (let i = 0; i < quiz.length; i++) {
        // 表の行を作成
        let row = document.createElement("tr");
  
        let cell1 = document.createElement("td");
        let cellText1 = document.createTextNode(quiz[i]['question']);
        cell1.appendChild(cellText1);
        let cell2 = document.createElement("td");
        if (result[i] === true) {
            cellText2 = document.createTextNode("正解");
        } else {
            cellText2 = document.createTextNode("不正解");
        }
        cell2.appendChild(cellText2);
        row.appendChild(cell1);
        row.appendChild(cell2);
  
        // 表の本体の末尾に行を追加
        tblBody.appendChild(row);
    }
  
    // <tbody> を <table> の中に追加
    tbl.appendChild(tblBody);
    // <table> を <body> の中に追加
    body.appendChild(tbl);
    // tbl の border 属性を 2 に設定
    tbl.setAttribute("border", "2");
  }


