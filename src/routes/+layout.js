export async function load({ fetch, params }) {
    let ipAddress
	try {
      const response = await fetch('https://ipinfo.io/json');
      const data = await response.json();
       ipAddress = JSON.stringify(data.ip);
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
    console.log(ipAddress)
    return {ipAddress}
}