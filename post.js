const postData = [
    {
        author: "Raunak Srivastava",
        title: "Hello there,This is Post!",
        summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        author: "Nakul Gopal",
        title: "Hello there,This is Post!",
        summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        author: "Shubham Soni",
        title: "Hello there,This is Post!",
        summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        author: "Abhishek Kumar",
        title: "Hello there,This is Post!",
        summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        author: "Sameer Soni",
        title: "Hello there,This is Post!",
        summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        author: "Manikantha S",
        title: "Hello there,This is Post!",
        summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

]

const addPostContent = () => {
    const postContainer = document.getElementsByClassName("main-container")[0]
    postData.forEach((post, index) => {
        const { title,author,summary} = post // Object destructuring
        const cardDiv = document.createElement("div")
        cardDiv.className = "card"
        cardDiv.innerHTML = `<div class="author-container">
                                <h5>${author}</h5>
                            </div>
                            <div class="post-container">
                                <h3>${title} ${index + 1}</h3>
                                <p>${summary}</p>
                                <i class="fa fa-trash trash-icon" aria-hidden="true"></i>
                                <i class="fa fa-ellipsis-h elipsis-icon" aria-hidden="true"></i>
                            </div>`
        postContainer.appendChild(cardDiv)
    })
}