const model = document.querySelector('#cat-model');
model.addEventListener('click', () =>{
    // 3Dモデルを移動する
    const x = Math.random() * 4 - 2;
    const y = Math.random() * 4 - 2;
    const z = Math.random() * 4 - 2;
    model.cameraControls.target = `${x} ${y} ${z}`;
});