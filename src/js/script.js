const figureSelect = $("#figure-selection");
const colorInput = $("#color");
const figureShow = $("#figure");

const choiceFigures = (value) => {
    switch(value) {
        case 'circle':
            figureShow.attr("class", "circle");
        break;
      
        case 'rectangle':
            figureShow.attr("class", "rectangle");
        break;

        case 'square':
            figureShow.attr("class", "square");
        break;
    };
};

const changeColor = (value) => {
    figureShow.css("background-color", value);
};

figureSelect.change(({ target: { value } }) => {
    choiceFigures(value);
    figureShow.hide().fadeIn("slow");
});

colorInput.on("input", ({ target: { value } }) => {
    changeColor(value);
    figureShow.hide().fadeIn("slow");
});

changeColor(colorInput.val());
choiceFigures(figureSelect.val());