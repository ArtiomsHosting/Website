tailwind.config = {
    theme: {
        extend: {
            colors: {
                header: {
                    bg: "#1a1c24",
                    text_color: "#f2f2f2",
                    text_color_hover: "black",
                    text_bg: "white"
                },
                main: {
                    bg: "#272934"
                },
                bg: "#272934",
                default_text: "#f2f2f2"
            },
        },
        screens: {
            med_header: {max: '1100px'},
            min_header: {max: '720px'},
            phone: {max: '420px'}
        }
    }
}