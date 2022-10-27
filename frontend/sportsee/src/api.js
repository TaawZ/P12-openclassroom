export async function getData(url) {
	return fetch(url).then((res) => {
		if (res.ok) {
			return res.json();
		} else {
			throw alert("Error on load");
		}
	});
}
