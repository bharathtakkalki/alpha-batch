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
let postDataState;
let lastDeleted = [];


const addPostContent = (data=postData) => {
    const postContainer = document.getElementsByClassName("main-container")[0]
    data.forEach((post, index) => {
        const { title,author,summary} = post // Object destructuring
        const cardDiv = document.createElement("div")
        cardDiv.className = "card"
        cardDiv.innerHTML = `<div class="author-container">
                                <h5>${author}</h5>
                            </div>
                            <div class="post-container">
                                <h3>${title} ${index + 1}</h3>
                                <p>${summary}</p>
                                <i class="fa fa-trash trash-icon" aria-hidden="true" onclick="deleteClickHandler(${index})" ></i>
                                <i class="fa fa-ellipsis-h elipsis-icon" aria-hidden="true"></i>
                            </div>`
        postContainer.appendChild(cardDiv)
    })
    postDataState = data
}

const removeAllElements = (className) =>{
    const element = document.getElementsByClassName(className)[0]
    element.innerHTML = ""
}

const deleteClickHandler = (index) =>{
    lastDeleted.push(postDataState.filter((item,i)=> i === index))
    const newPostData = postDataState.filter((item,i) => i !== index)
    removeAllElements("main-container")
    addPostContent(newPostData)
}

const getAllDataClickHandler = () =>{
    removeAllElements("main-container")
    addPostContent()
}

const undoClickHandler = () =>{
    if(lastDeleted.length === 0) return;
    const newPostData = [...postDataState]
    newPostData.push(lastDeleted.pop()[0])
    removeAllElements("main-container")
    addPostContent(newPostData)
}


const addPostClickHandler = () =>{
    const createModal = document.getElementById("create-post-modal")
    createModal.style.display = "flex"
}
const closeCreatePostClickHandler = () =>{
    const createModal = document.getElementById("create-post-modal")
    createModal.style.display = ""
}

const getValueFromElement = (id) =>{
    return document.getElementById(id).value
}
const clearFieldsUsingIds = (ids) =>{
    ids.forEach(id =>{
        document.getElementById(id).value = ""
    })
}

const createPostSubmitHandler = (event) =>{
    event.preventDefault()
    const title = getValueFromElement("title")
    const author = getValueFromElement("author")
    const summary = getValueFromElement("summary")
    const newPostData = [...postDataState]
    newPostData.push({title,author,summary})
    removeAllElements("main-container")
    addPostContent(newPostData)
    clearFieldsUsingIds(["title","author","summary"])
    closeCreatePostClickHandler()
}


// Assignment - Add Post 
/*
Step1: Create Click handler for the add post button 
Step2: Add Modal for the Create Post 
Step3: In the modal need Three fields for #Title #Author #Summary & Save Post - button
Step4: Create click handler for Save Post - Button , Which renders the new post on the Screen
*/


// Session Storage-2mb  , localstorage-5mb // Cookies-5kb 