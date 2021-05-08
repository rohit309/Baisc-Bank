const mongoose = require("mongoose");
const Customer = require("./models/user");

mongoose.connect("mongodb://localhost:27017/banking", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log("error", err);
    })

const v = async () => {
    await Customer.deleteMany({});
    await Customer.insertMany([{
        username: "Mihali Modi", 
        email: "mihaliMODI@gmail.com", 
        Balance: 100000, 
        avatar: "https://images.unsplash.com/photo-1619286188088-de820bdc1230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjgwODF8MHwxfGFsbHx8fHx8fHx8fDE2MjAwNDA2Nzk&ixlib=rb-1.2.1&q=80&w=1080", 
        contact: 8219232323, 
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ."
    }, 
    {
        username: "Sanjay Singania.", 
        email: "sanjay.dada@gmail.com", 
        Balance: 300000, 
        avatar: "https://images.unsplash.com/photo-1614949271640-df5233fb77b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjgwODF8MHwxfGFsbHx8fHx8fHx8fDE2MjAwNDA0OTc&ixlib=rb-1.2.1&q=80&w=1080", 
        contact: 7712400440, 
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    }, 
    {
        username: "Mahira Singal", 
        email: "mahira.cute@gmail.com", 
        Balance: 5000, 
        avatar: "https://images.unsplash.com/photo-1618655108396-ce1ba6c80b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjgwODF8MHwxfGFsbHx8fHx8fHx8fDE2MjAwNDA3OTA&ixlib=rb-1.2.1&q=80&w=1080", 
        contact: 8823324064, 
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    },
    {
        username: "Vikas Singh.", 
        email: "vikasingh@gmail.com", 
        Balance: 240000, 
        avatar: "https://images.unsplash.com/photo-1513258496099-48168024aec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjgwODF8MHwxfGFsbHx8fHx8fHx8fDE2MjAwNDAzNjg&ixlib=rb-1.2.1&q=80&w=1080", 
        contact: 7790422189, 
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam."
    },
    {
        username: "Manny More",
        email: "mannyM@gmail.com", 
        Balance: 25000, 
        avatar: "https://images.unsplash.com/photo-1594270410221-e6a33cbc6fb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjgwODF8MHwxfGFsbHx8fHx8fHx8fDE2MjAwNDA5NzQ&ixlib=rb-1.2.1&q=80&w=1080", 
        contact: 6631123098, 
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    },
    {
        username: "Gyan Saha.", 
        email: "gyan.saha2@gmail.com", 
        Balance: 50000, 
        avatar: "https://images.unsplash.com/photo-1615712051258-7eb1af053a99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjgwODF8MHwxfGFsbHx8fHx8fHx8fDE2MjAwNDAyMzM&ixlib=rb-1.2.1&q=80&w=1080", 
        contact: 8234580971, 
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    },
    {
        username: "Ritika Jha", 
        email: "ritika124@gmail.com", 
        Balance: 360000, 
        avatar: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjgwODF8MHwxfGFsbHx8fHx8fHx8fDE2MjAwNDEwNzE&ixlib=rb-1.2.1&q=80&w=1080", 
        contact: 8234580971, 
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    },
    {
        username: "Himanshu Dewagan.", 
        email: "himanshu3456@gmail.com", 
        Balance: 450000, 
        avatar: "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjgwODF8MHwxfGFsbHx8fHx8fHx8fDE2MjAwNDAwOTE&ixlib=rb-1.2.1&q=80&w=1080", 
        contact: 8234580971, 
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    },
    {
        username: "Anne Jackson", 
        email: "aneeeeeeee@gmail.com", 
        Balance: 560000, 
        avatar: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjgwODF8MHwxfGFsbHx8fHx8fHx8fDE2MjAwNDExNzQ&ixlib=rb-1.2.1&q=80&w=1080", 
        contact: 8234580971, 
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    },
    {
        username: "Nriyal Anna.", 
        email: "narial345@gmail.com", 
        Balance: 10000000, 
        avatar: "https://images.unsplash.com/photo-1594235634014-dc6216bcd0fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjgwODF8MHwxfGFsbHx8fHx8fHx8fDE2MjAwMzkzOTA&ixlib=rb-1.2.1&q=80&w=1080", 
        contact: 2098453187, 
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam."
    }]);
};

v();