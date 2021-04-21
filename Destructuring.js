const post = {
    username:"raunak",
    author: "Raunak Srivastava",
    title: "Hello there,This is Post!",
    summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    comment: {
        username: "Nitish Kumar",
        comment: "Good Post!"
    }
}

console.log(post.author)
console.log(post.title)

const {username:usrName, title, author: ath, likes = 10, summary, dislike, comment:{username,comment}} = post
// Javascript Standard - Use Block Scopic variables  

console.log(comment)
console.log(username)
console.log(title)
console.log(ath)
console.log(likes)
console.log(summary)
console.log(dislike)

console.log(post)

const numbers = ["1","2","3"]

const [one,two] = numbers


console.log(one)
console.log(two)