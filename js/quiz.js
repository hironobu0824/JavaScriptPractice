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
} else {
    location.href = "index.html";
}

setupQuiz(0); //問題初期表示

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < $button.length) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

/**
 * メッセージが消えてクイズがスタートする
 * @return void
 */
function fadeout() {
    document.getElementById('pop-up').style.display='none';
    document.getElementById('container').style.display='';
}

/**
 * クイズの問題文と選択肢を表示する
 * @param {Number} quizIndex クイズ番号
 * @return void
 */
function setupQuiz(quizIndex) {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < $button.length) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

/**
 * 問題の解答に対する正誤判定
 * @param e クリックイベント
 * @return void
 */
function clickHandler(e) {
    let array = {};
    if(quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解');
        correctNum++;
        array['bool'] = true;
    } else {
        window.alert('不正解');
        array['bool'] = false;
    }
    array['answer'] = e.target.textContent;
    result[quizIndex] = array;

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

/**
 * 高橋の理解レベルを返す
 * @param {Number} 正解数
 * @return {String} 高橋の理解レベル
 */
function getResult(correctNum) {
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

/**
 * 正誤表を作る
 * @param {Array} クイズ
 * @param {Array} 解答
 * @return void
 */
function generate_table(quiz, result) {
    // body の参照を取得
    let topButton = document.getElementById("top");
  
    // <table> 要素と <tbody> 要素を作成
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    generate_row(tblBody, '問題', '解答', '正誤');
  
    // すべてのセルを作成
    for (let i = 0; i < quiz.length; i++) {
        if (result[i]['bool'] === true) {
            generate_row(tblBody, quiz[i]['question'], result[i]['answer'], "◯");
        } else {
            generate_row(tblBody, quiz[i]['question'], result[i]['answer'], "×");
        }
    }
  
    // <tbody> を <table> の中に追加
    tbl.appendChild(tblBody);
    // <table> を <body> の中に追加
    
    topButton.before(tbl);
    // tbl の border 属性を 2 に設定
    tbl.setAttribute("border", "2");
}

/**
 * 表の行を作る
 * @param tblBody tBody要素
 * @param {String} text1
 * @param {String} text2
 * @param {String} text3
 * @return void
 */
 function generate_row(tblBody, text1, text2, text3) {
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cellText1 = document.createTextNode(text1);
    cell1.appendChild(cellText1);
    let cell2 = document.createElement("td");
    let cellText2 = document.createTextNode(text2);
    cell2.appendChild(cellText2);
    let cell3 = document.createElement("td");
    let cellText3 = document.createTextNode(text3);
    cell3.appendChild(cellText3);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    // 表の本体の末尾に行を追加
    tblBody.appendChild(row);
}

document.getElementById('top').addEventListener('click',() => {
    location.href = "index.html";
})