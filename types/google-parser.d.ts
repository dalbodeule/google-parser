declare module 'google-parser' {
	function img (search: string):
		Promise<Array<imgReturn>>
	function jpg (search: string):
		Promise<Array<imgReturn>>
	function search (string: string):
		Promise<Array<searchReturn>|error>

	interface imgReturn {
		img: string,
		url: string
	}
	
	interface searchReturn {
		title: string,
		link: string,
		description: string
	}

	interface error {
		error: true,
		reson: string
	}
}