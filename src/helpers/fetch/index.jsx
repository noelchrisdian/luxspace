const fetchData = async ({
	url,
	method = "GET",
	host = import.meta.env.VITE_API_HOST,
}) => {
	const response = await fetch(`${host}${url}`, {
        method,
        mode: "cors",
        headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.ok) {
        return data;
    }
    throw new Error(JSON.stringify(data));
}

export { fetchData };