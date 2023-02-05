export function nyaize(text: string): string {
	return text
		// ja-JP
		.replace(/な$/gm, 'にゃ')
		.replace(/ナ/gm, 'ニャ')
		.replace(/ﾅ/gm, 'ﾆｬ')
		.replace(/(な{1})(?=。|\.|、|\,|\！|\!|\?|\？|\…|\・|\‥)/gm, 'にゃ')
		.replace(/(ナ{1})(?=。|\.|、|\,|\！|\!|\?|\？|\…|\・|\‥)/gm, 'ニャ')
		.replace(/(ﾅ{1})(?=。|\.|、|\,|\！|\!|\?|\？|\…|\・|\‥)/gm, 'ﾆｬ')
		/*.replace(/(な{1})(?=\？)/gm, 'にゃ')
		.replace(/(な{1})(?=\!)/gm, 'にゃ')
		.replace(/(な{1})(?=\！)/gm, 'にゃ')
		.replace(/(な{1})(?=、)/gm, 'にゃ')
		.replace(/(な{1})(?=\,)/gm, 'にゃ')
		.replace(/(な{1})(?=。)/gm, 'にゃ')
		.replace(/(な{1})(?=\.)/gm, 'にゃ')*/
		// en-US
		.replace(/(?<=n)a/gi, x => x === 'A' ? 'YA' : 'ya')
		.replace(/(?<=morn)ing/gi, x => x === 'ING' ? 'YAN' : 'yan')
		.replace(/(?<=every)one/gi, x => x === 'ONE' ? 'NYAN' : 'nyan')
		// ko-KR
		.replace(/[나-낳]/g, match => String.fromCharCode(
			match.charCodeAt(0)! + '냐'.charCodeAt(0) - '나'.charCodeAt(0),
		))
		.replace(/(다$)|(다(?=\.))|(다(?= ))|(다(?=!))|(다(?=\?))/gm, '다냥')
		.replace(/(야(?=\?))|(야$)|(야(?= ))/gm, '냥');
}
