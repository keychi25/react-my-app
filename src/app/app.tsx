import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";

import Game from "./Game";
const App: React.FunctionComponent = () => {
  return (
    <div>
      <Game />,
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
/*
1. 履歴内のそれぞれの着手の位置を (col, row) というフォーマットで表示する。[済み]
2. 着手履歴のリスト中で現在選択されているアイテムを太字にする。[済み]
3. Board でマス目を並べる部分を、ハードコーディングではなく 2 つのループを使用するように書き換える。
4. 着手履歴のリストを昇順・降順いずれでも並べかえられるよう、トグルボタンを追加する。
5. どちらかが勝利した際に、勝利につながった 3 つのマス目をハイライトする。
6. どちらも勝利しなかった場合、結果が引き分けになったというメッセージを表示する。
*/
