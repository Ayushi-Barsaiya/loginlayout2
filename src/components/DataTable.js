import { useEffect, useState } from "react";
import api from "./api"


function DataTable() {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        api.get('/response')
            .then(resp => setPosts(resp))
    }, []);


    return (
        <div >
            {console.log(posts)}
            {/* {console.log(posts.data[0].id)} */}
            DataTable!!

            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>School</th>
                        <th>Class^v</th>
                        <th>Status</th>
                    </tr>
                    {posts && posts.data.length > 0 ?
                        posts.data.map(e =>
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.Name}</td>
                                <td>{e.Age}</td>
                                <td>{e.School}</td>
                                <td>dd</td>
                                <td>{e.Status}</td>
                            </tr>)
                        : 'loading'}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
