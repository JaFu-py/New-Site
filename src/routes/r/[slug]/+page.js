import supabase from '$lib/subabase.js';

export async function load({ fetch, params }) {
	const { data } = await supabase.from('links').select('*').eq('slug', params.slug);


	if (data.error) console.log( data.error);
	return data
		? data[0]
		: {
				data: '404'
		  };
}
