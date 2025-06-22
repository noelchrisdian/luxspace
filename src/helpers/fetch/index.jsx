const fetchData = async ({
	url,
	method = "GET",
    host = import.meta.env.VITE_API_HOST,
    body,
}) => {
	const response = await fetch(`${host}${url}`, {
        method,
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body
    })
    const data = response.status === 200 ? await response.json() : response;
    if (response.ok) {
        return data;
    }
    throw new Error(JSON.stringify(data));
}

export { fetchData };