 
const themes = {
    "bright": {
        "backgroundColor": "lightyellow",
        "color": "darkgreen"
    },
    "cool": {
        "backgroundColor": "lightgray",
        "color": "indigo"
    },
    "fiery": {
        "backgroundColor": "chocolate",
        "color": "lightgoldenyellow"
    }
};

function changeTheme(event) {
    
    const selectedTheme = event.target.id;

 
    const theme = themes[selectedTheme];

 
    document.body.style.backgroundColor = theme.backgroundColor;
    document.body.style.color = theme.color;
}

 

