function moveModel() {
    const model = document.querySelector('#cat-model');
    // モデルの現在位置を取得
    const currentPosition = model.position;
    // 新しい位置を計算
    const newPosition = {x: currentPosition.x + 0.1, y: currentPosition.y, z: currentPosition.z};
    // 新しい位置にモデルを移動
    model.position = newPosition;
}