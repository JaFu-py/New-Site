import supabase from '$lib/subabase.js';

export async function load({ fetch, params }) {
	const { data } = await supabase.from('links').select('*').eq('slug', params.slug);

<<<<<<< Updated upstream
    console.log(JSON.stringify(data));
=======
	// console.log(JSON.stringify(data));
>>>>>>> Stashed changes

	if (data.error) throw data.error;
	return data
		? data[0]
		: {
				data: '404'
		  };
}
