const model = document.querySelector('#cat-model');
model.addEventListener('click', () =>{
    // 3Dモデルを移動する
    const x = Math.random() * 4 - 2;
    const y = Math.random() * 4 - 2;
    const z = Math.random() * 4 - 2;
    // 3Dモデルを新しい位置に移動する
    model.setAttribute('position', `${x} ${y} ${z}`);
});