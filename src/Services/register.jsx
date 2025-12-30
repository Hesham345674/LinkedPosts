import axios from "axios";





export async function sendRegisteredData(values) {

    try {
        const { data } = await axios.post(`https://linked-posts.routemisr.com/users/signup
`, values);

        console.log(data);
        return data;
    }
    catch (err) {

        return err.response.data

    }
}