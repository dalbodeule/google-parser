declare module 'google-parser' {
	function img (search: string):
		Promise<imgReturn>
	function jpg (search: string):
		Promise<imgReturn>
	function search (string: string):
		Promise<searchReturn|error>

	interface imgReturn {
		[index: number]: {
			img: string,
			url: string
		}
	}
	
	interface searchReturn {
		[index: number]: {
			title: string,
			link: string,
			description: string
		}
	}

	interface error {
		error: true,
		reson: string
	}
}