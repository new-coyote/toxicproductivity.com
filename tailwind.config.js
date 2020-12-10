module.exports = {
    purge: [
        './content/**/*.njk',
        './content/**/*.html',
        './assets/scripts/**/*.js',
    ],
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
