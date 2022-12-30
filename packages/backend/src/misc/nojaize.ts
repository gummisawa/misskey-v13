export function nojaize(text: string): string {
	return text
		// ja-JP
		.replace(/だ$/gm, 'じゃ')
		.replace(/(だ{1})(?=。|\.|、|\,|\！|\!|\?|\？)/gm, 'じゃ')
		/*.replace(/(だ{1})(?=、)/gm, 'じゃ')
		.replace(/(だ{1})(?=\！)/gm, 'じゃ')
		.replace(/(だ{1})(?=\.)/gm, 'じゃ')
		.replace(/(だ{1})(?=\,)/gm, 'じゃ')
		.replace(/(だ{1})(?=\!)/gm, 'じゃ')*/
		.replace(/のだ$/gm, 'のじゃ')
		.replace(/(のだ{1})(?=。|\.|、|\,|\！|\!|\?|\？)/gm, 'のじゃ')		
		/*.replace(/(のだ{1})(?=、)/gm, 'のじゃ')
		.replace(/(のだ{1})(?=\！)/gm, 'のじゃ')
		.replace(/(のだ{1})(?=\.)/gm, 'のじゃ')
		.replace(/(のだ{1})(?=\,)/gm, 'のじゃ')
		.replace(/(のだ{1})(?=\!)/gm, 'のじゃ')*/
		.replace(/かな$/gm, 'かの')
		.replace(/(かな{1})(?=。|\.|、|\,|\！|\!|\?|\？)/gm, 'かの')
		/*.replace(/(かな{1})(?=、)/gm, 'かの')
		.replace(/(かな{1})(?=\.$)/gm, 'かの')
		.replace(/(かな{1})(?=\,)/gm, 'かの')
		.replace(/(かな{1})(?=\?)/gm, 'かの')
		.replace(/(かな{1})(?=\？)/gm, 'かの')
		.replace(/(かな{1})(?=\!)/gm, 'かの')
		.replace(/(かな{1})(?=\！)/gm, 'かの')*/
		.replace(/だな$/gm, 'じゃの')
		.replace(/(だな{1})(?=。|\.|、|\,|\！|\!|\?|\？)/gm, 'じゃの')
		/*.replace(/(だな{1})(?=、)/gm, 'じゃの')
		.replace(/(だな{1})(?=\.)/gm, 'じゃの')
		.replace(/(だな{1})(?=\,)/gm, 'じゃの')
		.replace(/(だな{1})(?=\?)/gm, 'じゃの')
		.replace(/(だな{1})(?=\？)/gm, 'じゃの')
		.replace(/(だな{1})(?=\!)/gm, 'じゃの')
		.replace(/(だな{1})(?=\！)/gm, 'じゃの')*/
		.replace(/なの$/gm, 'なのじゃ')
		.replace(/(なの{1})(?=。|\.|、|\,|\！|\!|\?|\？)/gm, 'なのじゃ')
		/*.replace(/(なの{1})(?=、)/gm, 'なのじゃ')
		.replace(/(なの{1})(?=\！)/gm, 'なのじゃ')
		.replace(/(なの{1})(?=\.)/gm, 'なのじゃ')
		.replace(/(なの{1})(?=\,)/gm, 'なのじゃ')
		.replace(/(なの{1})(?=\!)/gm, 'なのじゃ')*/;
}
