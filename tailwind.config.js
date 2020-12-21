module.exports = {
    purge: {
        content: [
            './content/**/*.njk',
            './content/**/*.html',
            './content/**/*.md',
            './assets/scripts/**/*.js',
        ],
        options: {
            safelist: ['h1:hover > div'],
        },
    },
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                header: "'Lora', serif",
                body: "'Merriweather', serif",
                display: "'Poppins', sans-serif",
            },
            width: {
                headerImage: '27rem',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
