const express = require('express');
const app = express();
const port = 3000;

let contentGroupId = {};


let obj = {
classGroups:
    [
    {
        classGroupId: 0,
            classes: [
            {
                classid: 0,
                progressPercentage: 100,
                classIconURL: "https://i.imgur.com/oiHwwkM.png",
            },
            {
                classid: 1,
                progressPercentage: 100,
                classIconURL: "https://i.imgur.com/oiHwwkM.png",
            },
            {
                classid: 2,
                progressPercentage: 85,
                classIconURL: "https://i.imgur.com/oiHwwkM.png",
            },
            {
                classid: 3,
                progressPercentage: 64,
                classIconURL: "https://i.imgur.com/oiHwwkM.png",
            },
            {
                classid: 4,
                progressPercentage: 15,
                classIconURL: "https://i.imgur.com/oiHwwkM.png",
            }
        ]
    },
    {
        classGroupId: 1,
            classes: [
            {
                classid: 0,
                progressPercentage: 100,
                classIconURL: "https://i.imgur.com/oiHwwkM.png",
            },
            {
                classid: 1,
                progressPercentage: 100,
                classIconURL: "https://i.imgur.com/oiHwwkM.png",
            },
            {
                classid: 2,
                progressPercentage: 85,
                classIconURL: "https://i.imgur.com/oiHwwkM.png",
            },
            {
                classid: 3,
                progressPercentage: 64,
                classIconURL: "https://i.imgur.com/oiHwwkM.png",
            },
            {
                classid: 4,
                progressPercentage: 15,
                classIconURL: "https://i.imgur.com/oiHwwkM.png",
            }
        ]
    },
    ]
}

app.get('/obj', (req, res) => {
    res.send(obj);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

