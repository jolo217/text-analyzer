function averageWordLength(value) {
	var wordsArray = value.split(" ");
	var totalLength = wordsArray.join("").length;
	return (totalLength / wordsArray.length).toFixed(2);
}

function uniqueWords(value) {
	var wordsArray = value.split(" ");
	var uniqueWords = [];
	for (var i = 0; i < wordsArray.length; i++) {
		if (uniqueWords.indexOf(wordsArray[i]) === -1) {
			uniqueWords.push(wordsArray[i]);
		}
	}
	return uniqueWords.length;
}

function WordCount(str) { 
  return str.split(" ").length;
}

$(".submit-button").click(function(event) { 
	event.preventDefault();
	var writtenValue = $("#user-text").val();
	var averageWord = averageWordLength(writtenValue);
	var uniqueWordCount = uniqueWords(writtenValue);
	var totalWordCount = WordCount(writtenValue);
	$(".js-word-count").text(totalWordCount);
	$(".js-unique-word-count").text(uniqueWordCount);
	$(".js-average-word-length").text(averageWord);
	$(".text-report").removeClass("hidden");
});
