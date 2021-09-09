const input = [[0, 1910, 0, 2, 4860, 6, 236, 3, 2, 50.5675765, 5.7993136]];

require("ml-xgboost").then((XGBoost) => {
	model = XGBoost.loadFromModel("immobelgium_model");
	const predictions = model.predict(input);
	console.log(predictions, "predictions");
	model.free();
});
