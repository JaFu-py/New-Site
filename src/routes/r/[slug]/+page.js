import supabase from "$lib/subabase.js";

export async function load({fetch, params}) {
    const {data} = await supabase.from('links').select('*').eq("slug", params.slug);

    console.log(JSON.stringify(data));

    if (data.error) throw data.error;
    return data ? data[0] : {
        data: "404"
    }
}