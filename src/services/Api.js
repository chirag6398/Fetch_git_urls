export function Api(userName) {
    var result;
    console.log(userName)
    async function user(userName) {
        var data1 = await fetch(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc`);
        var data2 = await data1.json();
        console.log(data2);
        return data2;
 }
    result = await user(userName);

    return result;


    // axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc`)
    // .then((res) => {
    //     result=res;
    //     console.log(result)
    // }).catch((err) => {
    //  result=err;
    // });

    // return result
}
